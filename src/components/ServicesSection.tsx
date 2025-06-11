
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "توسعه AI Agent",
      description: "ساخت ربات‌های هوشمند برای خودکارسازی کسب‌وکار شما",
      features: ["پردازش زبان طبیعی", "یادگیری ماشین", "اتوماسیون فرآیندها"],
      price: "از ۵۰۰ هزار تومان",
      popular: true
    },
    {
      title: "بهینه‌سازی سئو",
      description: "افزایش رتبه سایت در گوگل و جذب ترافیک آلی",
      features: ["تحلیل کلمات کلیدی", "بهینه‌سازی تکنیکال", "لینک سازی"],
      price: "از ۳۰۰ هزار تومان",
      popular: false
    },
    {
      title: "طراحی وب‌سایت",
      description: "طراحی و توسعه وب‌سایت‌های مدرن و ریسپانسیو",
      features: ["طراحی UX/UI", "برنامه‌نویسی فول‌استک", "بهینه‌سازی سرعت"],
      price: "از ۸۰۰ هزار تومان",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent mb-4">
            خدمات من
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            راه‌حل‌های تکنولوژیکی برای رشد کسب‌وکار شما
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative bg-gray-900/60 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-500/50' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    محبوب‌ترین
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg mb-4">
                  {service.description}
                </CardDescription>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {service.price}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  } text-white font-semibold py-3`}
                >
                  شروع پروژه
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
