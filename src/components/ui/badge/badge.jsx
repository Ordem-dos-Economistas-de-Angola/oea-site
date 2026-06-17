import * as React from 'react';
import { cn } from '../../../lib/utils';

const badgeVariants = {
  default: 'border-transparent bg-zinc-900 text-zinc-50 hover:bg-zinc-900/80',
  secondary: 'border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80',
  destructive: 'border-transparent bg-red-500 text-zinc-50 hover:bg-red-500/80',
  outline: 'text-zinc-950',
};

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2',
        badgeVariants[variant] || badgeVariants.default,
        className,
      )}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
