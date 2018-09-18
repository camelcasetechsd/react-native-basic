import React, {Component} from 'react'
import {View, Image, Text} from 'react-native'
import {Icon, Button, Container, Content, Header, Left, Right} from 'native-base'

class ContactUsScreen extends React.Component {
    render() {
        return (
            <Container>
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