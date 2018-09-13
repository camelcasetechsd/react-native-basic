import React, { Component } from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'

class Company extends Component {

   GoToDetails = () => {
      this.props.navigation.navigate('CompanyDetails')
   }

   render() {
      return (
          <TouchableOpacity style={cstyles.card} onPress={() => this.GoToDetails({})}>
    			   <Image source={this.props.uri}
    			     style={cstyles.image}
    			   />
             <Text style={cstyles.text} >
                {this.props.name}
             </Text>
          </TouchableOpacity>
      )
   }
}

export default Company

const cstyles = StyleSheet.create({
    text: {
        width: 100,
        color: '#4f603c',
        textAlign: 'center',
        flex: 1,
        flexWrap: 'wrap',
    },
    image: {
        width: 100,
        height: 100
    },
    card: {
        padding: 5,
        marginTop: 5,
        marginRight: 7,
        backgroundColor: '#d9f9b1',
    },
})