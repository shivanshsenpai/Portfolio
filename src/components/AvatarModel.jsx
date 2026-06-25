import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const AvatarModel = ({ modelPath, playAnimation = true, scale = 1.6, position = [0, -1.2, 0] }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (playAnimation && names.length > 0) {
      // Play the first animation clip baked into the GLB model
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

  return (
    <group ref={group} position={position} scale={scale} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

// Pre-load the models to prevent glitching during switching
useGLTF.preload("/models/avatar-animated.glb");
useGLTF.preload("/models/avatar-standing.glb");

export default AvatarModel;
