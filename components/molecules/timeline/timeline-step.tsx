import Timeline from './timeline';

interface Props {
  title: string;
  cardTitle: string;
  cardDescription: string;
  cardImg: string;
  direction: 'left' | 'right';
  isLastItem: boolean;
}

const TimelineStep = ({ title, cardTitle, cardDescription, cardImg, direction, isLastItem }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[1fr_auto_1fr] w-full gap-x-4 lg:gap-x-10 lg:items-center h-full mx-auto mb-2">
        <div className="hidden lg:flex justify-center mr-10">
          {direction === 'left' ? <Timeline.Card title={cardTitle} description={cardDescription} img={cardImg} /> : <div />}
        </div>
        <div className="flex justify-center h-full lg:inline">{!isLastItem ? <Timeline.Pillar /> : <div />}</div>
        <div className="flex justify-center lg:hidden">
          <Timeline.Card title={cardTitle} description={cardDescription} img={cardImg} />
        </div>
        <div className="hidden lg:flex justify-center">
          {direction === 'right' ? <Timeline.Card title={cardTitle} description={cardDescription} img={cardImg} /> : <div />}
        </div>
      </div>
      <div className="flex lg:justify-center">{!isLastItem ? <Timeline.Title>{title}</Timeline.Title> : null}</div>
    </div>
  );
};

export default TimelineStep;
