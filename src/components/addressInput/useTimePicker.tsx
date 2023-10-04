import { useState } from "react";

function useTimePicker() {
  const [clickHour, setClickHour] = useState<string>("00");
  const [clickMinute, setClickMinute] = useState<string>("00");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [date, setDate] = useState<Date>();

  const handleHour = (e: string) => {
    setClickHour(e);
  };

  const handleMinute = (e: string) => {
    setClickMinute(e);
  };

  const hour: string[] = [];
  for (let i = 0; i <= 17; i++) {
    if (i <= 9) {
      i = "0" + String(i);
    }
    if (i >= 8) {
      hour.push(String(i));
    }
  }

  const minute: string[] = [];
  for (let i = 0; i < 60; i++) {
    if (i <= 9) {
      i = "0" + String(i);
    }
    if (i % 10 === 0) {
      minute.push(String(i));
    }
  }

  return {
    hour,
    minute,
    handleHour,
    handleMinute,
    clickHour,
    clickMinute,
    selectedTime,
    setSelectedTime,
    date,
    setDate,
  };
}

export default useTimePicker;
