
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactCTA = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-blue-600/10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
              آماده شروع پروژه‌ای جدید هستید؟
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              با من در تماس باشید تا ایده‌های شما را به بهترین شکل پیاده‌سازی کنیم
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25"
              >
                تماس فوری
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                مشاهده نمونه‌کارها
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>آنلاین</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>پاسخ سریع</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>مشاوره رایگان</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactCTA;
