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

  chemical() {
    let recycling = this.state.num
    switch (recycling) {
      case 1:
        return 'PETE'
        break;
      case 2:
        return 'HDPE'
        break;
      case 3:
        return 'V'
        break;
      case 4:
        return 'LDPE'
        break;
      case 5:
        return 'PP'
        break;
      case 6:
        return 'PS'
        break;
      case 7:
        return 'Other'
    }
  }

  yesOrNo() {
    let recycling = this.state.num
    switch (recycling) {
      case 1:
        return 'YES'
        break;
      case 2:
        return 'YES'
        break;
      case 3:
        return 'NO'
        break;
      case 4:
        return 'YES'
        break;
      case 5:
        return 'YES'
        break;
      case 6:
        return 'NO'
        break;
      case 7:
        return 'NO'
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>

      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Can I Recycle This?</Text>
      </View>

      <View>
        <Text style={styles.name}>{this.chemical()}</Text>
        <Image style={styles.logo} />
      </View>

      <View style={styles.mainSection}>
        <Text style={styles.mainHeader}>Is it recycleable {this.yesOrNo()}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 25,
    backgroundColor: '#8BC34A'
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
