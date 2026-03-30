const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800">
      <p className="text-slate-500 text-sm font-mono">
        Designed & Built by Rakesh Chaudhary
      </p>
      <p className="text-slate-400 text-xs mt-2 italic">
        © {currentYear} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;