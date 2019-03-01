import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import SideNav from '../SideNav';


class MapHeader extends Component {

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
          <Image style={styles.imgStyle} source={require('../../img/profile.png')} accessibilityLabel="Profile icon" />
        </TouchableOpacity>
        <Text style={textStyle}>
          {this.props.headerText}
        </Text>
        <TouchableOpacity>
          <Image style={styles.imgStyle} source={require('../../img/search.png')} accessibilityLabel="Search icon" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 10,
    elevation: 2,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  textStyle: {
    fontSize: 16,
    backgroundColor: 'transparent',
    color: '#000'
  },
  imgStyle: {
    backgroundColor: 'transparent',
  }
};

// Export component
export { MapHeader };
