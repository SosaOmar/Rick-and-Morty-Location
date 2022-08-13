import React from "react";
import useApi from "../hooks/useApi";

const CardResidents = ({ url }) => {
  const resident = useApi(url);

  return (
    <div className="card">
      <div className="image">
        <img src={resident?.image} alt={resident?.name} />
      </div>

      <div className="container__info">
        <h3 className="info_container__name">{resident?.name}</h3>
        <div className="ss">
          <div className={`${resident?.status}`}></div>
          <p>{`${resident?.status}-${resident?.species}`}</p>
        </div>
        <p className="info">Origin</p>
        <p className="info_container">{resident?.origin.name}</p>
        <p className="info">Episodes where appear</p>
        <p className="info_container">{resident?.episode.length}</p>
      </div>
    </div>
  );
};

export default CardResidents;
