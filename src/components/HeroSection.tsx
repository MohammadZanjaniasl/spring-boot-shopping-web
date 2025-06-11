
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Zap, TrendingUp, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 float-animation"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-full opacity-20 float-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge with animation */}
        <div className="mb-8">
          <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 pulse-glow">
            <Star className="w-4 h-4 ml-2" />
            متخصص تکنولوژی و نوآوری
            <Zap className="w-4 h-4 mr-2" />
          </span>
        </div>
        
        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent gradient-shift">
            مهندس هوش مصنوعی
          </span>
          <br />
          <span className="text-gray-800">و توسعه‌دهنده</span>
        </h1>
        
        {/* Subtitle with better spacing */}
        <div className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
          <p className="mb-4">
            <span className="font-semibold text-blue-600">متخصص اتوماسیون، AI Agent، سئو، برنامه‌نویسی</span>
            <br />
            و دیجیتال مارکتینگ
          </p>
          <p className="text-lg text-purple-600 font-medium">
            آماده تبدیل ایده‌های شما به واقعیت
          </p>
        </div>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="btn-primary text-xl px-12 py-4 rounded-2xl"
            asChild
          >
            <Link to="/portfolio">
              <TrendingUp className="w-6 h-6 ml-3" />
              مشاهده نمونه‌کارها
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="btn-secondary text-xl px-12 py-4 rounded-2xl border-2"
            asChild
          >
            <Link to="/contact">
              <Award className="w-6 h-6 ml-3" />
              مشاوره رایگان
            </Link>
          </Button>
        </div>
        
        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-blue-100">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">هوش مصنوعی</h3>
              <p className="text-gray-600 text-lg leading-relaxed">توسعه سیستم‌های هوشمند، چت‌بات و اتوماسیون پیشرفته</p>
            </div>
          </div>
          
          <div className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-green-100">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">SEO</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">سئو و بهینه‌سازی</h3>
              <p className="text-gray-600 text-lg leading-relaxed">افزایش رتبه در گوگل و جذب ترافیک هدفمند</p>
            </div>
          </div>
          
          <div className="group relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-purple-100">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">WEB</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">توسعه وب</h3>
              <p className="text-gray-600 text-lg leading-relaxed">طراحی و پیاده‌سازی وب‌سایت‌های مدرن و سریع</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center text-gray-500">
            <Star className="w-5 h-5 text-yellow-500 ml-2" />
            <span className="font-medium">بیش از ۱۰۰ پروژه موفق</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Award className="w-5 h-5 text-blue-500 ml-2" />
            <span className="font-medium">رضایت ۱۰۰٪ مشتریان</span>
          </div>
          <div className="flex items-center text-gray-500">
            <TrendingUp className="w-5 h-5 text-green-500 ml-2" />
            <span className="font-medium">افزایش ۳۰۰٪ فروش</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
