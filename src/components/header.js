// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = () => {
  //destructuring
  const { headerText, main } = styles;

  return (
    <View style={main}>
      <Text style={headerText}>Can I Recycle This?</Text>
    </View>
  );
};
//styles object
const styles = {
  main: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    flex: 1
  },
  headerText: {
    fontSize: 20
  },
};

// Make the component available to other parts of the app
export default Header;
