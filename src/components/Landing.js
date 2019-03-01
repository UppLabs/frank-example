import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Header } from './common/Index';
import NavBar from './NavBar';

class Landing extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText="Statistics" />
          <View style={styles.containerStyle}>
            <Image style={styles.donuteStyle} source={require('../img/newlogistics.png')} />
          </View>
          <Image style={styles.imgStyle} source={require('../img/big-chart.png')} accessibilityLabel="a chart of electric watt usage" />
        <NavBar />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#f8fcff'
  },
  imgStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    padding: 10,
  },
  donuteStyle: {
    marginLeft: 20
  },
  containerStyle: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 20
  }
}

export default Landing;
