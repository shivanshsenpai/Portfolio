import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 backdrop-blur-sm bg-black/50">
      <motion.div
        className="relative max-w-2xl w-full border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-3 right-3 bg-midnight/80 backdrop-blur-md border border-white/10 hover:bg-neutral-800 transition-colors"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>
        <div className="overflow-y-auto flex-1">
          <img src={image} alt={title} className="w-full h-48 sm:h-64 md:h-auto object-cover rounded-t-2xl" />
          <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" alt="arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  );
};

export default ProjectDetails;
