import React, {Component} from 'react'
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

class Company extends Component {

    GoToDetails = () => {
        this.props.navigation.navigate('CompanyDetails', {
                company: this.props.company
            }
        )
    }

    render() {
        return (
            <TouchableOpacity style={cstyles.card} onPress={() => this.GoToDetails({})}>
                <Image source={this.props.uri}
                       style={cstyles.image}
                />
                <Text style={cstyles.text}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Company

const cstyles = StyleSheet.create({
    text: {
        color: '#4f603c',
        textAlign: 'center',
    },
    image: {
        width: 140,
        height: 140
    },
    card: {
        width: 145,
        height: 160,
        marginTop: 10,
    },
})

