import React, {Component} from 'react'
import {ScrollView, Image} from 'react-native'
import {Container, Content} from 'native-base'
import CategoryList from './CategoryList.js'
import HeaderComponent from './HeaderComponent'

class HomeScreen extends React.Component {

    render() {
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation}/>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ScrollView>
                        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                               style={{width: '100%', height: 200}}
                        />
                        <CategoryList navigation={this.props.navigation}/>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen
