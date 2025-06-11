
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { MessageSquare, FileText, Eye, TrendingUp } from "lucide-react";

const Admin = () => {
  // Mock data for analytics
  const visitData = [
    { name: "دوشنبه", visits: 120 },
    { name: "سه‌شنبه", visits: 150 },
    { name: "چهارشنبه", visits: 180 },
    { name: "پنج‌شنبه", visits: 200 },
    { name: "جمعه", visits: 170 },
    { name: "شنبه", visits: 220 },
    { name: "یکشنبه", visits: 190 },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            پنل مدیریت
          </h1>
          <p className="text-xl text-gray-300">
            مدیریت محتوا و مشاهده آمار سایت
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">بازدید امروز</p>
                  <p className="text-2xl font-bold text-white">۱۲۰</p>
                </div>
                <Eye className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">پیام‌های جدید</p>
                  <p className="text-2xl font-bold text-white">۸</p>
                </div>
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">مقالات منتشر شده</p>
                  <p className="text-2xl font-bold text-white">۱۵</p>
                </div>
                <FileText className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">رشد بازدید</p>
                  <p className="text-2xl font-bold text-white">+۲۵٪</p>
                </div>
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
            <TabsTrigger value="analytics" className="text-gray-300 data-[state=active]:text-white">
              آمار بازدید
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-gray-300 data-[state=active]:text-white">
              پیام‌ها
            </TabsTrigger>
            <TabsTrigger value="blog" className="text-gray-300 data-[state=active]:text-white">
              مدیریت وبلاگ
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="text-gray-300 data-[state=active]:text-white">
              نمونه‌کارها
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">بازدید هفتگی</CardTitle>
                  <CardDescription className="text-gray-400">
                    آمار بازدید در ۷ روز گذشته
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={visitData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="visits" fill="url(#colorGradient)" />
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

              <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">بازدید ماهانه</CardTitle>
                  <CardDescription className="text-gray-400">
                    روند بازدید در ۶ ماه گذشته
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="visits" 
                        stroke="#06b6d4" 
                        strokeWidth={3}
                        dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">پیام‌های دریافتی</CardTitle>
                <CardDescription className="text-gray-400">
                  مدیریت پیام‌های ارسال شده از فرم تماس
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  این بخش برای مدیریت پیام‌های دریافتی در حال توسعه است.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog">
            <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">مدیریت وبلاگ</CardTitle>
                <CardDescription className="text-gray-400">
                  ایجاد، ویرایش و انتشار مقالات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  این بخش برای مدیریت مقالات وبلاگ در حال توسعه است.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio">
            <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">مدیریت نمونه‌کارها</CardTitle>
                <CardDescription className="text-gray-400">
                  افزودن و ویرایش پروژه‌ها
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
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
