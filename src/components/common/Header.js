// Import dependencies
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import SideNav from '../SideNav';

// Make component
class Header extends Component {

  onProfilePress() {
    return (
      <View style={{ flex: 3, backgroundColor: 'green' }}>
        <SideNav />
      </View>
    );
  }

  render() {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <TouchableOpacity onPress={this.onProfilePress}>
          <Image source={require('../../img/profile.png')} accessibilityLabel="Profile icon" />
        </TouchableOpacity>
        <Text style={textStyle}>
          {this.props.headerText}
        </Text>
        <TouchableOpacity>
          <Image source={require('../../img/search.png')} accessibilityLabel="Search icon" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8fcff',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Export component
export { Header };
