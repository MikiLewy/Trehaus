import { ReactNode } from 'react';

import TimelineCard from '@/features/home/components/molecules/timeline/timeline-card';

import TimelinePillar from './timeline-pillar';
import TimelineStep from './timeline-step';
import TimelineTitle from './timeline-title';

interface Props {
  children: ReactNode;
}

const Timeline = ({ children }: Props) => {
  return (
    <div className="h-full relative my-4 xl:my-10 flex flex-col items-start lg:items-center ">
      {children}
    </div>
  );
};

Timeline.Pillar = TimelinePillar;
Timeline.Title = TimelineTitle;
Timeline.Card = TimelineCard;
Timeline.Step = TimelineStep;

export default Timeline;
