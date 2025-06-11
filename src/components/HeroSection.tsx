
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            متخصص تکنولوژی و نوآوری
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          مهندس هوش مصنوعی
          <br />
          <span className="text-blue-600">و توسعه‌دهنده</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          متخصص اتوماسیون، AI Agent، سئو، برنامه‌نویسی و دیجیتال مارکتینگ
          <br />
          آماده تبدیل ایده‌های شما به واقعیت
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link to="/portfolio">مشاهده نمونه‌کارها</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg"
            asChild
          >
            <Link to="/contact">تماس با من</Link>
          </Button>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">هوش مصنوعی</h3>
            <p className="text-gray-600">توسعه سیستم‌های هوشمند و اتوماسیون</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">SEO</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">سئو و بهینه‌سازی</h3>
            <p className="text-gray-600">افزایش رتبه و ترافیک وب‌سایت</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">DEV</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">توسعه وب</h3>
            <p className="text-gray-600">طراحی و پیاده‌سازی وب‌سایت</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
