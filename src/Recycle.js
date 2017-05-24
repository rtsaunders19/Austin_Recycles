import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import {
  StyleSheet,
  Text,
  View,
  Slider
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
      color: 'green'
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
          description: 'PVC is dubbed the “poison plastic” because it contains numerous toxins which it can leach throughout its entire life cycle.  Because PVC is relatively impervious to sunlight and weather, it is used to make window frames, garden hoses, arbors, raised beds and trellises. Products made using PVC plastic are not recyclable.'
        });
        break;
      case 4:
        this.setState({
          num: 4,
          chemical: 'LDPE (Low-Density Polyethylene)',
          recycleable: 'YES',
          description: 'It is not commonly recycled, however, this is changing in many communities today as more recycling programs gear up to handle this material like the city of Austin. When recycled, LDPE plastic is used for plastic lumber, landscaping boards, garbage can liners and floor tiles.'
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
          description: 'Polystyrene is an inexpensive, lightweight and easily-formed plastic with a wide variety of uses. It is most often used to make disposable styrofoam drinking cups, take-out “clamshell” food containers, egg cartons, plastic picnic cutlery, foam packaging and those ubiquitous “peanut” foam chips used to fill shipping boxes to protect the contents.'
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

  _handlePress() {
    this.setState({
      num: 7
    });
  }


  render() {
    return (
    <View style={{ flex: 1, backgroundColor: '#00A5CF' }}>
      <MainPage
        onSlide={this.onSlide()}
        num={this.state.num}
        chemical={this.state.chemical}
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
          style={{ fontSize: 20, color: 'white' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._handlePress()}
        >
          Press Me!
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
  achievements: {
    fontSize: 20,
    color: 'gold'
  }
});
export default Recycle;
