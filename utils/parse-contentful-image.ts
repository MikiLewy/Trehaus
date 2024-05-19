import { Asset, AssetLink } from 'contentful';

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink },
): { src: string; alt: string } | null {
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
