import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import AvatarModel from "../components/AvatarModel";
import OrganicDotGrid from "../components/OrganicDotGrid";

const AvatarPlayground = ({ onBack }) => {
  const [modelType, setModelType] = useState("animated"); // "animated" | "standing"
  const [intensity, setIntensity] = useState(1.5);
  const [autoRotate, setAutoRotate] = useState(false);

  // States to trigger reactions in the 3D canvas from UI buttons
  const [jumpTrigger, setJumpTrigger] = useState(0);
  const [spinTrigger, setSpinTrigger] = useState(0);

  const modelPath = modelType === "animated" 
    ? "/models/avatar-animated.glb" 
    : "/models/avatar-standing.glb";

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col justify-between text-white">
      {/* Background Background Organic Dot Grid */}
      <OrganicDotGrid />

      {/* Header Panel */}
      <header className="z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-mint via-aqua to-royal">
            Play with Shivi
          </h1>
          <p className="text-xs text-neutral-400 mt-1">Interact with my customized photo-to-3D Avaturn mesh</p>
        </div>
        <button
          onClick={onBack}
          className="px-5 py-2.5 text-xs font-semibold tracking-wider text-white border border-white/10 rounded-full bg-midnight/60 backdrop-blur-md hover-animation hover:bg-neutral-800 cursor-pointer"
        >
          ← Back to Portfolio
        </button>
      </header>

      {/* Main Interactive Playground Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        {/* left settings panel */}
        <section className="lg:col-span-1 z-10 flex flex-col gap-5 p-6 rounded-2xl bg-midnight/50 border border-white/10 backdrop-blur-md">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-neutral-300 uppercase mb-3">Model Mode</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setModelType("animated")}
                className={`py-2 px-3 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  modelType === "animated" 
                    ? "bg-royal text-white shadow-md shadow-royal/30" 
                    : "bg-white/5 text-neutral-400 hover:bg-white/10"
                }`}
              >
                💃 Animated
              </button>
              <button
                onClick={() => setModelType("standing")}
                className={`py-2 px-3 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  modelType === "standing" 
                    ? "bg-royal text-white shadow-md shadow-royal/30" 
                    : "bg-white/5 text-neutral-400 hover:bg-white/10"
                }`}
              >
                🧍 Standing
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-neutral-300 uppercase mb-3">Avatar Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setJumpTrigger((prev) => prev + 1)}
                className="py-2 px-3 rounded-lg text-xs font-medium cursor-pointer transition-all bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
              >
                🦘 Jump Reaction
              </button>
              <button
                onClick={() => setSpinTrigger((prev) => prev + 1)}
                className="py-2 px-3 rounded-lg text-xs font-medium cursor-pointer transition-all bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
              >
                🌀 Spin Reaction
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-neutral-300 mb-2">
              <span>Light Intensity</span>
              <span>{intensity}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={intensity}
              onChange={(e) => setIntensity(parseFloat(e.target.value))}
              className="w-full accent-mint"
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-xs text-neutral-300">Auto-Rotate View</span>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`w-11 h-6 rounded-full transition-all relative ${
                autoRotate ? "bg-mint" : "bg-neutral-800"
              }`}
            >
              <span 
                className={`absolute w-4 h-4 rounded-full bg-white top-1 transition-all ${
                  autoRotate ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>
        </section>

        {/* 3D Canvas Box - Styled with radial studio gradient */}
        <section className="lg:col-span-3 h-[50vh] lg:h-[70vh] relative border border-neutral-200 bg-[radial-gradient(circle_at_center,_#ffffff_40%,_#e2e8f0_100%)] rounded-3xl overflow-hidden shadow-2xl">
          <Canvas camera={{ position: [0, 0.1, 4.5], fov: 45 }} gl={{ alpha: true }}>
            {/* Dynamic responsive lighting exposure */}
            <ambientLight intensity={0.3 + intensity * 0.15} />
            <directionalLight position={[5, 10, 5]} intensity={intensity * 0.7} color="#ffffff" />
            <spotLight
              position={[0, 5, 5]}
              angle={0.6}
              penumbra={1}
              intensity={intensity * 0.8}
              color="#ffffff"
              castShadow
            />
            
            <Suspense fallback={null}>
              {/* Direct precise Y positioning to prevent head cut-off */}
              <AvatarModel 
                modelPath={modelPath} 
                playAnimation={modelType === "animated"} 
                scale={1.3} 
                position={[0, -1.3, 0]}
                jumpTrigger={jumpTrigger}
                spinTrigger={spinTrigger}
              />
              {/* Soft floor shadow to ground the character */}
              <ContactShadows 
                position={[0, -1.32, 0]} 
                opacity={0.45} 
                scale={5} 
                blur={2.2} 
                far={2} 
              />
            </Suspense>

            <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              target={[0, -0.1, 0]}
              autoRotate={autoRotate}
              autoRotateSpeed={1.5}
              minDistance={1.5}
              maxDistance={8}
            />
          </Canvas>

          {/* Interactive tips */}
          <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none select-none">
            <p className="text-xs text-neutral-600 bg-white/80 backdrop-blur-sm border border-neutral-200 py-2 px-4 rounded-full inline-block shadow-sm">
              🖱️ Drag to rotate | 📜 Scroll to zoom
            </p>
          </div>
        </section>
      </main>

      <footer className="z-10 py-6 text-center text-xs text-neutral-500 max-w-7xl mx-auto w-full border-t border-white/5 mt-4">
        © 2026 Shivansh Sharma. Rendered with React Three Fiber.
      </footer>
    </div>
  );
};

export default AvatarPlayground;
