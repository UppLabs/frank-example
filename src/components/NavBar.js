import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

class NavBar extends Component {
  render() {
    const currentScene = Actions.currentScene;
    console.log(currentScene);
    const { viewStyle, arrowStyle, activeButtonStyle } = styles
    return (
      <View style={viewStyle}>
        <View style={currentScene === 'accountDetails' ? activeButtonStyle : null}>
          <TouchableOpacity onPress={() => Actions.account()}>
              <Image source={require('../img/home.png')} accessibilityLabel="home icon" />
          </TouchableOpacity>
        </View>
        <View style={currentScene === 'historicalUsage' ? activeButtonStyle : null}>
          <TouchableOpacity onPress={() => Actions.usage()}>
            <Image source={require('../img/chart.png')} accessibilityLabel="chart icon" />
          </TouchableOpacity>
        </View>
        <View style={arrowStyle}>
          <TouchableOpacity onPress={() => Actions.land()}>
            <Image source={require('../img/arrow.png')} accessibilityLabel="arrow icon" />
          </TouchableOpacity>
        </View>
        <View style={currentScene === 'mapDetails' ? activeButtonStyle : null}>
          <TouchableOpacity onPress={() => Actions.map()}>
            <Image source={require('../img/map-marker.png')} accessibilityLabel="map icon" />
          </TouchableOpacity>
        </View>
        <View style={currentScene === 'chatSupport' ? activeButtonStyle : null}>
          <TouchableOpacity onPress={() => Actions.chat()}>
            <Image source={require('../img/mail.png')} accessibilityLabel="mail icon" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8fcff',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    paddingTop: 15,
    height: 50,
    elevation: 2,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  arrowStyle: {
    elevation: 4,
    bottom: 45,
    overflow: 'visible',
    position: 'relative'
  },
  activeButtonStyle: {
    borderBottomWidth: 3,
    borderColor: '#02b3a4',
    width: 30,
    height: 30,
    alignItems: 'center'
  }
}

export default NavBar;
