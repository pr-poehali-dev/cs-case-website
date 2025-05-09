
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">CS2 Кейсы</h3>
            <p className="text-sm">Лучший сайт для просмотра и изучения кейсов CS2. Мы не связаны с Valve Corporation.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">О нас</Link></li>
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Условия использования</Link></li>
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Подписаться</h3>
            <p className="text-sm mb-4">Получайте обновления о новых кейсах и предметах</p>
            <div className="flex">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-sm text-center">
          © 2025 CS2 Кейсы. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
