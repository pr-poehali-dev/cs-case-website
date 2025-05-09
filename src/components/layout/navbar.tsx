
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="w-full bg-gray-900 py-4 px-4 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white mr-8">CS2 <span className="text-purple-500">Кейсы</span></h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">Главная</Link>
            <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Все кейсы</Link>
            <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Редкие предметы</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            <Icon name="Search" className="mr-2" />
            Поиск
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="LogIn" className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};
