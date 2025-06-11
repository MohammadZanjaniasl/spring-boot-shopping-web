
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "متخصص هوش مصنوعی و اتوماسیون",
      company: "فریلنسر",
      period: "۲۰۲۲ - اکنون",
      description: "طراحی و پیاده‌سازی سیستم‌های AI Agent برای خودکارسازی فرآیندهای کسب‌وکار"
    },
    {
      title: "سئو کار ارشد",
      company: "آژانس دیجیتال مارکتینگ",
      period: "۲۰۲۰ - ۲۰۲۲",
      description: "بهینه‌سازی بیش از ۵۰ وب‌سایت و افزایش ۳۰۰% ترافیک آلی"
    },
    {
      title: "توسعه‌دهنده فول‌استک",
      company: "شرکت نرم‌افزاری",
      period: "۲۰۱۸ - ۲۰۲۰",
      description: "توسعه اپلیکیشن‌های وب با React، Node.js و پایگاه‌های داده مختلف"
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "SEO", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Digital Marketing", level: 88 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            درباره من
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            بیش از ۵ سال تجربه در زمینه‌های مختلف تکنولوژی و دیجیتال مارکتینگ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">AR</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">علی رضایی</h2>
                <p className="text-cyan-400 mb-4">مهندس هوش مصنوعی</p>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>تهران، ایران</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>در دسترس برای پروژه‌های جدید</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  <Download className="w-4 h-4 ml-2" />
                  دانلود رزومه
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* About Text */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">داستان من</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  من علی رضایی هستم، مهندس هوش مصنوعی و متخصص اتوماسیون با بیش از ۵ سال تجربه در حوزه‌های مختلف تکنولوژی. 
                  سفر من از برنامه‌نویسی ساده شروع شد و به طور تدریجی به سمت هوش مصنوعی و اتوماسیون گسترش یافت.
                </p>
                <p>
                  در طول این سال‌ها، بیش از ۱۰۰ پروژه موفق در زمینه‌های مختلف انجام داده‌ام و به شرکت‌ها و کسب‌وکارها 
                  کمک کرده‌ام تا با استفاده از تکنولوژی‌های نوین، فرآیندهای خود را بهینه‌سازی کنند.
                </p>
                <p>
                  تخصص اصلی من در طراحی و پیاده‌سازی AI Agent هایی است که می‌توانند کارهای پیچیده را به صورت خودکار انجام دهند. 
                  همچنین در زمینه سئو و بهینه‌سازی وب‌سایت‌ها تجربه گسترده‌ای دارم.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience */}
        <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-cyan-400" />
              تجربه کاری
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-cyan-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-white">مهارت‌ها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
