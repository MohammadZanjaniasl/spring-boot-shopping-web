
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-white font-bold text-xl">علی رضایی</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              متخصص هوش مصنوعی، اتوماسیون، سئو و توسعه وب. آماده تبدیل ایده‌های شما به واقعیت دیجیتال.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  درباره من
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  نمونه‌کارها
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  تماس
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">تماس با من</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 ml-2" />
                <span className="text-sm">ali@example.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 ml-2" />
                <span className="text-sm">+98 912 345 6789</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 ml-2" />
                <span className="text-sm">تهران، ایران</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 علی رضایی. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                حریم خصوصی
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                شرایط استفاده
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
