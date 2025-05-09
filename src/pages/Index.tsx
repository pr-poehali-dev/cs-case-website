
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const caseData = [
  {
    id: 1,
    name: "Кейс «Жало»",
    price: 2.34,
    image: "https://images.unsplash.com/photo-1561347981-969c80cf4463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rarity: "legendary"
  },
  {
    id: 2,
    name: "Кейс «Хромированный»",
    price: 1.89,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1829&q=80",
    rarity: "epic"
  },
  {
    id: 3,
    name: "Кейс «Кинжал»",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1563198804-b144dfc1661c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rarity: "legendary"
  },
  {
    id: 4,
    name: "Кейс «Авангард»",
    price: 1.15,
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    rarity: "rare"
  },
  {
    id: 5,
    name: "Кейс «Кобальт»",
    price: 2.10,
    image: "https://images.unsplash.com/photo-1567638503064-60a26b563d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
    rarity: "epic"
  },
  {
    id: 6,
    name: "Кейс «Разлом»",
    price: 2.75,
    image: "https://images.unsplash.com/photo-1590422749897-47726da9e065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    rarity: "legendary"
  }
];

const CaseCard = ({ caseItem }: { caseItem: typeof caseData[0] }) => {
  const rarityColors = {
    legendary: "bg-gradient-to-r from-yellow-400 to-amber-600",
    epic: "bg-gradient-to-r from-purple-500 to-purple-800",
    rare: "bg-gradient-to-r from-blue-400 to-blue-600"
  };

  const rarityColor = rarityColors[caseItem.rarity as keyof typeof rarityColors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)" 
      }}
      className="flex flex-col"
    >
      <Card className="overflow-hidden bg-gray-900 border-0 relative">
        <div className={`h-1 w-full ${rarityColor}`} />
        <div className="p-4 flex flex-col">
          <div className="aspect-square overflow-hidden rounded-md mb-4">
            <img 
              src={caseItem.image} 
              alt={caseItem.name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="text-lg font-medium text-white">{caseItem.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-400">${caseItem.price.toFixed(2)}</span>
            <Button variant="outline" size="sm" className="text-white border-gray-700 hover:bg-gray-800">
              Открыть
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Navbar = () => {
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

const Footer = () => {
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-950 py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </div>
        </section>

        {/* Featured Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Популярные кейсы</h2>
              <Button variant="link" className="text-purple-400">
                Смотреть все <Icon name="ChevronRight" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {caseData.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Статистика сайта</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">25+</div>
                <div className="text-gray-400">Доступных кейсов</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">500+</div>
                <div className="text-gray-400">Уникальных предметов</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">10K+</div>
                <div className="text-gray-400">Ежедневных пользователей</div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
