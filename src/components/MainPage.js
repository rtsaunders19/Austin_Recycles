import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class MainPage extends Component {

  render() {
    return (

  <View>

  <View style={styles.mainSection}>
    <Text style={styles.mainHeader}>Recycleable?</Text>
    <View style={styles.box} >
      <Text style={styles[this.props.recycleable.toLowerCase()]}>{this.props.recycleable}</Text>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, height: 40 }}>
      <Text style={styles.description}>{this.props.description}</Text>
    </View>
  </View>

  </View>
    );
  }
}

const styles = StyleSheet.create({
  mainSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  mainHeader: {
    color: 'white',
    fontSize: 16
  },
  box: {
    flex: 1
  },
  description: {
    color: 'white',
    fontSize: 15,
    width: 290,
    height: 200
  },
  yes: {
    color: '#8BC34A',
    fontSize: 20
  },
  no: {
    color: 'red',
    fontSize: 20
  }
});

export default MainPage;
