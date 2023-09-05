import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "inline-flex h-11 w-96 rounded-lg border border-input bg-background text-sm ring-offset-background px-4 py-2.5 bg-white border-gray-300 justify-start items-center //file:border-0 file:bg-transparent file:text-sm file:font-medium //placeholder:text-muted-foreground placeholder:text-base placeholder:font-normal placeholder:leading-normal //focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 //disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
