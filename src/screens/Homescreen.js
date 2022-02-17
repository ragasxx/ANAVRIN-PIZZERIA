import React from "react";
import Pizza from "../components/Pizza";
import pizzas from "../pizzasdata";

export default function Homescreen() {
  return (
    <div className="m-5">
      <div className="row mb-4">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4 mb-5">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
