import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import AvatarModel from "../components/AvatarModel";
import OrganicDotGrid from "../components/OrganicDotGrid";

const AvatarPlayground = ({ onBack }) => {
  const [modelType, setModelType] = useState("animated"); // "animated" | "standing"
  const [lightColor, setLightColor] = useState("#ffffff"); // hex color
  const [intensity, setIntensity] = useState(1.5);
  const [autoRotate, setAutoRotate] = useState(false);

  const modelPath = modelType === "animated" 
    ? "/models/avatar-animated.glb" 
    : "/models/avatar-standing.glb";

  const presetColors = [
    { name: "Neon Blue", value: "#33c2cc" },
    { name: "Royal Purple", value: "#7a57db" },
    { name: "Cyberpunk Pink", value: "#ea4884" },
    { name: "Studio White", value: "#ffffff" },
  ];

  const themes = {
    "#ffffff": { // Studio White
      canvasBg: "#ffffff",
      containerBg: "bg-white",
      borderClass: "border-neutral-200",
      ambientIntensity: 0.8,
      spotlightIntensity: 1.2,
      textColor: "text-neutral-600 bg-white/80 border-neutral-200",
      ambientColor: "#ffffff",
    },
    "#33c2cc": { // Neon Blue
      canvasBg: "#05111a",
      containerBg: "bg-gradient-to-b from-[#020d18] to-[#05111a]",
      borderClass: "border-aqua/45 shadow-[0_0_20px_rgba(51,194,204,0.15)]",
      ambientIntensity: 0.25,
      spotlightIntensity: 2.8,
      textColor: "text-aqua bg-black/60 border-aqua/30 backdrop-blur-sm",
      ambientColor: "#0b253a",
    },
    "#7a57db": { // Royal Purple
      canvasBg: "#0b061e",
      containerBg: "bg-gradient-to-b from-[#070314] to-[#0b061e]",
      borderClass: "border-lavender/45 shadow-[0_0_20px_rgba(122,87,219,0.15)]",
      ambientIntensity: 0.25,
      spotlightIntensity: 2.8,
      textColor: "text-lavender bg-black/60 border-lavender/30 backdrop-blur-sm",
      ambientColor: "#170f38",
    },
    "#ea4884": { // Cyberpunk Pink
      canvasBg: "#140410",
      containerBg: "bg-gradient-to-b from-[#0a0108] to-[#140410]",
      borderClass: "border-coral/45 shadow-[0_0_20px_rgba(234,72,132,0.15)]",
      ambientIntensity: 0.25,
      spotlightIntensity: 2.8,
      textColor: "text-coral bg-black/60 border-coral/30 backdrop-blur-sm",
      ambientColor: "#2e0924",
    }
  };

  const activeTheme = themes[lightColor] || themes["#ffffff"];

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
            <h3 className="text-sm font-semibold tracking-wide text-neutral-300 uppercase mb-3">Spotlight Glow</h3>
            <div className="grid grid-cols-2 gap-2">
              {presetColors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightColor(color.value)}
                  className={`py-1.5 px-2 rounded-md text-[11px] cursor-pointer border transition-all ${
                    lightColor === color.value 
                      ? "border-mint text-white" 
                      : "border-transparent bg-white/5 text-neutral-400 hover:bg-white/10"
                  }`}
                >
                  <span 
                    className="inline-block w-2.5 h-2.5 rounded-full mr-1.5 align-middle"
                    style={{ backgroundColor: color.value }}
                  />
                  {color.name}
                </button>
              ))}
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

        {/* 3D Canvas Box */}
        <section className={`lg:col-span-3 h-[50vh] lg:h-[70vh] relative border rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${activeTheme.containerBg} ${activeTheme.borderClass}`}>
          <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
            <color attach="background" args={[activeTheme.canvasBg]} />
            <ambientLight intensity={activeTheme.ambientIntensity} color={activeTheme.ambientColor} />
            <directionalLight position={[5, 10, 5]} intensity={1.1} color={lightColor} />
            <spotLight
              position={[0, 5, 5]}
              angle={0.6}
              penumbra={1}
              intensity={activeTheme.spotlightIntensity * (intensity / 1.5)}
              color={lightColor}
              castShadow
            />
            
            <Suspense fallback={null}>
              <Center>
                <AvatarModel modelPath={modelPath} playAnimation={modelType === "animated"} />
              </Center>
            </Suspense>

            <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              autoRotate={autoRotate}
              autoRotateSpeed={1.5}
              minDistance={1.5}
              maxDistance={8}
            />
          </Canvas>

          {/* Interactive tips */}
          <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none select-none">
            <p className={`text-xs border py-2 px-4 rounded-full inline-block shadow-sm transition-all duration-500 ${activeTheme.textColor}`}>
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
