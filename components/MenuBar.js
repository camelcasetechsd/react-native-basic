import React from "react";
import {StyleSheet, View, Text} from 'react-native'


class MenuBar extends React.Component {
    render() {
        return (
            <View>
                <Text style={style.text}></Text>
                <Text style={style.text}></Text>
                <Text style={style.text}></Text>
            </View>
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
})