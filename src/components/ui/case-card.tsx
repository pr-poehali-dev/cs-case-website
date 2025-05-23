import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CaseItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rarity: "legendary" | "epic" | "rare";
}

const rarityColors = {
  legendary: "bg-gradient-to-r from-orange-500 to-amber-600",
  epic: "bg-gradient-to-r from-orange-400 to-amber-500",
  rare: "bg-gradient-to-r from-gray-300 to-gray-500",
};

export const CaseCard = ({ caseItem }: { caseItem: CaseItem }) => {
  const rarityColor = rarityColors[caseItem.rarity];

  return (
    <div className="flex flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
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
            <Button
              variant="outline"
              size="sm"
              className="text-white bg-gray-800 border-gray-700 hover:bg-orange-600 hover:text-black"
            >
              Открыть
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
