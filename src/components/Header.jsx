import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            MyApp
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="/" className="hover:text-blue-500 transition duration-300">Home</a>
            <a href="/about" className="hover:text-blue-500 transition duration-300">About</a>
            <a href="/contact" className="hover:text-blue-500 transition duration-300">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
