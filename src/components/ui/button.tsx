import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-semibold leading-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "w-40 h-11 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-base text-medium font-medium leading-normal hover:bg-primary-hover active:primary-active",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "w-40 h-11 px-6 py-2.5 bg-none text-secondary border border-secondary hover:text-secondary-hover hover:border hover:border-secondary-hover active:text-secondary-active active:border active:border-secondary-active",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "w-40 h-11 px-6 py-2.5 text-primary underline-offset-4 hover:underline hover:text-secondary-hover active:text-secondary-active",
        "outline-primary":
          "border border-[#336DF2] text-[#336DF2] hover:bg-[#336DF2] hover:text-white",
        myPrimary:
          "text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-800  disabled:bg-gray-300 disabled:text-gray-100 no-underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
