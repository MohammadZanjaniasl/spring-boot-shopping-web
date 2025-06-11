
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Save, Eye, Send } from "lucide-react";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const saveDraft = async () => {
    if (!title.trim()) {
      toast({
        title: "خطا",
        description: "عنوان مقاله الزامی است",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const slug = generateSlug(title);
      const { error } = await supabase
        .from("blog_posts")
        .insert({
          title,
          excerpt,
          content,
          image_url: imageUrl,
          slug,
          status: "draft"
        });

      if (error) throw error;

      toast({
        title: "موفقیت",
        description: "پیش‌نویس ذخیره شد",
      });

      // Clear form
      setTitle("");
      setExcerpt("");
      setContent("");
      setImageUrl("");
    } catch (error) {
      console.error("Error saving draft:", error);
      toast({
        title: "خطا",
        description: "خطا در ذخیره پیش‌نویس",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const publishPost = async () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "خطا",
        description: "عنوان و متن مقاله الزامی است",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const slug = generateSlug(title);
      const { error } = await supabase
        .from("blog_posts")
        .insert({
          title,
          excerpt,
          content,
          image_url: imageUrl,
          slug,
          status: "published",
          published_at: new Date().toISOString()
        });

      if (error) throw error;

      toast({
        title: "موفقیت",
        description: "مقاله منتشر شد",
      });

      // Clear form
      setTitle("");
      setExcerpt("");
      setContent("");
      setImageUrl("");
    } catch (error) {
      console.error("Error publishing post:", error);
      toast({
        title: "خطا",
        description: "خطا در انتشار مقاله",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white text-2xl">ایجاد مقاله جدید</CardTitle>
        <CardDescription className="text-gray-400">
          مقاله جدید خود را بنویسید و منتشر کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-white font-medium">عنوان مقاله</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان جذاب برای مقاله خود وارد کنید..."
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 text-lg p-4"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt" className="text-white font-medium">خلاصه مقاله</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="خلاصه‌ای کوتاه از مقاله خود بنویسید..."
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl" className="text-white font-medium">تصویر شاخص</Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="لینک تصویر شاخص مقاله..."
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content" className="text-white font-medium">متن مقاله</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="متن کامل مقاله خود را بنویسید..."
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[300px] text-base leading-relaxed"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            onClick={saveDraft}
            disabled={isLoading}
            variant="outline"
            className="flex-1 bg-gray-700 border-gray-600 text-white hover:bg-gray-600 text-lg py-3"
          >
            <Save className="w-5 h-5 ml-2" />
            ذخیره پیش‌نویس
          </Button>
          <Button
            onClick={publishPost}
            disabled={isLoading}
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg py-3"
          >
            <Send className="w-5 h-5 ml-2" />
            انتشار مقاله
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogEditor;
