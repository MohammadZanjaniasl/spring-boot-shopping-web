
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/50 bg-cyan-400/10">
            متخصص تکنولوژی و نوآوری
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          مهندس هوش مصنوعی
          <br />
          و توسعه‌دهنده
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          متخصص اتوماسیون، AI Agent، سئو، برنامه‌نویسی و دیجیتال مارکتینگ
          <br />
          آماده تبدیل ایده‌های شما به واقعیت
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            مشاهده نمونه‌کارها
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg font-semibold rounded-xl"
          >
            تماس با من
          </Button>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="mt-16 flex justify-center gap-8 opacity-60">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center animate-bounce">
            <span className="text-white font-bold">AI</span>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
            <span className="text-white font-bold">SEO</span>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.4s'}}>
            <span className="text-white font-bold">DEV</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
