export const realizationsKeys = {
  all: ['realizations'] as const,
  lists: () => [...realizationsKeys.all, 'list'] as const,
  list: () => [...realizationsKeys.lists()] as const,
  details: () => [...realizationsKeys.all, 'list'] as const,
  detail: (slug: string) => [...realizationsKeys.details(), { slug }] as const,
};
