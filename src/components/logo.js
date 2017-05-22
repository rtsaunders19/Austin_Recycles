// import libraries for making a Component
import React from 'react';
import { Text, View, Image } from 'react-native';

// make a Component
const Logo = props => {
  //destructuring
  const { name, logo, main } = styles;

  return (
    <View style={main}>
      <Text style={name}>Polyphetine</Text>
      <Image style={logo} />
    </View>
  );
};
//styles object
const styles = {
  main: {
    flex: 1
  },
  name: {
    fontSize: 15
  },
  logo: {

  }
};

// Make the component available to other parts of the app
export default Logo;
