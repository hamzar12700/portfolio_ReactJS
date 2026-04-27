import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-dark/50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} Developer Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
