
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { MessageSquare, FileText, Eye, TrendingUp, PlusCircle, Edit3 } from "lucide-react";
import BlogEditor from "@/components/BlogEditor";

const Admin = () => {
  // Mock data for analytics
  const visitData = [
    { name: "شنبه", visits: 220 },
    { name: "یکشنبه", visits: 190 },
    { name: "دوشنبه", visits: 120 },
    { name: "سه‌شنبه", visits: 150 },
    { name: "چهارشنبه", visits: 180 },
    { name: "پنج‌شنبه", visits: 200 },
    { name: "جمعه", visits: 170 },
  ];

  const monthlyData = [
    { name: "فروردین", visits: 2400 },
    { name: "اردیبهشت", visits: 2800 },
    { name: "خرداد", visits: 3200 },
    { name: "تیر", visits: 3800 },
    { name: "مرداد", visits: 4200 },
    { name: "شهریور", visits: 4600 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
            پنل مدیریت
          </h1>
          <p className="text-2xl text-gray-300">
            مدیریت محتوا و مشاهده آمار سایت
          </p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-blue-900/80 to-blue-800/80 border-blue-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-lg font-medium">بازدید امروز</p>
                  <p className="text-4xl font-bold text-white">۲۲۰</p>
                  <p className="text-green-400 text-sm font-medium mt-1">+۱۵٪ از دیروز</p>
                </div>
                <Eye className="w-12 h-12 text-blue-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/80 to-purple-800/80 border-purple-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-lg font-medium">پیام‌های جدید</p>
                  <p className="text-4xl font-bold text-white">۱۲</p>
                  <p className="text-green-400 text-sm font-medium mt-1">+۳ جدید</p>
                </div>
                <MessageSquare className="w-12 h-12 text-purple-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/80 to-green-800/80 border-green-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-200 text-lg font-medium">مقالات منتشر شده</p>
                  <p className="text-4xl font-bold text-white">۲۵</p>
                  <p className="text-green-400 text-sm font-medium mt-1">+۲ این هفته</p>
                </div>
                <FileText className="w-12 h-12 text-green-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/80 to-orange-800/80 border-orange-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-200 text-lg font-medium">رشد بازدید</p>
                  <p className="text-4xl font-bold text-white">+۴۵٪</p>
                  <p className="text-green-400 text-sm font-medium mt-1">نسبت به ماه قبل</p>
                </div>
                <TrendingUp className="w-12 h-12 text-orange-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 p-2 rounded-2xl">
            <TabsTrigger value="analytics" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-blue-600 rounded-xl py-3 text-lg font-medium">
              آمار بازدید
            </TabsTrigger>
            <TabsTrigger value="blog" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-purple-600 rounded-xl py-3 text-lg font-medium">
              <Edit3 className="w-5 h-5 ml-2" />
              مدیریت وبلاگ
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-green-600 rounded-xl py-3 text-lg font-medium">
              پیام‌ها
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-orange-600 rounded-xl py-3 text-lg font-medium">
              نمونه‌کارها
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">بازدید هفتگی</CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    آمار بازدید در ۷ روز گذشته
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={visitData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '12px'
                        }}
                      />
                      <Bar dataKey="visits" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0.8}/>
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">بازدید ماهانه</CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    روند بازدید در ۶ ماه گذشته
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '12px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="visits" 
                        stroke="#06b6d4" 
                        strokeWidth={4}
                        dot={{ fill: '#06b6d4', strokeWidth: 2, r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <BlogEditor />
          </TabsContent>

          <TabsContent value="messages">
            <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">پیام‌های دریافتی</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  مدیریت پیام‌های ارسال شده از فرم تماس
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">
                  این بخش برای مدیریت پیام‌های دریافتی در حال توسعه است.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio">
            <Card className="bg-gray-900/80 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">مدیریت نمونه‌کارها</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  افزودن و ویرایش پروژه‌ها
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-lg">
                  این بخش برای مدیریت نمونه‌کارها در حال توسعه است.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
