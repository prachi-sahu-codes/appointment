import React from "react";
import { Link } from "react-router-dom";
import chevronRight from "../../assets/chevronRight.svg";
import { Box, Calendar, Container } from "../../components";
import { slotsData, variantsData } from "../../data/data";

const Home = () => {
  return (
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
          <select className="w-full accent-primary h-[48px] border border-[#C7C9D9] rounded-[10px] px-[12px] py-[8px]">
            {variantsData.map((str) => (
              <option key={str} value={str}>
                {str}
              </option>
            ))}
          </select>
          <hr className="text-[#C7C9D9] my-[20px]" />
          <p className="text-dark2 text-[12px] pb-[6px] font-semibold">
            Thursday, dec 2<span> - AVAILABLE SLOTS</span>
          </p>
          <ul className="flex flex-col gap-[15px]">
            {slotsData.map((slot) => (
              <li>
                <Box>
                  <p className="text-center text-primary font-semibold">
                    {slot}
                  </p>
                </Box>
              </li>
            ))}
          </ul>
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
        <button className="w-[128px] flex items-center gap-[8px] bg-white text-black py-[8px] px-[30px] text-[14px] rounded-[10px]">
          Next
          <img src={chevronRight} className="text-primary" />
        </button>
      </div>
    </Container>
  );
};

export default Home;
