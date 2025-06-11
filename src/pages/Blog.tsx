
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
  slug: string;
  published_at: string;
  created_at: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching blog posts:", error);
    } else {
      setBlogPosts(data || []);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fa-IR");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            وبلاگ
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            آخرین مقالات و آموزش‌ها در زمینه هوش مصنوعی، سئو، برنامه‌نویسی و دیجیتال مارکتینگ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
              {post.image_url && (
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  <img 
                    src={post.image_url} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{formatDate(post.published_at || post.created_at)}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>۵ دقیقه مطالعه</span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <User className="w-4 h-4" />
                    <span>علی رضایی</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                    asChild
                  >
                    <Link to={`/blog/${post.slug}`}>
                      ادامه مطلب
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              هنوز مقاله‌ای منتشر نشده است.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
