import React from "react";
import { useData } from "../../context/DataProvider";

const VariantSelect = ({}) => {
  const { state } = useData();

  const variantsArr =
    state?.dateSelected.length > 0
      ? state?.dateSelected[0]?.slots?.map((obj) => {
          const startTime = new Date(obj?.start_time);
          const endTime = new Date(obj?.end_time);
          const timeDifference = endTime - startTime;
          const timeDifferenceInMinutes = timeDifference / (1000 * 60);
          return timeDifferenceInMinutes + " min";
        })
      : ["0 min"];

  const variantsData =
    variantsArr.length > 0 ? Array.from(new Set(variantsArr)) : variantsArr;

  return (
    <select className="w-full accent-primary h-[48px] border border-[#C7C9D9] rounded-[10px] px-[12px] py-[8px]">
      {variantsData?.map((str) => (
        <option key={str} value={str}>
          {str}
        </option>
      ))}
    </select>
  );
};

export default VariantSelect;
