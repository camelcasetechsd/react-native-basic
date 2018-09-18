import React, {Component} from 'react'
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import {DrawerActions} from "react-navigation";

class HeaderComponent extends Component {

    render() {
        const {navigation} = this.props;
        const HeaderTitle = this.props.HeaderTitle;
        return (
            <Header style={{height: 75}}>
                <Right>
                    <Icon style={{marginTop: 25}} name="ios-menu"
                          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </Right>
                <Body>
                    <Title>{HeaderTitle}</Title>
                </Body>
                <Left/>
            </Header>
        )
    }
}

export default HeaderComponent