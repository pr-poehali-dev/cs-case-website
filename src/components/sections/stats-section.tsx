
export const StatsSection = () => {
  return (
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
  );
};
