import { useEffect, useState } from "react";
import { CountryStructure } from "../models/country";
import { getAll } from "../services/api.repo";

export const useCountries = () => {
  const [countries, setCountries] = useState<CountryStructure[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await getAll();
      console.log(countries);
      setCountries(countries);
    };

    loadCountries();
  }, []);

  // Es común hacer que devuelva un objeto por si tengo que agregar más cosas.
  return {
    countries,
  };
};
