
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-gray-900 font-bold text-xl">علی رضایی</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              خانه
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              درباره من
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
              نمونه‌کارها
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              وبلاگ
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              تماس
            </Link>
            <Link to="/auth" className="text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-4 h-4 inline-block ml-1" />
              ورود/ثبت نام
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-purple-600 transition-colors">
              ادمین
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link to="/contact">تماس فوری</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 border border-gray-200">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                خانه
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره من
              </Link>
              <Link 
                to="/portfolio" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                نمونه‌کارها
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                وبلاگ
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس
              </Link>
              <Link 
                to="/auth" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ورود/ثبت نام
              </Link>
              <Link 
                to="/admin" 
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ادمین
              </Link>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
