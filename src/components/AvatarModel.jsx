import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AvatarModel = ({ 
  modelPath, 
  playAnimation = true, 
  scale = 1.6, 
  position = [0, -1.2, 0],
  jumpTrigger = 0,
  spinTrigger = 0
}) => {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions, names } = useAnimations(animations, group);

  // Bone references for head tracking look-at
  const headRef = useRef(null);
  const neckRef = useRef(null);

  // Interaction refs
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });

  // Spring physics variables - adjusted for looser, more flexible "rubber-like" wobble
  const springOffset = useRef({ x: 0, y: 0 });
  const springVelocity = useRef({ x: 0, y: 0 });
  const tension = 0.08; // looser spring stiffness
  const damping = 0.88; // smoother recoil motion

  // Programmatic movement triggers
  const jumpTime = useRef(0);
  const isJumping = useRef(false);
  const spinTime = useRef(0);
  const isSpinning = useRef(false);

  // Listen to parent layout triggers
  useEffect(() => {
    if (jumpTrigger > 0 && !isJumping.current) {
      isJumping.current = true;
      jumpTime.current = 0;
    }
  }, [jumpTrigger]);

  useEffect(() => {
    if (spinTrigger > 0 && !isSpinning.current) {
      isSpinning.current = true;
      spinTime.current = 0;
    }
  }, [spinTrigger]);

  // Find head and neck bones dynamically in the loaded skeleton
  useEffect(() => {
    if (!scene) return;
    headRef.current = null;
    neckRef.current = null;

    scene.traverse((child) => {
      if (child.isBone) {
        const name = child.name.toLowerCase();
        if (name.includes("head")) {
          headRef.current = child;
        } else if (name.includes("neck")) {
          neckRef.current = child;
        }
      }
    });
  }, [scene]);

  // Handle playing animation clips
  useEffect(() => {
    if (playAnimation && names.length > 0) {
      const actionName = names[0];
      const action = actions[actionName];
      if (action) {
        action.reset().fadeIn(0.5).play();
      }
      return () => {
        if (action) action.fadeOut(0.5);
      };
    }
  }, [playAnimation, names, actions, modelPath]);

  // Trigger random click reaction
  const triggerClickReaction = () => {
    if (Math.random() > 0.5) {
      if (!isJumping.current) {
        isJumping.current = true;
        jumpTime.current = 0;
      }
    } else {
      if (!isSpinning.current) {
        isSpinning.current = true;
        spinTime.current = 0;
      }
    }
  };

  // Frame animation loop for interactive physics
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x; // Range [-1, 1]
    const mouseY = state.pointer.y; // Range [-1, 1]

    let currentTiltX = 0;
    let currentTiltY = 0;

    if (isDragging.current) {
      // Direct drag tilt - slightly higher range for flexibility
      currentTiltX = dragOffset.current.y * 2.0; // pitch (tilt up/down)
      currentTiltY = dragOffset.current.x * 2.0; // yaw (tilt left/right)
    } else {
      // Solve Hooke's Law: F = -k * x - c * v
      const forceX = -springOffset.current.x * tension;
      springVelocity.current.x = (springVelocity.current.x + forceX) * damping;
      springOffset.current.x += springVelocity.current.x;

      const forceY = -springOffset.current.y * tension;
      springVelocity.current.y = (springVelocity.current.y + forceY) * damping;
      springOffset.current.y += springVelocity.current.y;

      currentTiltX = springOffset.current.y * 2.0;
      currentTiltY = springOffset.current.x * 2.0;
    }

    // 1. Neck and Head Look-At Tracking (only when not dragging)
    if (!isDragging.current) {
      if (headRef.current) {
        // High range look-at tracking for flexibility
        const targetHeadY = mouseX * 0.65; // yaw limits
        const targetHeadX = -mouseY * 0.4; // pitch limits

        headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadY, 0.1);
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadX, 0.1);
      }

      if (neckRef.current) {
        const targetNeckY = mouseX * 0.22;
        const targetNeckX = -mouseY * 0.15;

        neckRef.current.rotation.y = THREE.MathUtils.lerp(neckRef.current.rotation.y, targetNeckY, 0.1);
        neckRef.current.rotation.x = THREE.MathUtils.lerp(neckRef.current.rotation.x, targetNeckX, 0.1);
      }
    }

    // 2. Programmatic click physics calculations
    let jumpOffset = 0;
    if (isJumping.current) {
      jumpTime.current += 0.05;
      const t = jumpTime.current;
      if (t < Math.PI) {
        jumpOffset = Math.sin(t) * 0.55; // jump height
      } else {
        isJumping.current = false;
        // landing compressed recoil
        springOffset.current.y = -0.28;
        springVelocity.current.y = 0.09;
      }
    }

    let spinOffset = 0;
    if (isSpinning.current) {
      spinTime.current += 0.05;
      const t = spinTime.current;
      if (t < 1) {
        const ease = t * t * (3 - 2 * t);
        spinOffset = ease * Math.PI * 2;
      } else {
        isSpinning.current = false;
        springOffset.current.x = 0.38;
        springVelocity.current.x = -0.1;
      }
    }

    // 3. Gentle Breathing & Group Position
    if (group.current) {
      // Natural bobbing up and down + jump offset
      group.current.position.y = position[1] + Math.sin(time * 2) * 0.035 + jumpOffset;

      // Group sways towards cursor with wider flexible range
      const targetGroupY = isDragging.current ? currentTiltY : (mouseX * 0.22 + currentTiltY + spinOffset);
      const targetGroupX = isDragging.current ? currentTiltX : (-mouseY * 0.12 + currentTiltX);

      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetGroupY, 0.1);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetGroupX, 0.1);
    }
  });

  return (
    <group 
      ref={group} 
      position={position} 
      scale={scale} 
      dispose={null}
      onPointerDown={(e) => {
        e.stopPropagation();
        isDragging.current = true;
        dragStart.current = { x: e.clientX, y: e.clientY };
        dragOffset.current = { x: 0, y: 0 };
        e.target.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!isDragging.current) return;
        e.stopPropagation();
        const deltaX = (e.clientX - dragStart.current.x) * 0.003;
        const deltaY = (e.clientY - dragStart.current.y) * 0.003;
        dragOffset.current = { x: deltaX, y: deltaY };
      }}
      onPointerUp={(e) => {
        if (!isDragging.current) return;
        e.stopPropagation();
        isDragging.current = false;

        const rawDeltaX = e.clientX - dragStart.current.x;
        const rawDeltaY = e.clientY - dragStart.current.y;
        const clickDist = Math.hypot(rawDeltaX, rawDeltaY);

        if (clickDist < 8) {
          triggerClickReaction();
        } else {
          springOffset.current = { x: dragOffset.current.x, y: dragOffset.current.y };
        }
        dragOffset.current = { x: 0, y: 0 };
        e.target.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={(e) => {
        if (!isDragging.current) return;
        isDragging.current = false;
        springOffset.current = { x: dragOffset.current.x, y: dragOffset.current.y };
        dragOffset.current = { x: 0, y: 0 };
      }}
    >
      <primitive object={scene} />
    </group>
  );
};

// Pre-load models
useGLTF.preload("/models/avatar-animated.glb");
useGLTF.preload("/models/avatar-standing.glb");

export default AvatarModel;
