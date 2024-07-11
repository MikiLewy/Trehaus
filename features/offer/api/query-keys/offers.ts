export const offersKeys = {
  all: ['offers'] as const,
  lists: () => [...offersKeys.all, 'list'] as const,
  list: () => [...offersKeys.lists()] as const,
  details: () => [...offersKeys.all, 'detail'] as const,
  detail: (slug: string) => [...offersKeys.details(), { slug }] as const,
};
