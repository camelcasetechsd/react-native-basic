import React, { Component } from 'react'
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native'
import CategoryList from './CategoryList.js'
import HumburgerIcon from "./HumburgerIcon";
import { red } from 'ansi-colors';

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            headerTitle: 'Home'.toUpperCase(),
            headerLeft: <HumburgerIcon navigation={navigation}/>
        }
    }
    render() {
        return (
            <ScrollView>
                <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                    style={{ width: '100%', height: 200 }}
                />
                <CategoryList navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'red',
    },
});