import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  Image,
  Animated,
  Easing
} from 'react-native';
import MainPage from './components/MainPage';


class Recycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1,
      chemical: 'PET (Polyethylene Terephthalate)',
      recycleable: 'YES',
      description: 'PET is one of the most commonly used plastics in consumer products, and is found in most water and pop bottles, and some packaging. It is intended for single use applications; repeated use increases the risk of leaching and bacterial growth.',
      color: 'green',
      spinValue: new Animated.Value(0)
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
        });
        break;
      case 2:
        this.setState({
          num: 2,
          chemical: 'HDPE (High-Density Polyethylene)',
          recycleable: 'YES',
          description: 'HDPE is a stiff plastic used to make picnic tables, plastic lumber, waste bins, park benches, bed liners for trucks and other products which require durability and weather-resistance. Products made of HDPE are reusable and recyclable.'
        });
        break;
      case 3:
        this.setState({
          num: 3,
          chemical: 'PVC (Polyvinyl Chloride)',
          recycleable: 'NO',
          description: 'PVC is dubbed the “poison plastic” because it contains numerous toxins which it can leach throughout its entire life cycle.  Because PVC is relatively impervious to sunlight and weather, it is used to make window frames, and garden hoses.',
        });
        break;
      case 4:
        this.setState({
          num: 4,
          chemical: 'LDPE (Low-Density Polyethylene)',
          recycleable: 'YES',
          description: 'It is not commonly recycled, however, this is changing in many communities today as more recycling programs gear up to handle this material like the city of Austin. When recycled, LDPE plastic is used for plastic lumber, garbage can liners and floor tiles.'
        });
        break;
      case 5:
        this.setState({
          num: 5,
          chemical: 'PP (Polypropylene)',
          recycleable: 'YES',
          description: 'Polypropylene is recyclable through some curbside recycling programs, but only about 3% of PP products are currently being recycled in the US. Recycled PP is used to make landscaping border stripping, battery cases, brooms, bins and trays. However, #5 plastic is today becoming more accepted by recyclers.'
        });
        break;
      case 6:
        this.setState({
          num: 6,
          chemical: 'PS (Polystyrene)',
          recycleable: 'NO',
          description: 'Polystyrene is an inexpensive, lightweight and easily-formed plastic with a wide variety of uses. It is most often used to make disposable styrofoam drinking cups, take-out “clamshell” food containers, egg cartons, plastic picnic cutlery, foam packaging and those ubiquitous “peanut” foam chips in packages.'
        });
        break;
      case 7:
        this.setState({
          num: 7,
          chemical: 'Other (BPA, Polycarbonate and LEXAN)',
          recycleable: 'NO',
          description: '#7 plastics are not for reuse, unless they have the PLA compostable coding. When possible it is best to avoid #7 plastics, especially for children’s food. Plastics with the recycling labels #1, #2 and #4 on the bottom are safer choices and do not contain BPA.'
        });
     }
  }

  handlePress() {
    if (this.state.num === 1 || this.state.num === 2 || this.state.num === 4 || this.state.num === 5) {
    Animated.timing(
      this.state.spinValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start();
  }
}

  render() {
    const spin = this.state.spinValue.interpolate({
       inputRange: [0, 1],
       outputRange: ['0deg', '360deg']
     });
    return (
    <View style={{ flex: 1, backgroundColor: '#00A5CF' }}>

      <View style={[styles.headerStyle, styles[this.state.num]]}>
        <Text style={styles.headerText}>Can I Recycle This?</Text>
      </View>

      <View style={styles.logoArea}>
        <Text style={styles.name}>{this.state.chemical}</Text>
        <Animated.Image
        style={{ height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        transform: [{ rotate: spin }] }} source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/196353/recycle-plastic.png' }}
        >
        <Text style={styles.number}>{this.state.num}</Text>
        </Animated.Image>
      </View>

      <MainPage
        recycleable={this.state.recycleable}
        description={this.state.description}
      />

      <View style={styles.slider}>
        <Slider
          minimumTrackTintColor={'white'}
          style={styles.slider}
          value={this.props.num}
          minimumValue={1}
          maximumValue={7}
          step={1}
          onValueChange={newValue => this.onSlide(newValue)}
        />
      </View>

      <View style={styles.buttonArea}>
        <Button
          style={{ }}
          styleDisabled={{ color: 'red' }}
          onPress={this.handlePress.bind(this)}
        >
          <Image style={styles.buttonImage} source={{ uri: 'https://www.shareicon.net/download/2016/07/12/794699_recycle-bin_512x512.png' }} />
        </Button>
      </View>

      <View style={styles.nextPage}>
        <Text style={styles.achievements} onPress={() => Actions.achievements()}>ACHIEVEMENTS</Text>
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
  slider: {
    justifyContent: 'center',
    marginTop: 18
  },
  button: {
    height: 30
  },
  nextPage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonImage: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  achievements: {
    fontSize: 20,
    color: 'gold'
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

export default Recycle;
