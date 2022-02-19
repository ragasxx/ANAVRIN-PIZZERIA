import React, { useEffect } from "react";
import Pizza from "../components/Pizza";
import pizzas from "../pizzasdata";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Spinner from "../components/Spinner";

export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div className="m-5">
      <div className="row mb-4">
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4 mb-5" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
