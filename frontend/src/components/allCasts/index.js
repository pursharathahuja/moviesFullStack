import React from "react";
import "./allCasts.css"



const AllCast = ({actor}) => {
    return (
    <div className="card allCastCard">
          <img
            className="card-img-top imgPadding"
            alt={actor.name}
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            onError={(e)=>{e.target.onerror = null; e.target.src="../fallback.png"}}
          />
          <div className="card-body allCastBody">
          <div className="titleDiv">
            <h4 className="card-title allCastTitle">{actor.name}</h4>
            <span className="flashtitle">{actor.name}</span>
          </div>
            <p className="card-text"><b>As :<br></br></b>{actor.character}</p>
          </div>
    </div>
    );
};

export default AllCast;