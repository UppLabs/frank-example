import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg from "react-native-svg";
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryAxis
} from 'victory-native';
import { VictoryTheme } from "victory-core";

import Data from '../data.json';

class UsageChart extends Component {
  constructor(props) {
    super(props);
  }

  _getFirstLetterOfMonth(x) {
    let check = x.slice(0, 2);

    switch(check) {
      case '01':
        x = 'Jan';
      break;
      case '02':
        x = 'Feb';
      break;
      case '03':
        x = 'Mar';
      break;
      case '04':
        x = 'Apr';
      break;
      case '05':
        x = 'May';
      break;
      case '06':
        x = 'Jun';
      break;
      case '07':
        x = 'Jul';
      break;
      case '08':
        x = 'Aug';
      break;
      case '09':
        x = 'Sept';
      break;
      case '10':
        x = 'Oct';
      break;
      case '11':
        x = 'Nov';
      break;
      case '12':
        x = 'Dec';
      break;
    }
    return x;
  }

  render() {
    var data = [
      { x: this._getFirstLetterOfMonth("08/19/2014"), y: 414},
      { x: this._getFirstLetterOfMonth("10/18/2014"), y: 333 },
      { x: this._getFirstLetterOfMonth("09/18/2014"), y: 348 },
      { x: this._getFirstLetterOfMonth("07/17/2014"), y: 327 },
      { x: this._getFirstLetterOfMonth("06/18/2014"), y: 380 },
      { x: this._getFirstLetterOfMonth("05/20/2014"), y: 419 },
      { x: this._getFirstLetterOfMonth("01/18/2014"), y: 399 },
      { x: this._getFirstLetterOfMonth("04/17/2014"), y: 316 },
      { x: this._getFirstLetterOfMonth("03/20/2014"), y: 345 },
      { x: this._getFirstLetterOfMonth("11/16/2013"), y: 400 },
      { x: this._getFirstLetterOfMonth("07/18/2015"), y: 335 },
      { x: this._getFirstLetterOfMonth("12/16/2015"), y: 311 },
      { x: this._getFirstLetterOfMonth("11/18/2015"), y: 422 },
      { x: this._getFirstLetterOfMonth("01/19/2016"), y: 422 },
      { x: this._getFirstLetterOfMonth("02/17/2016"), y: 376 },
      { x: this._getFirstLetterOfMonth("03/18/2016"), y: 325 },
      { x: this._getFirstLetterOfMonth("10/16/2013"), y: 307 },
      { x: this._getFirstLetterOfMonth("01/25/2016"), y: 350 },
      { x: this._getFirstLetterOfMonth("11/24/2015"), y: 350 },
      { x: this._getFirstLetterOfMonth("12/24/2015"), y: 350 },
      { x: this._getFirstLetterOfMonth("02/23/2016"), y: 350 },
      { x: this._getFirstLetterOfMonth("03/24/2016"), y: 350 },
      { x: this._getFirstLetterOfMonth("04/22/2016"), y: 350 },
    ]

    // console.log(data)

    return (
      <View style={{ height: 135}}>
        {/* x = EndDate y = Consumption */}
        <Svg
          style={styles.svgStyle}
          height={200}
          width={300}
          viewBox={"0 0 140 350"}
          preserveAspectRatio="none"
          >
          <VictoryChart
            domainPadding={15}
            height={175}
            width={385}
          >
            <VictoryAxis
              style={{
                axis: { stroke: "#02b3a4" },
                ticks: { fill: "#fff" },
                tickLabels: { fill: '#fff' }
              }}
              fixLabelOverlap={true}
            />
            <VictoryAxis
              style={{
                axis: { stroke: "#02b3a4" },
                ticks: { fill: "#fff" },
                tickLabels: { fill: '#fff' }
              }}
              tickValues={[0]}
              tickFormat={(ticks) => ticks + ' kWh' }
              dependentAxis
              fixLabelOverlap={true}
            />

            <VictoryBar
              style={{
                data: { stroke: "#02b3a4", fill: "#000" }
              }}
              data={data}
            />
          </VictoryChart>
        </Svg>
      </View>
    );
  }
}

const styles = {
  svgStyle: {
    flex: 1, 
    marginTop: 0, 
    paddingTop: 0
  }
}

export default UsageChart;
