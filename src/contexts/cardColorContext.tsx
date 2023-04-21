import { createContext } from "react";

export const CardColorContext = createContext({
  backgroundColor: "#fffff",
  changeBackgroundColor: (color: string) => {},
});
