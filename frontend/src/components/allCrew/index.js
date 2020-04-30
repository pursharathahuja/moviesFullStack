import React from "react";

const AllCrew = ({crew}) => {
    return (
    <div className="card allCastCard">
          <img
              className="card-img-top imgPadding"
              alt={crew.name}
              src={`https://image.tmdb.org/t/p/w500/${crew.profile_path}`}
              onError={(e)=>{e.target.onerror = null; e.target.src="../fallback.png"}}
          />
          <div className="card-body allCastBody">
          <div className="titleDiv">
            <h4 className="card-title allCastTitle">{crew.name}</h4>
            <span className="flashtitle">{crew.name}</span>
          </div>
            <p className="card-text"><b>From :<br></br></b>{crew.department}</p>
          </div>
    </div>
    );
};

export default AllCrew;