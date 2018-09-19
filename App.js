import React, { Component } from 'react';
import { AppRegistry, Button, Text } from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';

import HomeScreen from './components/HomeScreen.js'
import CompanyListScreen from './components/CompanyListScreen.js'
import CompanyDetailsScreen from './components/CompanyDetailsScreen.js'
import ContactUsScreen from './components/ContactUsScreen'
import CustomDrawerContentComponent from './components/CustomDrawerContentComponent'
import MenuBar from './components/MenuBar'



const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:{
            headerTitle: 'Home'
        }
    },
    CompanyList: {
        screen: CompanyListScreen
    },
    CompanyDetails: {
        screen: CompanyDetailsScreen
    },
    Contactus: {
        screen: ContactUsScreen,
    },
});


const MenuNavigator = createDrawerNavigator({
    Home: {
        screen: MainNavigator,
    },
    Contactus: {
        screen: ContactUsScreen,

    },
}, {
        initialRouteName: 'Home',
        contentComponent: CustomDrawerContentComponent,
        drawerPosition: 'right',
        contentOptions: {
            activeTintColor: '#e91e63',
            itemsContainerStyle: {
                marginVertical: 10,
            },
            iconContainerStyle: {
                opacity: .5
            }
        }
    })


class reactTutorialApp extends Component {
    render() {
        return (
            <MenuNavigator />
        );
    }
}

export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);