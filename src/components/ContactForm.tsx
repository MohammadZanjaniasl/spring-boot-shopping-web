
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contact_method: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "پیام با موفقیت ارسال شد",
        description: "در اسرع وقت با شما تماس خواهیم گرفت.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        contact_method: "email"
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "خطا در ارسال پیام",
        description: "لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-cyan-400" />
          تماس با من
        </CardTitle>
        <CardDescription className="text-gray-300">
          برای شروع همکاری یا مشاوره، پیام خود را برای من ارسال کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">نام و نام خانوادگی</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="نام شما"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">آدرس ایمیل</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_method" className="text-gray-300">روش ارتباطی مورد نظر</Label>
            <Select 
              value={formData.contact_method} 
              onValueChange={(value) => setFormData({ ...formData, contact_method: value })}
            >
              <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    ایمیل
                  </div>
                </SelectItem>
                <SelectItem value="telegram">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    تلگرام
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">پیام شما</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 min-h-32"
              placeholder="توضیح پروژه یا سوال خود را بنویسید..."
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 text-lg font-semibold"
          >
            {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
