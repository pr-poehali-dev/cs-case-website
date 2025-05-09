
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-950 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Откройте мир <span className="text-purple-500">кейсов CS2</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Исследуйте все доступные кейсы Counter-Strike 2 и их содержимое в одном месте
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 text-lg">
              Все кейсы
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20 px-6 py-2 text-lg">
              Новинки
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
