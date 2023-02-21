import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { useDetails } from "../../hooks/use.details";

export function Details() {
  const { selectedCountry } = useContext(AppContext);

  const { country, contextCountry } = useDetails();

  console.log(selectedCountry);

  if (country === undefined) {
    return <>🌀 Loading</>;
  }

  return (
    <>
      <h2>Details from {contextCountry?.name}</h2>
      <p>Capital: {contextCountry?.capital}</p>
      <p>Población: {contextCountry?.population}</p>
      <p>Area: {contextCountry?.area}</p>
      <img src={country[0].coatOfArms?.svg} alt="Coat Of Arms" />
    </>
  );
}
