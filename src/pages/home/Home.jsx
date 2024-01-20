import React from "react";
import { Link } from "react-router-dom";
import chevronRight from "../../assets/chevronRight.svg";
import {
  Calendar,
  Container,
  Loader,
  SlotsSelect,
  VariantSelect,
} from "../../components";
import { useData } from "../../context/DataProvider";
import { toast } from "react-toastify";

const Home = () => {
  const { state } = useData();

  const inputDate = new Date(state.dateSelected[0]?.date ?? "2024-01-20");
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(inputDate);

  const submitHandler = () => {
    if (state?.slotSelected.length > 0) {
      toast.success("Slot booked successfully!");
    } else {
      toast.error("Please select a slot!");
    }
  };

  return (
    <>
      {state.loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="flex h-[494px]">
            <div className="bg-[#EBEBF0] w-full rounded-tl-[12px] p-[40px]">
              <h2 className="text-[24px] font-semibold text-dark1 pb-[4px]">
                Test Service
              </h2>
              <p className="text-[14px] font-semibold text-dark2 pb-[20px]">
                Timezone: <span className="font-medium">Asia/Calcutta</span>
              </p>
              <Calendar />
            </div>
            <div className="w-full rounded-tr-[12px] bg-white p-[40px]">
              <p className="text-dark2 text-[12px] pb-[6px] font-semibold">
                SELECT FROM VARIANTS
              </p>
              <VariantSelect date={state?.dateSelected} />
              <hr className="text-[#C7C9D9] my-[20px]" />
              <p className="text-dark2 text-[12px] pb-[6px] font-semibold">
                {formattedDate} <span> - AVAILABLE SLOTS</span>
              </p>
              <SlotsSelect date={state?.dateSelected} />
            </div>
          </div>
          <div className="flex justify-between px-[30px] py-[15px] h-[78px] bg-primary text-white rounded-b-[12px]">
            <p className="flex items-center gap-[5px] text-[12px]">
              Powered by{" "}
              <Link
                to="https://apps.shopify.com/appointo-appointments-and-bookings"
                className="underline underline-offset-2"
                target="_blank"
              >
                APPOINTO
              </Link>
            </p>
            <button
              className="w-[128px] flex items-center gap-[8px] bg-white text-black py-[8px] px-[30px] text-[14px] rounded-[10px]"
              onClick={() => submitHandler()}
            >
              Next
              <img src={chevronRight} className="text-primary" />
            </button>
          </div>
        </Container>
      )}
    </>
  );
};

export default Home;
