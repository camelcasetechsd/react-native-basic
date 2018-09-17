import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation';

class Category extends Component {

    GoToCompanyList = () => {
        this.props.navigation.navigate('CompanyList', {
                categoryId: this.props.category.id,
                categoryName: this.props.category.name,
            }
        )
    }

    render() {
        return (
            <TouchableOpacity key={this.props.category.id} style={styles.card} onPress={() => this.GoToCompanyList({})}>
                <Image source={this.props.uri} style={styles.image}/>
                <Text style={styles.text}>
                    {this.props.category.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Category

const styles = StyleSheet.create({
    text: {
        color: '#4f603c',
        textAlign: 'center'
    },
    image: {
        width: 85,
        height: 85
    },
    card: {
        width: 85,
        height: 120,
        marginTop: 5,
    },
})

