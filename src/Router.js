
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Achievements from './components/Achievements';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="achievements" component={Achievements} title="Your Achievements" />
    </Router>
  );
};

export default RouterComponent;
