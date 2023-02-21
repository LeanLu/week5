import { useContext } from "react";
import "./countries.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import { CountryStructure } from "../../models/country";

export function Countries() {
  const { countries, selectedCountry } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = (item: CountryStructure) => {
    selectedCountry.country = item;
    navigate(`/details/${item.name}`);
  };

  return (
    <>
      <h2>Countries</h2>
      <ul>
        {countries.map((item) => (
          <li key={item.name} title={item.name}>
            {/* Antes con la navegación por Link: */}
            {/* <Link to={`/details/${item.name}`}> */}
            <figure onClick={() => handleClick(item)}>
              <img src={item.flag} alt={"Flag from " + item.name} />
            </figure>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
