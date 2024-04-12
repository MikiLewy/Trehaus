import { LucideIcon } from 'lucide-react';

export const isLucideIcon = (
  value: string | LucideIcon,
): value is LucideIcon => {
  return (value as string).length === undefined;
};
