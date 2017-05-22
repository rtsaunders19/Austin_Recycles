/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Image
} from 'react-native';

export default class recycleApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      num: 1
    };
  }


  render() {
    return (
      <View style={{ flex: 1 }}>

      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Can I Recycle This?</Text>
      </View>

      <View>
        <Text style={styles.name}>Polyphetine</Text>
        <Image style={styles.logo} />
      </View>

      <View style={styles.mainSection}>
        <Text style={styles.mainHeader}>Recycleable</Text>
        <Image style={styles.box} />
        <Text style={styles.description}>lorem empsum jdnd loofdiue ibujek hdvikhbeiw
        jasbd hbsjdhb hasjnf hbssvve</Text>
      </View>

      <View style={styles.slider}>
        <Text>recycle:{this.state.num}</Text>
        <Slider
          style={styles.slider}
          value={this.state.num}
          minimumValue={1}
          maximumValue={7}
          step={1}
          onValueChange={newValue => this.setState({ num: newValue })}
        />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    height: 60,
    paddingTop: 15
  },
  headerText: {
    fontSize: 20
  },
  name: {
    fontSize: 15
  },
  logo: {

  },
  mainSection: {

  },
  mainHeader: {

  },
  box: {

  },
  description: {

  },
  slider: {
    justifyContent: 'center',
    flex: 2
  }
});

AppRegistry.registerComponent('albums', () => recycleApp);
