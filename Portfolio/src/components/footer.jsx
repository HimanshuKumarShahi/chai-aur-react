import React from 'react';

function Footer() {
  return (
    <footer className="bg-yellow-500 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-6">
          <a href="https://github.com/HimanshuKumarShahi" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            LinkedIn
          </a>
          <a href="mailto:#" className="hover:text-yellow-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
