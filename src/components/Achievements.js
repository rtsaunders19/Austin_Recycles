
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image } from 'react-native';

class Achievements extends Component {
  render() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Achievements</Text>
      </View>
      <View style={styles.unlock}>
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
      </View>
      <View style={styles.unlock}>
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
      </View>
      <View style={styles.unlock}>
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }} />
      </View>
      <View style={styles.textStyle}>
        <Text onPress={() => Actions.recycle()}>hello</Text>
      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 500
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 25,
    backgroundColor: '#8BC34A',
    color: 'white'
  },
  headerText: {
    fontSize: 20,
    color: 'white'
  },
  unlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 7
  }
});

export default Achievements;
