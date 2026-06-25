import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AvatarModel = ({ modelPath, playAnimation = true, scale = 1.6, position = [0, -1.2, 0] }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions, names } = useAnimations(animations, group);

  // Bone references for head tracking look-at
  const headRef = useRef(null);
  const neckRef = useRef(null);

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

  // Frame animation loop for interactive physics
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x; // Range [-1, 1]
    const mouseY = state.pointer.y; // Range [-1, 1]

    // 1. Neck and Head Look-At Tracking
    if (headRef.current) {
      // Smoothly rotate head to look at mouse
      const targetHeadY = mouseX * 0.45; // limit yaw
      const targetHeadX = -mouseY * 0.3; // limit pitch

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadY, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadX, 0.1);
    }

    if (neckRef.current) {
      const targetNeckY = mouseX * 0.15;
      const targetNeckX = -mouseY * 0.1;

      neckRef.current.rotation.y = THREE.MathUtils.lerp(neckRef.current.rotation.y, targetNeckY, 0.1);
      neckRef.current.rotation.x = THREE.MathUtils.lerp(neckRef.current.rotation.x, targetNeckX, 0.1);
    }

    // 2. Gentle Breathing & Body Sway Physics
    if (group.current) {
      // Natural bobbing up and down
      group.current.position.y = position[1] + Math.sin(time * 2) * 0.035;

      // Small rotation of the body towards the cursor
      const targetGroupY = mouseX * 0.15;
      const targetGroupX = -mouseY * 0.08;

      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetGroupY, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetGroupX, 0.05);
    }
  });

  return (
    <group ref={group} position={position} scale={scale} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

// Pre-load models
useGLTF.preload("/models/avatar-animated.glb");
useGLTF.preload("/models/avatar-standing.glb");

export default AvatarModel;
