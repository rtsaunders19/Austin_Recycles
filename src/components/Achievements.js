
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
      <View style={{ marginTop: 35, flex: 1 }}>
      <View style={styles.unlock}>
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
      </View>
      <View style={styles.unlock}>
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
      </View>
      <View style={styles.unlock}>
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
        <Image style={styles.image} source={{ uri: 'https://www.iconexperience.com/_img/g_collection_png/standard/256x256/lock.png' }} />
      </View>
      </View>
      <View style={styles.textStyle}>
        <Text onPress={() => Actions.recycle()}>Back</Text>
      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  textStyle: {
    alignItems: 'center'
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
  },
  image: {
    height: 100,
    width: 100,
  }
});

export default Achievements;
