import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Category from './Category.js'
import CategoriesData from './json/categories.json' ;


class CategoryList extends Component {


   state = {
      names: CategoriesData
   }

   render() {
      return (
          <ScrollView>
            {
                <View style = {styles.container}>
                {
                    this.state.names.map((item, index) => (
                        <Category
                            uri={{uri: item.image}}
                            category={item}
                            navigation={this.props.navigation}
                            key={item.id}
                        />
                    ))
                }
                </View>
            }
          </ScrollView>
      )
   }
}

export default CategoryList

const styles = StyleSheet.create ({
   container: {
      padding: 20,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
   },
})