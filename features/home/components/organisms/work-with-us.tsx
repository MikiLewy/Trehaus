import SectionTitle from '@/components/atoms/section-title/section-title';
import Typography from '@/components/atoms/typography/typography';
import { workWithUsSteps } from '@/constants/work-with-us-steps';
import Timeline from '@/features/home/components/molecules/timeline/timeline';
import TimelineStep from '@/features/home/components/molecules/timeline/timeline-step';

const WorkWithUs = () => {
  return (
    <section className="bg-[#F5F5F4] vertical-section-spacing">
      <div className="content-container relative">
        <SectionTitle>Jak wygląda współpraca z nami?</SectionTitle>
        <Typography variant="p1" className="mt-5 lg:w-2/3 text-black/85">
          Proces budowy wymarzonego domu z nami - krok po kroku. Oto nasza droga
          do spełnienia Państwa marzeń o nowym domu szkieletowym na własnej
          działce.
        </Typography>
        <Timeline>
          <Timeline.Title>01</Timeline.Title>
          <div className="flex flex-col gap-4 mt-4">
            {workWithUsSteps.map((step, index) => (
              <TimelineStep
                key={step.key}
                cardDescription={step.description}
                cardImg={step.img}
                cardTitle={step.title}
                direction={index % 2 === 0 ? 'left' : 'right'}
                isLastItem={workWithUsSteps.length - 1 === index}
                title={`0${index + 2}`}
              />
            ))}
          </div>
        </Timeline>
      </div>
    </section>
  );
};

export default WorkWithUs;
