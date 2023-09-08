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
          "w-full h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center inline-flex placeholder:text-gray-700 text-base font-normal leading-normal focus:outline-none focus:border-blue-600 focus:border-1 valid:text-gray-950 disabled:bg-gray-100 disabled:text-gray-400 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
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
