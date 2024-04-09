'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Props {
  attachments: { src: string }[];
  index: number;
  onClose: () => void;
}

const AttachmentsGallery = ({ attachments, onClose, index }: Props) => {
  return (
    <Lightbox
      index={index}
      open={index >= 0}
      close={onClose}
      slides={attachments}
      carousel={{
        finite: false,
      }}
    />
  );
};

export default AttachmentsGallery;
