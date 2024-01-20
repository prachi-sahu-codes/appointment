import React, { createContext, useContext, useReducer, useEffect } from "react";

const DataContext = createContext();

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "GET_DATA":
      return {
        ...state,
        allData: action.payload,
        dateSelected: [action.payload[0]],
      };
    case "ERROR_IN_FETCHING":
      return { ...state, error: action.payload };
    case "DATE_SELECTED":
      const dateFound = state.allData.filter(
        (obj) =>
          new Date(obj.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }) === action.payload
      );
      return { ...state, dateSelected: dateFound };
    case "SLOT_SELECTED":
      console.log("selected", action.payload);
      return { ...state, slotSelected: action.payload };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const initialValue = {
    allData: [],
    loading: false,
    error: "",
    dateSelected: [],
    slotSelected: "",
  };
  const [state, dispatch] = useReducer(reducerFunc, initialValue);

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      const response = await fetch(
        "https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30"
      );
      const data = await response.json();
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "GET_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR_IN_FETCHING", payload: error.message });
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => useContext(DataContext);
