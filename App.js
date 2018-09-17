import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen from './components/HomeScreen.js'
import CompanyListScreen from './components/CompanyListScreen.js'
import CompanyDetailsScreen from './components/CompanyDetailsScreen.js'
import MenuBar from './components/MenuBar'


const RootStack = createStackNavigator(
    {
        Main: HomeScreen,
        CompanyList: CompanyListScreen,
        CompanyDetails: CompanyDetailsScreen,
    },
    {
        initialRouteName: 'Main',
        navigationOptions: {
            headerRight: <MenuBar/>,
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
            },
        }
    },
);

class reactTutorialApp extends Component {
    render() {
        return (
            <RootStack/>
        );
    }
}

export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
