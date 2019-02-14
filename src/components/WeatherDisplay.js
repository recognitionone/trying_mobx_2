import React, { Component } from 'react';
import { observable, action, decorate } from 'mobx';
import { observer } from 'mobx-react';


class WeatherDisplay extends React.Component {

  render() {
    const weatherForThatDay = this.props.weatherDisplayed;  

    return (
      <div>
        {!weatherForThatDay ?
           "loading..." 
          :
            <div key={weatherForThatDay.id}>
              <div>Temperature:     {weatherForThatDay.temp}       </div>
              <div>Temperature min: {weatherForThatDay.temp_min}   </div>
              <div>Temperature max: {weatherForThatDay.temp_max}   </div>
              <div>Pressure:        {weatherForThatDay.pressure}   </div>
              <div>Description:     {weatherForThatDay.weatherDesc}</div>
            </div>
           } 
      </div>
    )
  }
}


export default WeatherDisplay;
