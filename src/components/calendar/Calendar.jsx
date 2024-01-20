import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  const handleChange = () => {};
  return (
   <div className="border bg-[#f2f2f5] border-[#C7C9D9] rounded-[10px]">
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar onChange={handleChange} />
    </LocalizationProvider>
   </div>
  );
};

export default Calendar;
