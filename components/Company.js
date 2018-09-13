import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'




class Company extends Component {

   GoToDetails = () => {
      this.props.navigation.navigate('CompanyDetails')
   }

   render() {
      return (
          <View onPress={() => this.GoToDetails({})}>
    			   <Image source={this.props.uri}
    			     style={this.props.imagestyle}
    			   />
             <Text style={this.props.textstyle} >
                {this.props.name}
             </Text>
          </View>
      )
   }
}

export default Company