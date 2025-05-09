
import { Button } from "@/components/ui/button";

export const NewsletterSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Узнавайте о новых кейсах первыми</h2>
          <p className="text-gray-300 mb-6">Подпишитесь на нашу рассылку и получайте уведомления о новых кейсах и предметах.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Введите ваш email"
              className="flex-1 p-3 bg-gray-800 border-gray-700 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button className="rounded-l-none bg-purple-600 hover:bg-purple-700">
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
