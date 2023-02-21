import { createContext } from "react";
import { CountryStructure } from "../models/country";

export type AppContextStructure = {
  countries: CountryStructure[];
  selectedCountry: { [key: string]: any };
};

const initialContext = {} as AppContextStructure;
export const AppContext = createContext(initialContext);
