import * as React from "react";
import { format } from "date-fns";
import calendaricon from "../assets/icon/calendar.svg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function DayPicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="calendar"
          variant={"outline"}
          className={cn(
            "w-full h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-between items-center inline-flex focus:border focus:border-blue-500 text-base font-normal relative",
            !date && "text-muted-foreground text-gray-700 text-base font-normal"
          )}
        >
          {date ? format(date, "PPP") : <span>กรุณาเลือกวันที่</span>}
          <img src={calendaricon} className="absolute right-4 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default DayPicker;
