import React from 'react'
import {View, Image, Text} from 'react-native'
import {Container, Content} from 'native-base'
import HeaderComponent from './HeaderComponent'

class ContactUsScreen extends React.Component {
    render() {
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation}/>
                <Content>
                        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                               style={{width: '100%', height: 200}}
                        />
                        <View><Text>Contact Us</Text></View>
                </Content>
            </Container>
        );
    }
}

export default ContactUsScreen