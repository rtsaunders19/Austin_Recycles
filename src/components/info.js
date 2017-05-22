// import libraries for making a Component
import React from 'react';
import { Text, View, Image } from 'react-native';

// make a Component
const Info = props => {
  //destructuring
  const { headerText, box, main, description } = styles;

  return (
    <View style={main}>
      <Text style={headerText}>Recycleable</Text>
      <Image style={box} />
      <Text style={description}>lorem empsum jdnd loofdiue ibujek hdvikhbeiw
      jasbd hbsjdhb hasjnf hbssvve</Text>
    </View>
  );
};
//styles object
const styles = {
  main: {
    flex: 1
  },
  headerText: {
    fontSize: 20
  },
  box: {

  },
  description: {

  }
};

// Make the component available to other parts of the app
export default Info;
