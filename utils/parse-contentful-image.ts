import { Asset, AssetLink } from 'contentful';

import { Image } from '@/types/interfaces/image';

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink },
): Image | null {
  if (!asset) {
    return null;
  }

  if (!('fields' in asset)) {
    return null;
  }

  return {
    src: asset.fields.file?.url || '',
    alt: asset.fields.description || '',
  };
}
