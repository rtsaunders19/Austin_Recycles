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
      chemical: 'PET (Polyethylene Terephthalate)',
      recycleable: 'YES',
      description: 'PET is one of the most commonly used plastics in consumer products, and is found in most water and pop bottles, and some packaging. It is intended for single use applications; repeated use increases the risk of leaching and bacterial growth.'
    };
  }


  onSlide(value) {
    switch (value) {
      case 1:
        this.setState({
          num: 1,
          chemical: 'PET (Polyethylene Terephthalate)',
          recycleable: 'YES',
          description: 'PET is one of the most commonly used plastics in consumer products, and is found in most water and pop bottles, and some packaging. It is intended for single use applications; repeated use increases the risk of leaching and bacterial growth.'
        })
        break;
      case 2:
        this.setState({
          num: 2,
          chemical: 'HDPE (High-Density Polyethylene)',
          recycleable: 'YES',
          description: 'HDPE is a stiff plastic used to make picnic tables, plastic lumber, waste bins, park benches, bed liners for trucks and other products which require durability and weather-resistance. Products made of HDPE are reusable and recyclable.'
        })
        break;
      case 3:
        this.setState({
          num: 3,
          chemical: 'PVC (Polyvinyl Chloride)',
          recycleable: 'NO',
          description: 'PVC is dubbed the “poison plastic” because it contains numerous toxins which it can leach throughout its entire life cycle.  Because PVC is relatively impervious to sunlight and weather, it is used to make window frames, garden hoses, arbors, raised beds and trellises. Products made using PVC plastic are not recyclable. '
        })
        break;
      case 4:
        this.setState({
          num: 4,
          chemical: 'LDPE (Low-Density Polyethylene)',
          recycleable: 'YES',
          description: 'It is not commonly recycled, however, this is changing in many communities today as more recycling programs gear up to handle this material like the city of Austin. When recycled, LDPE plastic is used for plastic lumber, landscaping boards, garbage can liners and floor tiles.'
        })
        break;
      case 5:
        this.setState({
          num: 5,
          chemical: 'PP (Polypropylene)',
          recycleable: 'YES',
          description: 'Polypropylene is recyclable through some curbside recycling programs, but only about 3% of PP products are currently being recycled in the US. Recycled PP is used to make landscaping border stripping, battery cases, brooms, bins and trays. However, #5 plastic is today becoming more accepted by recyclers.'
        })
        break;
      case 6:
        this.setState({
          num: 6,
          chemical: 'PS (Polystyrene)',
          recycleable: 'NO',
          description: 'Polystyrene is an inexpensive, lightweight and easily-formed plastic with a wide variety of uses. It is most often used to make disposable styrofoam drinking cups, take-out “clamshell” food containers, egg cartons, plastic picnic cutlery, foam packaging and those ubiquitous “peanut” foam chips used to fill shipping boxes to protect the contents.'
        })
        break;
      case 7:
        this.setState({
          num: 7,
          chemical: 'Other (BPA, Polycarbonate and LEXAN)',
          recycleable: 'NO',
          description: '#7 plastics are not for reuse, unless they have the PLA compostable coding. When possible it is best to avoid #7 plastics, especially for children’s food. Plastics with the recycling labels #1, #2 and #4 on the bottom are safer choices and do not contain BPA.'
        })
    }
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00A5CF' }}>

      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>Can I Recycle This?</Text>
      </View>

      <View style={styles.logoArea}>
        <Text style={styles.name}>{this.state.chemical}</Text>
        <Image style={styles.image} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }}>
          <Text style={styles.number}>{this.state.num}</Text>
        </Image>
      </View>

      <View style={styles.mainSection}>
        <Text style={styles.mainHeader}>Recycleable?</Text>
        <View style={styles.box} >
          <Text style={{ width: 30, height: 30, color: 'black' }}>{this.state.recycleable}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30, height: 40 }}>
          <Text style={styles.description}>{this.state.description}</Text>
        </View>
      </View>

      <View style={styles.slider}>
        <Slider
          minimumTrackTintColor={'white'}
          style={styles.slider}
          value={this.state.num}
          minimumValue={1}
          maximumValue={7}
          step={1}
          onValueChange={newValue => this.onSlide(newValue)}
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
    paddingTop: 15
  },
  name: {
    fontSize: 15,
    color: 'white'
  },
  number: {
    fontSize: 15,
    color: 'white',
  },
  image: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  mainHeader: {
    color: 'white'
  },
  box: {
    backgroundColor: 'white',
    height: 30
  },
  description: {
    color: 'white',
    fontSize: 10
  },
  slider: {
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('albums', () => recycleApp);
