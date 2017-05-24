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

  <View style={[styles.headerStyle, styles[this.props.num]]}>
    <Text style={styles.headerText}>Can I Recycle This?</Text>
  </View>

  <View style={styles.logoArea}>
    <Text style={styles.name}>{this.props.chemical}</Text>
    <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }}>
      <Text style={styles.number}>{this.props.num}</Text>
    </Image>
  </View>

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
  logoArea: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35
  },
  name: {
    fontSize: 18,
    color: 'white'
  },
  number: {
    fontSize: 20,
    color: 'black',
  },
  image: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
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
  },
  3: {
    backgroundColor: 'red'
  },
  6: {
    backgroundColor: 'red'
  },
  7: {
    backgroundColor: 'red'
  }
});

export default MainPage;
