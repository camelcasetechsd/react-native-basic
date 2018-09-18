import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {Icon, Button, Container, Content, Header, Left, Right} from 'native-base'
import {DrawerActions} from "react-navigation";

class HeaderComponent extends Component {
    render() {
        return (
            <Header style={{height: 75,}}>
                <Right style={{marginTop: 25, marginRight: 10}}>
                    <Icon name="ios-menu"
                          onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </Right>
            </Header>
        )
    }
}

export default HeaderComponent