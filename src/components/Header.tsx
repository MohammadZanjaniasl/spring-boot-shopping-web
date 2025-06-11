
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-reverse space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div className="text-right">
              <span className="text-gray-900 font-bold text-2xl block">علی رضایی</span>
              <span className="text-blue-600 text-sm font-medium">مهندس هوش مصنوعی</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg px-3 py-2 rounded-lg hover:bg-blue-50">
              خانه
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg px-3 py-2 rounded-lg hover:bg-blue-50">
              درباره من
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg px-3 py-2 rounded-lg hover:bg-blue-50">
              نمونه‌کارها
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg px-3 py-2 rounded-lg hover:bg-blue-50">
              وبلاگ
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg px-3 py-2 rounded-lg hover:bg-blue-50">
              تماس
            </Link>
            <Link to="/auth" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg px-3 py-2 rounded-lg hover:bg-blue-50">
              <User className="w-5 h-5 inline-block mr-2" />
              ورود
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="btn-primary text-lg px-8 py-3"
              asChild
            >
              <Link to="/contact">
                <Phone className="w-5 h-5 ml-2" />
                مشاوره رایگان
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-2xl mt-4 border border-gray-200 shadow-xl">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium rounded-xl hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                خانه
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium rounded-xl hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره من
              </Link>
              <Link 
                to="/portfolio" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium rounded-xl hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                نمونه‌کارها
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium rounded-xl hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                وبلاگ
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium rounded-xl hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس
              </Link>
              <Link 
                to="/auth" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium rounded-xl hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                ورود/ثبت نام
              </Link>
              <div className="px-4 py-3">
                <Button 
                  className="w-full btn-primary text-lg py-3"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="w-5 h-5 ml-2" />
                    مشاوره رایگان
                  </Link>
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
