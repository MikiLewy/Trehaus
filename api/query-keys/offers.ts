export const offersKeys = {
  all: ['offers'] as const,
  lists: () => [...offersKeys.all, 'list'] as const,
  list: () => [...offersKeys.lists()] as const,
};
