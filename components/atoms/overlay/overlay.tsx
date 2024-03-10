import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

const Overlay = ({ className }: Props) => {
  const mergedClassName = twMerge('absolute inset-0 bg-black/75', className);

  return <div className={mergedClassName} />;
};

export default Overlay;
