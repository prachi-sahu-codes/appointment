import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";
import { Container } from "../../components";
import { useNavigate } from "react-router";
import { useData } from "../../context/DataProvider";

const BookedAppointment = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  return (
    <Container>
      <div className="bg-white p-10 rounded-[10px]">
        <button
          className="bg-primary text-white p-[8px] text-[14px] rounded-full shadow"
          onClick={() => {
            navigate(-1);
            dispatch({type:"CLEAR"})
          }}
        >
          <IoMdArrowRoundBack />
        </button>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="text-primary text-[180px]">
            <GiPartyPopper />
          </div>
          <p className="text-dark2">Appointment booked successfully!</p>
        </div>
      </div>
    </Container>
  );
};

export default BookedAppointment;
