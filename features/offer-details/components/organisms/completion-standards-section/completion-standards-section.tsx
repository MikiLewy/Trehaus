import { tableData } from '@/features/offer-details/data/table';
import { isLucideIcon } from '@/features/offer-details/utils/is-lucide-icon';

import Accordion from '../../molecules/accordion/accordion';

const CompletionStandardsSection = () => {
  return (
    <section>
      <h3 className="text-2xl font-medium lg:text-3xl">
        Standardy wykończenia
      </h3>
      <Accordion />
      <div className="hidden grid-cols-4 mt-8 lg:grid">
        {tableData.map(data => (
          <div key={data.id} className="grid-rows-1 h-full flex-1">
            <div className="flex flex-col items-center h-16">
              <h4 className="text-base xl:text-xl font-medium">{data.title}</h4>
              <p className="text-sm lg:text-base">{data.description}</p>
            </div>
            <div className="gap-2 mt-2">
              {data.rows.map((row, index) => (
                <div
                  key={row.id}
                  className={`flex items-center justify-center py-4 pl-2 gap-2 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
                  {isLucideIcon(row.value) ? (
                    <row.value size={24} />
                  ) : (
                    <p className="text-base">{row.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompletionStandardsSection;
