import clockicon from "../assets/icon/clock.svg";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

function TimePicker() {
  const [clickHour, setClickHour] = useState<string>("00");
  const [clickMinute, setClickMinute] = useState<string>("00");
  const [time, setTime] = useState<string>("");
  //   const [open, setOpen] = useState<boolean>(true);

  const handleHour = (e: string) => {
    setClickHour(e);
  };

  const handleMinute = (e: string) => {
    setClickMinute(e);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTime(`${clickHour}:${clickMinute}`);
  };

  const hour: string[] = [];
  for (let i = 0; i < 24; i++) {
    if (i <= 9) {
      i = "0" + String(i);
    }
    hour.push(String(i));
  }

  const minute: string[] = [];
  for (let i = 0; i < 60; i++) {
    if (i <= 9) {
      i = "0" + String(i);
    }
    minute.push(String(i));
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant={"outline"}
          id="time"
          className={cn(
            "w-full h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-between items-center inline-flex focus:border focus:border-blue-500 text-base font-normal relative",
            !time && "text-muted-foreground text-gray-700 text-base font-normal"
          )}
        >
          {time ? `${time}` : <span>กรุณาเลือกเวลา</span>}
          <img src={clockicon} className="absolute right-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-[164px] h-[298px] bg-white rounded-lg shadow p-0 realtive">
        <div className="flex">
          <ScrollArea className=" w-20 h-[246px] rounded-tl-md p-1">
            {hour.map((item, index) => {
              return (
                <Button
                  variant="picker"
                  key={index}
                  className="bg-transparent text-base font-normal cursor-pointer w-10/12 h-[37px] px-3"
                  onClick={() => {
                    handleHour(item);
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </ScrollArea>
          <Separator orientation="vertical" />
          <ScrollArea className="w-20 h-[246px] rounded-tr-md p-1">
            {minute.map((item, index) => {
              return (
                <Button
                  variant="picker"
                  key={index}
                  className="bg-transparent text-base font-normal cursor-pointer w-10/12 h-[37px] px-3"
                  onClick={() => {
                    handleMinute(item);
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </ScrollArea>
        </div>
        <div className="w-[164px] h-[52px] flex justify-between items-center border-t bottom-0 absolute">
          <div className="pl-4 text-gray-800">
            {clickHour}:{clickMinute}
          </div>
          <Button
            type="button"
            variant="link"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            ยืนยัน
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default TimePicker;
