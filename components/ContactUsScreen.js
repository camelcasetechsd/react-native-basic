import React from 'react'
import { View, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HumburgerIcon from "./HumburgerIcon";

class ContactUsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Contact Us",
            headerRight: null,
            headerLeft: <HumburgerIcon navigation={navigation}/>,
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