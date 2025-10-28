import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-background hover:shadow-gold border-2 border-primary transition-all duration-300 font-semibold hover:scale-105',
        secondary: 'bg-[#1B2C4B] text-white border-2 border-[#1B2C4B] hover:border-primary transition-all duration-300 font-semibold hover:scale-105',
        ghost: 'border-2 border-primary text-foreground bg-transparent hover:bg-primary/10 transition-all duration-300',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-destructive',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-lg',
        md: 'h-11 px-6 text-base rounded-xl',
        lg: 'h-14 px-8 text-lg rounded-xl',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface LuxuryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

LuxuryButton.displayName = 'LuxuryButton';

export { LuxuryButton, buttonVariants };
