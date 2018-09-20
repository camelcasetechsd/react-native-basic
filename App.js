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

/* General Stack header Setting */
const headerSetting = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
}

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    CompanyList: {
        screen: CompanyListScreen
    },
    CompanyDetails: {
        screen: CompanyDetailsScreen
    },
},
    headerSetting
);

const ContactUsStackNavigator = createStackNavigator({
    Contactus: { screen: ContactUsScreen, }
},
    headerSetting
);


const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStackNavigator,
    },
    Contactus: {
        screen: ContactUsStackNavigator,
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
            <DrawerNavigator />
        );
    }
}

export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);