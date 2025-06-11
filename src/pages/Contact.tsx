
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            تماس با من
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            آماده شروع پروژه‌ای جدید هستید؟ بیایید در مورد ایده‌های شما صحبت کنیم
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">اطلاعات تماس</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 ml-3 text-cyan-400" />
                    <div>
                      <p className="font-medium">ایمیل</p>
                      <p className="text-sm">ali@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 ml-3 text-cyan-400" />
                    <div>
                      <p className="font-medium">تلفن</p>
                      <p className="text-sm">+98 912 345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 ml-3 text-cyan-400" />
                    <div>
                      <p className="font-medium">موقعیت</p>
                      <p className="text-sm">تهران، ایران</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 ml-3 text-cyan-400" />
                    <div>
                      <p className="font-medium">ساعات کاری</p>
                      <p className="text-sm">شنبه تا چهارشنبه، ۹ تا ۱۸</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">پاسخ سریع</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex justify-between">
                    <span>ایمیل:</span>
                    <span className="text-cyan-400">کمتر از ۲ ساعت</span>
                  </div>
                  <div className="flex justify-between">
                    <span>تلگرام:</span>
                    <span className="text-cyan-400">کمتر از ۳۰ دقیقه</span>
                  </div>
                  <div className="flex justify-between">
                    <span>تماس تلفنی:</span>
                    <span className="text-cyan-400">فوری</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
