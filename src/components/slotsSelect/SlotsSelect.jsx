import React from "react";
import Box from "../box/Box";
import { useData } from "../../context/DataProvider";
import circleCheck from "../../assets/circleCheck.svg";

const SlotsSelect = ({ date }) => {
  const { state, dispatch } = useData();
  const timeString = (time) =>
    time?.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  const slotsArr = date[0]?.slots?.map(
    ({ start_time, end_time }) =>
      `${timeString(new Date(start_time))} - ${timeString(new Date(end_time))}`
  );

  const clickHandler = (slot) => {
    dispatch({ type: "SLOT_SELECTED", payload: slot });
  };
  return (
    <ul className="flex flex-col gap-[15px] h-[300px] overflow-y-auto">
      {slotsArr?.length > 0 ? (
        slotsArr?.map((slot, index) => (
          <li
            key={slot + index}
            className="cursor-pointer pr-[10px]"
            onClick={() => clickHandler(slot)}
          >
            {state?.slotSelected === slot ? (
              <Box style="bg-primary text-white items-center justify-between">
                <p className="font-semibold">{slot}</p>
                <img src={circleCheck} alt="checked icon" />
              </Box>
            ) : (
              <Box style="justify-center items-center">
                <p className=" text-primary font-semibold">{slot}</p>
              </Box>
            )}
          </li>
        ))
      ) : (
        <li className="text-center py-10 text-sm">No slots available!</li>
      )}
    </ul>
  );
};

export default SlotsSelect;
