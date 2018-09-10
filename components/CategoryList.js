import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation';

import Category from './Category.js'



class CategoryList extends Component {
   state = {
      names: this.buildExampleCategoryList()
   }

   buildExampleCategoryList() {
   	  categories = [];
   	  for (counter=0; counter<31; counter++) {
   	  	categories.push({id: counter, name: 'Category' + counter})
   	  }
   	  return categories;
   }

   categoryGrouping(categories) {

   		categoryGroups = [];
		for (var counter=0; counter<categories.length; counter=counter+3) {
			displayCatgories = [];
			displayCatgories.push(categories[counter]);
			displayCatgories.push(categories[counter+1]);
			displayCatgories.push(categories[counter+2]);
			categoryGroups.push(displayCatgories);
		}

		return categoryGroups;
   }

   categoryGroupsRenderer(category) {
   		if (category != undefined) {
   			return  (<Category
	            	uri={{uri: 'https://facebook.github.io/react/logo-og.png'}}
	            	imagestyle={styles.image}
	            	textstyle={styles.text}
	            	name={category.name}
	            	navigation={this.props.navigation}
	              />
	            );
   		}

   		return null;

   }

   render() {
      return (
         <View>
            {
				this.categoryGrouping(this.state.names).map((item, index) => (
                  <View
                     key = {item[0].id}
                     style = {styles.container}
                     >
                     {this.categoryGroupsRenderer(item[0])}
                     {this.categoryGroupsRenderer(item[1])}
                     {this.categoryGroupsRenderer(item[2])}
                  </View>
               ))

            }
         </View>
      )
   }
}

export default CategoryList

const styles = StyleSheet.create ({
   container: {
      padding: 30,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   text: {
      color: '#4f603c',
      textAlign: 'center'
   },
   image: {
   	  width: 50,
   	  height: 50
   }
})