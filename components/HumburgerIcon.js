import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { DrawerActions } from "react-navigation";

class HumburgerIcon extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
                <Text style={style.text}></Text>
                <Text style={style.text}></Text>
                <Text style={style.text}></Text>
            </TouchableOpacity>
        );
    }
}

export default HumburgerIcon

const style = StyleSheet.create({
    text: {
        width: 20,
        height: 3,
        backgroundColor: '#ffffff',
        marginTop: 5,
        marginLeft: 17,
    },
})