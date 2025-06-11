
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface PortfolioItem {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  project_url: string | null;
  technologies: string[];
  category: string | null;
  is_featured: boolean | null;
}

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    const { data, error } = await supabase
      .from("portfolio_items")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching portfolio items:", error);
    } else {
      // Transform the data to match our interface
      const transformedData = data?.map(item => ({
        ...item,
        technologies: Array.isArray(item.technologies) 
          ? item.technologies.filter((tech): tech is string => typeof tech === 'string')
          : []
      })) || [];
      setPortfolioItems(transformedData);
    }
  };

  const categories = ["all", "AI", "SEO", "Web Development", "Digital Marketing"];

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            نمونه‌کارها
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از پروژه‌های انجام شده در زمینه‌های مختلف تکنولوژی
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }
            >
              {category === "all" ? "همه" : category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {item.image_url && (
                <div className="aspect-video bg-gray-100 overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image_url} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  {item.is_featured && (
                    <Badge className="bg-blue-600 text-white">
                      ویژه
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies?.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-gray-300 text-gray-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {item.project_url && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      asChild
                    >
                      <a href={item.project_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 ml-1" />
                        مشاهده
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              هنوز پروژه‌ای در این دسته‌بندی وجود ندارد.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
