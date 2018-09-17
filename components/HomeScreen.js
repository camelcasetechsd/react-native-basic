import React from 'react'
import {View, ScrollView, Image} from 'react-native'
import CategoryList from './CategoryList.js'

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: "Home",
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
