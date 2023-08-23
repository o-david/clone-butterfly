import React from "react";
import HeadingComponent from "./HeadingComponent";
import data from "../data";

const Countries = () => {
  return (
    <div id="countries">
      <h2 id="countries_top">Countries</h2>

      <HeadingComponent title="General">
        <div className="countries_grp">
          <div className="ind_countries">
            {data && 
            <>
            <img src={data[0].img} alt="no network" />
            <p>{data[0].name}</p>
            </>
            }
          </div>
        </div>
      </HeadingComponent>
      <HeadingComponent title="Europe">
        <div className="countries_grp">
          {data &&
            data
              .filter((country) => country.europe && country.id!=20)
              .map((ind) => (
                <div className="ind_countries">
                  <img src={ind.img} alt="no network" />
                  <p>{ind.name}</p>
                </div>
              ))}
        </div>
      </HeadingComponent>
      <HeadingComponent title="World">
        <div className="countries_grp">
          {data &&
            data
              .filter((country) => !country.europe)
              .map((ind) => (
                <div className="ind_countries" key={ind._id}>
                  <img src={ind.img} alt="no network" />
                  <p>{ind.name}</p>
                </div>
              ))}
        </div>
      </HeadingComponent>
    </div>
  );
};

export default Countries;
