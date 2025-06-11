
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-white font-bold text-xl">علی رضایی</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              خانه
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              درباره من
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">
              نمونه‌کارها
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
              وبلاگ
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              تماس
            </Link>
            <Link to="/admin" className="text-gray-300 hover:text-purple-400 transition-colors">
              <User className="w-4 h-4 inline-block ml-1" />
              ادمین
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              asChild
            >
              <Link to="/contact">تماس فوری</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                خانه
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره من
              </Link>
              <Link 
                to="/portfolio" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                نمونه‌کارها
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                وبلاگ
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس
              </Link>
              <Link 
                to="/admin" 
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ادمین
              </Link>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>تماس فوری</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
