
import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Achievements from './components/Achievements';
import Recycle from './Recycle';

class App extends Component {
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
