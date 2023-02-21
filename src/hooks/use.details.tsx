import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/app.context";
import { getCountry } from "../services/api.repo";

export const useDetails = () => {
  const { id } = useParams();

  const { countries } = useContext(AppContext);

  const [country, setCountry] = useState<{ [key: string]: any }>();

  // En este caso, buscamos un elemento con Find
  const contextCountry = countries.find((item) => item.name === id);

  //Pero luego abajo volvemos a hacer lo mismo a través de getCountry con fetch.
  useEffect(() => {
    const loadCountry = async () => {
      const country = await getCountry(id as string);
      console.log(country);
      setCountry(country);
    };
    loadCountry();
  }, [id]);

  // Es común hacer que devuelva un objeto por si tengo que agregar más cosas.
  return {
    country,
    contextCountry,
  };
};
