import { useState } from "react";

function useDayPicker() {
  const [date, setDate] = useState<Date>();

  // สร้างวัตถุ Date จากวันที่ในรูปแบบเดิม
  const selectedDate = new Date(date);

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
  const day = selectedDate.getDate();
  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();

  // สร้างสตริงวันที่ในรูปแบบไทย
  const thaiDate = `${day} ${thaiMonths[month]} ${year + 543}`;

  return {
    thaiDate,
    date,
    setDate,
  };
}

export default useDayPicker;
