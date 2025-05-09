
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { CaseCard, CaseItem } from "@/components/ui/case-card";

interface FeaturedCasesProps {
  caseItems: CaseItem[];
}

export const FeaturedCases = ({ caseItems }: FeaturedCasesProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Популярные кейсы</h2>
          <Button variant="link" className="text-purple-400">
            Смотреть все <Icon name="ChevronRight" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {caseItems.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
};
