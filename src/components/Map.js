import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

import { MapHeader } from './common/Index';
import NavBar from './NavBar';

Mapbox.setAccessToken('pk.eyJ1Ijoic2V2ZW52YXJpYW5jZSIsImEiOiJjamI4OTAydTEwMWV5MnFxZ2hidTBvY3VmIn0.3A6cLnUZ5gbPUJKfLbbmIA');

class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapHeader headerText="Find Meters" />
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={{ flex: 1 }}
        />
        <NavBar />
      </View>
    );
  }
}

const styles = {
  markerOneStyle: {
    top: 110,
    left: 90,
    position: 'absolute',
  },
  markerTwoStyle: {
    top: 200,
    left: 300,
    position: 'absolute',
  },
  markerThreeStyle: {
    top: 340,
    left: 270,
    position: 'absolute',
  },
  markerFourStyle: {
    top: 280,
    left: 100,
    position: 'absolute',
  },
  meterDetailContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginLeft: 5,
    marginRight: 5,
    // marginTop: -400,
    borderRadius: 10,
    // position: 'absolute',
  }
}

export default Map;
