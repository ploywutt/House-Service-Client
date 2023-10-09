import { useState } from "react";

function useDayPicker() {
  const [date, setDate] = useState<Date | null>();

  // สร้างวัตถุ Date จากวันที่ในรูปแบบเดิม
  let selectedDate: Date | undefined;

  if (date) {
    selectedDate = new Date(date);
  }

  // ตัวแปรที่ใช้เก็บชื่อเดือนและปีในรูปแบบไทย
  const thaiMonths = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];

  // ดึงข้อมูลวันที่, เดือน (เป็นเลข), และปี
  const day = selectedDate?.getDate();
  const month = selectedDate?.getMonth();
  const year = selectedDate?.getFullYear();

  // สร้างสตริงวันที่ในรูปแบบไทย
  let thaiDate = "";

  if (
    selectedDate &&
    day !== undefined &&
    month !== undefined &&
    year !== undefined
  ) {
    if (selectedDate > new Date()) {
      thaiDate = `${day} ${thaiMonths[month]} ${year + 543}`;
    } else {
      thaiDate = `รักของเรามันกลายเป็นอดีตไปแล้ว`;
    }
  } else {
    thaiDate = `รักของเรามันกลายเป็นอดีตไปแล้ว`;
  }

  return {
    thaiDate,
    date,
    setDate,
  };
}

export default useDayPicker;
