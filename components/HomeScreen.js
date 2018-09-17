import React from 'react'
import {View, ScrollView, Image, Button} from 'react-native'
import {createStackNavigator} from 'react-navigation';

import CategoryList from './CategoryList.js'
import CompanyListScreen from './CompanyListScreen.js'
import CompanyDetailsScreen from './CompanyDetailsScreen.js'
import MenuBar from './MenuBar.js'

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: "Home",
            headerRight: <MenuBar/>,
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
            },
        };
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                           style={{width: '100%', height: 200}}
                    />
                    <CategoryList navigation={this.props.navigation}/>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen
