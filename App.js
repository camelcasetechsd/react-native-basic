import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import Home from './components/Home.js'
import CompanyList from './components/CompanyList.js'
import CompanyDetails from './components/CompanyDetails.js'


const RootStack = createStackNavigator(
  {
    Main: Home,
    CompanyList: CompanyList,
    CompanyDetails: CompanyDetails,
  },
  {
    initialRouteName: 'Main',
  }
);

class reactTutorialApp extends Component {
   render() {
      return (
        <RootStack />
      );
   }
}

export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
