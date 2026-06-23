import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      <AnimatePresence>
        {preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-xl border-2 border-white/20 shadow-[0_20px_50px_rgba(99,102,241,0.5)] pointer-events-none w-80"
            src={preview}
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
