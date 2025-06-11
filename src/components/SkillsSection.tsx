
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = [
    {
      title: "اتوماسیون و AI Agent",
      description: "طراحی و پیاده‌سازی سیستم‌های هوشمند برای خودکارسازی فرآیندها",
      technologies: ["Python", "TensorFlow", "OpenAI", "Automation"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "سئو حرفه‌ای",
      description: "بهینه‌سازی سایت‌ها برای موتورهای جستجو و افزایش ترافیک آلی",
      technologies: ["Technical SEO", "Content Strategy", "Analytics", "Link Building"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "برنامه‌نویسی و طراحی",
      description: "توسعه وب‌سایت‌های مدرن با تکنولوژی‌های روز دنیا",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "دیجیتال مارکتینگ",
      description: "مدیریت کمپین‌های دیجیتال و استراتژی محتوا",
      technologies: ["Social Media", "Content Marketing", "PPC", "Analytics"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            مهارت‌ها و تخصص‌ها
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            با بیش از ۵ سال تجربه در زمینه‌های مختلف تکنولوژی
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className={`w-full h-2 bg-gradient-to-r ${skill.gradient} rounded-full mb-4`}></div>
                <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-700/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
