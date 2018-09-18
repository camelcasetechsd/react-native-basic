import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {
    createDrawerNavigator
} from 'react-navigation';

import HomeScreen from './components/HomeScreen.js'
import CompanyListScreen from './components/CompanyListScreen.js'
import CompanyDetailsScreen from './components/CompanyDetailsScreen.js'
import ContactUsScreen from './components/ContactUsScreen'
import CustomDrawerContentComponent from './components/CustomDrawerContentComponent'



const MyApp = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Contactus: {
        screen: ContactUsScreen,
    },
    CompanyList: {
        screen: CompanyListScreen
    },
    CompanyDetails: {
        screen: CompanyDetailsScreen
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
            <MyApp/>
        );
    }
}

export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);