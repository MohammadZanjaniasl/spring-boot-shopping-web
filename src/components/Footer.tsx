
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Star, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div className="text-right">
                <span className="text-white font-bold text-3xl block">علی رضایی</span>
                <span className="text-blue-400 text-lg font-medium">مهندس هوش مصنوعی</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mb-8 text-lg leading-relaxed">
              متخصص هوش مصنوعی، اتوماسیون، سئو و توسعه وب. آماده تبدیل ایده‌های شما به واقعیت دیجیتال با بهترین کیفیت و سرعت.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-blue-900/30 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 ml-2" />
                <span className="text-sm font-medium">۱۰۰+ پروژه موفق</span>
              </div>
              <div className="flex items-center bg-purple-900/30 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-purple-400 ml-2" />
                <span className="text-sm font-medium">رضایت ۱۰۰٪</span>
              </div>
            </div>
            
            <div className="flex space-x-reverse space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                <Github className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300">
                <Twitter className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xl">دسترسی سریع</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:mr-2 duration-300">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:mr-2 duration-300">
                  درباره من
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:mr-2 duration-300">
                  نمونه‌کارها
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:mr-2 duration-300">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-lg hover:mr-2 duration-300">
                  تماس
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-xl">تماس با من</h3>
            <div className="space-y-6">
              <div className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                <span className="text-lg">ali@example.com</span>
              </div>
              <div className="flex items-center text-gray-300 group hover:text-green-400 transition-colors">
                <Phone className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                <span className="text-lg">+98 912 345 6789</span>
              </div>
              <div className="flex items-center text-gray-300 group hover:text-purple-400 transition-colors">
                <MapPin className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                <span className="text-lg">تهران، ایران</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-lg">
              © 2024 علی رضایی. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-reverse space-x-8 mt-6 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-blue-400 text-lg transition-colors">
                حریم خصوصی
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-blue-400 text-lg transition-colors">
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
