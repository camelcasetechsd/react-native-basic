import React, {Component} from 'react'
import {View, ScrollView, Image} from 'react-native'
import {Icon, Button, Container, Content, Header, Left, Right} from 'native-base'

class ContactUsScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ScrollView>
                        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                               style={{width: '100%', height: 200}}
                        />
                        <Text>Contact Us</Text>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

export default ContactUsScreen