import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation';

import Company from './Company.js'



class CompanyList extends Component {
   state = {
      names: this.buildExampleCompanyList()
   }

   buildExampleCompanyList() {
   	  companies = [];
   	  for (counter=0; counter<31; counter++) {
   	  	companies.push({id: counter, name: 'Company' + counter})
   	  }
   	  return companies;
   }

   companyGrouping(companies) {

   	companyGroups = [];
		for (var counter=0; counter<companies.length; counter=counter+2) {
			displayCompanies = [];
			displayCompanies.push(companies[counter]);
			displayCompanies.push(companies[counter+1]);
			companyGroups.push(displayCompanies);
		}

		return companyGroups;
   }

   companyGroupsRenderer(company) {
   		if (company != undefined) {
   			return  (<Company
	            	uri={{uri: 'https://facebook.github.io/react/logo-og.png'}}
	            	imagestyle={cstyles.image}
	            	textstyle={cstyles.text}
	            	name={company.name}
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
				this.companyGrouping(this.state.names).map((item, index) => (
                  <View
                     key = {item[0].id}
                     style = {cstyles.container}
                     >
                     {this.companyGroupsRenderer(item[0])}
                     {this.companyGroupsRenderer(item[1])}
                  </View>
               ))
            }
         </View>
      )
   }
}

export default CompanyList

const cstyles = StyleSheet.create ({
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
   	  width: 100,
   	  height: 100
   }
})