import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300 dark:bg-slate-800">
      <SliderPrimitive.Range className="absolute h-full bg-blue-500 dark:bg-slate-50" />
    </SliderPrimitive.Track>
    {props.defaultValue?.map((Hello, index) => {
      return (
        <SliderPrimitive.Thumb
          key={index}
          className="block h-[15px] w-[15px] rounded-full border-4 border-solid border-blue-700 bg-white ring-offset-white transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50"
        />
      );
    })}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
