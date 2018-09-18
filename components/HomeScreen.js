import React from 'react'
import {View, ScrollView, Image} from 'react-native'
import {Icon, Button, Container, Content, Header, Left, Right} from 'native-base'
import CategoryList from './CategoryList.js'

class HomeScreen extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Right>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        />
                    </Right>
                </Header>
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
