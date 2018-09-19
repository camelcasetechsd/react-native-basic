import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { DrawerActions } from "react-navigation";

class MenuBar extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Text style={style.View}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Text style={style.text}></Text>
                <Text style={style.text}></Text>
                <Text style={style.text}></Text>
            </Text>
        );
    }
}

export default MenuBar

const style = StyleSheet.create({
    text: {
        width: 25,
        height: 3,
        backgroundColor: '#ffffff',
        marginTop: 6,
        marginRight: 8,
    },
    View: {
        marginTop: 13
    }
})