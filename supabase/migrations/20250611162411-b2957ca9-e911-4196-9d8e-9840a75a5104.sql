
-- جدول پروفایل های کاربران
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- جدول نمونه‌کارها
CREATE TABLE public.portfolio_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  project_url TEXT,
  technologies JSONB,
  category TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- جدول مقالات وبلاگ
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  image_url TEXT,
  slug TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- جدول پیام‌های تماس
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  contact_method TEXT DEFAULT 'email',
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- جدول آمار بازدیدها
CREATE TABLE public.site_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  visitor_ip TEXT,
  user_agent TEXT,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- تنظیم RLS برای جداول
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_analytics ENABLE ROW LEVEL SECURITY;

-- سیاست‌های RLS برای پروفایل‌ها
CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.profiles FOR SELECT 
  USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = user_id);

-- سیاست‌های RLS برای نمونه‌کارها
CREATE POLICY "Portfolio items are viewable by everyone" 
  ON public.portfolio_items FOR SELECT 
  USING (true);

CREATE POLICY "Only admins can manage portfolio items" 
  ON public.portfolio_items FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- سیاست‌های RLS برای مقالات
CREATE POLICY "Published blog posts are viewable by everyone" 
  ON public.blog_posts FOR SELECT 
  USING (status = 'published' OR EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Only admins can manage blog posts" 
  ON public.blog_posts FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- سیاست‌های RLS برای پیام‌های تماس
CREATE POLICY "Anyone can insert contact messages" 
  ON public.contact_messages FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Only admins can view contact messages" 
  ON public.contact_messages FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- سیاست‌های RLS برای آمار
CREATE POLICY "Anyone can insert analytics" 
  ON public.site_analytics FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Only admins can view analytics" 
  ON public.site_analytics FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
