import { createContext, useContext } from "react";

export const DataContext = createContext({
  data: "nature",
  setData: "",
});

export const DataProvider = DataContext.Provider;

export default function useData() {
  return useContext(DataContext);
}
