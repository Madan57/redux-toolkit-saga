import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const loading = useSelector((state) => state.cats.isLoading);

  console.log(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log(cats);

  return (
    <div className="App">
      <div className="myCounter">
        <Counter />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 style={{ textTransform: "uppercase" }}>cat species gallery</h1>
          <p>
            Images of different species of cat. Lots of cats for your viewing
            pleasure.
          </p>
          <hr />
          <div className="gallery">
            {cats.map((cat) => (
              <div key={cat.id} className="row">
                <div className="column column-left">
                  <img
                    alt={cat.name}
                    src={cat?.image?.url}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="column column-right">
                  <h2>{cat.name}</h2>
                  <h5>Temperament: {cat.temperament} </h5>
                  <h4 style={{ fontWeight: "bold" }}>
                    Country code: {cat.country_code}{" "}
                  </h4>
                  <p>{cat.description} </p>
                </div>
              </div>
            ))}
          </div>
          <button>VIEW MORE CATS</button>
        </div>
      )}
    </div>
  );
}

export default App;
