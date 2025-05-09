
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface CaseItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rarity: "legendary" | "epic" | "rare";
}

const rarityColors = {
  legendary: "bg-gradient-to-r from-yellow-400 to-amber-600",
  epic: "bg-gradient-to-r from-purple-500 to-purple-800",
  rare: "bg-gradient-to-r from-blue-400 to-blue-600"
};

export const CaseCard = ({ caseItem }: { caseItem: CaseItem }) => {
  const rarityColor = rarityColors[caseItem.rarity];

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
