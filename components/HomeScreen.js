import React from 'react'
import {View, ScrollView, Image} from 'react-native'
import CategoryList from './CategoryList.js'
import {Icon, Button, Container, Content, Header, Left} from 'native-base'

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: "Home",
        };
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        />
                    </Left>
                </Header>
                <Content>
                    <View>
                        <ScrollView>
                            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                                   style={{width: '100%', height: 200}}
                            />
                            <CategoryList navigation={this.props.navigation}/>
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen
