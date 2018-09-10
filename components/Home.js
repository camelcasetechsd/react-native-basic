import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation';

import CategoryList from './CategoryList.js'
import CompanyList from './CompanyList.js'
import CompanyDetails from './CompanyDetails.js'

class Home extends React.Component {
	render() {
	   return (
	   	  <View>
	   	  	<ScrollView>
		   	  <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
			   style={{width:'100%', height:200}}
			  />
		      <CategoryList navigation={this.props.navigation}/>
		  	</ScrollView>
		  </View>
	   );
	}
}
export default Home
