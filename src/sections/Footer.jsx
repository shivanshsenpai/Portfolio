import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { mySocials } from "../constants";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null); // 'terms' | 'privacy' | null

  const modalContent = {
    terms: {
      title: "Terms & Conditions",
      text: "All components, styles, and assets on this portfolio are built to the highest standard of quality. As a rule of craft, nothing on this website should feel left out or underworked. Every single element is designed, refined, and verified to be complete, functional, and polished."
    },
    privacy: {
      title: "Privacy Policy",
      text: "Your privacy is respected. No analytics, tracking pixels, or cookies are utilized on this site. Data submitted through the contact form is processed securely via EmailJS, and no personal information is stored or shared."
    }
  };

  return (
    <section className="relative pb-8 text-sm text-neutral-400 c-space mt-20">
      <div className="mb-8 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      {/* Contact & Buttons Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="text-center md:text-left">
          <p className="text-lg font-medium text-white mb-1">Let's connect</p>
          <a 
            href="mailto:shivanshsharma3000@gmail.com" 
            className="text-neutral-400 hover:text-white transition-colors text-base"
          >
            shivanshsharma3000@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <a
            href="mailto:shivanshsharma3000@gmail.com"
            className="px-6 py-3 text-sm font-medium text-center text-white rounded-full bg-radial from-lavender to-royal hover-animation shadow-md shadow-royal/20"
          >
            Mail Me
          </a>
          <a
            href="/assets/Shivansh_June_CV.pdf"
            download="Shivansh_Sharma_Resume.pdf"
            className="px-6 py-3 text-sm font-medium text-center text-white border border-white/10 rounded-full bg-primary/40 hover-animation"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Existing Footer Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
        <div className="flex gap-2 text-xs">
          <button 
            onClick={() => setActiveModal("terms")} 
            className="hover:text-white cursor-pointer transition-colors bg-transparent border-0 p-0 font-inherit"
          >
            Terms & Conditions
          </button>
          <p>|</p>
          <button 
            onClick={() => setActiveModal("privacy")} 
            className="hover:text-white cursor-pointer transition-colors bg-transparent border-0 p-0 font-inherit"
          >
            Privacy Policy
          </button>
        </div>
        <div className="flex gap-3 justify-center">
          {mySocials.map((social, index) => (
            <a 
              href={social.href} 
              key={index}
              className="p-1 border border-white/5 rounded-full hover:bg-white/5 transition-all hover-animation"
            >
              <img src={social.icon} className="w-5 h-5" alt={social.name} />
            </a>
          ))}
        </div>
        <p className="text-xs text-neutral-500">© 2026 Shivansh Sharma. All rights reserved.</p>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/40">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md p-6 border rounded-2xl shadow-xl bg-midnight border-white/10 text-neutral-300"
            >
              <button 
                onClick={() => setActiveModal(null)} 
                className="absolute p-1.5 rounded-lg top-4 right-4 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <img src="assets/close.svg" className="w-5 h-5" alt="Close" />
              </button>
              <h4 className="text-xl font-semibold text-white mb-4">
                {modalContent[activeModal].title}
              </h4>
              <p className="leading-relaxed text-sm text-neutral-400">
                {modalContent[activeModal].text}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Footer;
