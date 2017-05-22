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
      num: 1,
      chemical: 'PETE',
      recycleable: 'Yes'
    };
  }

  chemical(value) {
    switch (value) {
      case 1:
        this.setState({
          num: 1,
          chemical: 'PETE',
          recycleable: 'Yes'
        })
        break;
      case 2:
        this.setState({
          num: 2,
          chemical: 'HDPE',
          recycleable: 'Yes'
        })
        break;
      case 3:
        this.setState({
          num: 3,
          chemical: 'V',
          recycleable: 'No'
        })
        break;
      case 4:
        this.setState({
          num: 4,
          chemical: 'LDPE',
          recycleable: 'Yes'
        })
        break;
      case 5:
        this.setState({
          num: 5,
          chemical: 'PP',
          recycleable: 'Yes'
        })
        break;
      case 6:
        this.setState({
          num: 6,
          chemical: 'PS',
          recycleable: 'No'
        })
        break;
      case 7:
        this.setState({
          num: 7,
          chemical: 'Other',
          recycleable: 'No'
        })
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>

      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Can I Recycle This?</Text>
      </View>

      <View style={styles.logoArea}>
        <Text style={styles.name}>{this.state.chemical}</Text>
        <Image style={styles.image} />
        <Text style={styles.name}>{this.state.num}</Text>
      </View>

      <View style={styles.mainSection}>
        <Text style={styles.mainHeader}>Recycleable?</Text>
        <Text style={styles.mainHeader}>{this.state.recycleable}</Text>
        <Image style={styles.box} />
        <Text style={styles.description}>lorem empsum jdnd loofdiue ibujek hdvikhbeiw
        jasbd hbsjdhb hasjnf hbssvve</Text>
      </View>

      <View style={styles.slider}>
        <Slider
          style={styles.slider}
          value={this.state.num}
          minimumValue={1}
          maximumValue={7}
          step={1}
          onValueChange={newValue => this.chemical(newValue)}
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
  logoArea: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 15
  },
  image: {

  },
  mainSection: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainHeader: {

  },
  box: {

  },
  description: {

  },
  slider: {
    justifyContent: 'center',
    flex: 1
  }
});

AppRegistry.registerComponent('albums', () => recycleApp);
