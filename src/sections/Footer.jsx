import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="pb-8 text-sm text-neutral-400 c-space mt-20">
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
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
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
    </section>
  );
};

export default Footer;
