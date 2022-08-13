import axios from "axios";
import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import CardResidents from "./CardResidents";

const LocationInfo = () => {
  const [location, setLocation] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    let randomNumber;
    if (search === "") {
      randomNumber = Math.floor(Math.random() * (127 - 1) + 1);
    } else {
      randomNumber = search;
    }

    const URL = `https://rickandmortyapi.com/api/location/${randomNumber}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [search]);

  const submit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  console.log(typeof search);

  if (search >= 127 || search < 0) {
    return (
      <div className="noExiste">
        <div className="gif"></div>
        <form onSubmit={submit}>
          <input id="search" type="text" />
          <button>Search</button>
        </form>
        <h2>
          Location could not be found. Please enter a location from 1 to 126.
        </h2>
      </div>
    );
  } else {
    return (
      <div className="location_info">
        <div className="gif"></div>

        <form onSubmit={submit}>
          <input id="search" type="text" placeholder="Search location..." />
          <button>Search</button>
        </form>
        <h2>{location?.name}</h2>
        <div className="location">
          <p>
            <strong>Type: </strong> {location?.type}
          </p>
          <p>
            <strong>Dimension:</strong> {location?.dimension}
          </p>
          <p>
            <strong>Population: </strong>
            {location?.residents.length}
          </p>
        </div>
        <div className="residents">
          {location?.residents.map((url) => (
            <CardResidents key={url} url={url} />
          ))}
        </div>
      </div>
    );
  }
};

export default LocationInfo;
