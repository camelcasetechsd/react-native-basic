import React from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Content } from 'native-base'
import HeaderComponent from './HeaderComponent'
import { ScrollView } from 'react-native-gesture-handler';
import MenuBar from './MenuBar';

class ContactUsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Contact Us",
            headerLeft: null,
        };
    }
    render() {
        return (
            <ScrollView>
                <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                    style={{ width: '100%', height: 200 }}
                />
                <View><Text>Contact Us</Text></View>
            </ScrollView>
        );
    }
}

export default ContactUsScreen