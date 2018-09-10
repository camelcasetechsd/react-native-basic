import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import ImageSlider from 'react-native-image-slider';

class CompanyDetails extends Component {
   state = {
      name: 'Example Company',
	  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      images: [
	    'http://placeimg.com/640/480/tech',
	    'http://placeimg.com/640/480/tech',
	    'http://placeimg.com/640/480/tech'
	  ],
	  website: 'http://youtube.com'
   }

   render() {
      return (
       <ScrollView style={companystyles.container}>
	        <ImageSlider style={companystyles.imageslider} images={this.state.images}/>
	        <ScrollView>
		         <Text style={{color: '#4f603c', textAlign: 'center'}} >
		            {this.state.name}
		         </Text>
		         <Text style={companystyles.text} >
		            {this.state.description}
		         </Text>
	        </ScrollView>
       </ScrollView>
      )
   }
}

export default CompanyDetails

const companystyles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
   },
   subcontainer: {
      padding: 30,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c',
      textAlign: 'center'
   },
   imageslider: {
   	  width: '100%',
   	  height: 250,
   	  flex: 0
   }
})