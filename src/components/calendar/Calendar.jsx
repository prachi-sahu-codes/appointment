import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useData } from "../../context/DataProvider";

const Calendar = () => {
  const { state, dispatch } = useData();

  const handleChange = (e) => {
    const originalDate = new Date(e.$d);
    const formattedDate = originalDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  
    dispatch({ type: "DATE_SELECTED", payload: formattedDate });
  };
  return (
    <div className="border bg-[#f2f2f5] border-[#C7C9D9] rounded-[10px]">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={handleChange}
          defaultValue={dayjs("2024-01-20")}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
