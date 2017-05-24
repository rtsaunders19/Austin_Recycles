
import React, { Component } from 'react';
import firebase from 'firebase';
import { Scene, Router } from 'react-native-router-flux';
import Achievements from './components/Achievements';
import Recycle from './Recycle';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
   apiKey: 'AIzaSyBU4b44KNZhjxNJUBsvBish5vxs43n4Urg',
   authDomain: 'austinrecycles-eaa8d.firebaseapp.com',
   databaseURL: 'https://austinrecycles-eaa8d.firebaseio.com',
   projectId: 'austinrecycles-eaa8d',
   storageBucket: 'austinrecycles-eaa8d.appspot.com',
   messagingSenderId: '1046982011353'
 });
}
  render() {
  return (
    <Router hideNavBar={true}>
      <Scene key="root">
        <Scene
          key="recycle"
          component={Recycle}
          title="Can I Recycle This?"
          initial
        />

        <Scene
          key="achievements"
          component={Achievements}
          title="Your Achievements"
        />
      </Scene>
    </Router>
    );
  }
}

export default App;
