import React from "react";
import './SeasonDisplay.css'

// Seasons Dsiplay Function 
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    const text = season === 'Winter' ? "Burr , It's Chilly" : "Let's hit the beach";
    const icon = season === 'Winter' ? "snowflake" : "sun"
  
    return (
      <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${icon} icon`}/>
          <h1>{text}</h1>
          <i className={`icon-right massive ${icon} icon`}/>
      </div>
    );
  };

//  Get Seasons function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

export default SeasonDisplay;
