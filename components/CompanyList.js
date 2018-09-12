import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import {createStackNavigator} from 'react-navigation';

import Company from './Company.js'
import CompaniesData from './json/companies.json' ;


class CompanyList extends Component {
    state = {
        names: CompaniesData
    }

    companyGrouping(companies, categoryId) {

        let companyGroups = null;
        companies.map(function (item) {
            if (categoryId === item.id) {
                companyGroups = item.companies;
            }
        });

        return companyGroups;
    }

    companyGroupsRenderer(company) {
        if (company != undefined) {
            return (<Company
                    uri={{uri: company.image}}
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
        /* 2. Get the param, provide a fallback value if not available */
        const {navigation} = this.props;
        const categoryId = navigation.getParam('categoryId', 'NO-ID');
        const companiesData = this.companyGrouping(this.state.names, categoryId);
        return (
            <View style={{flexDirection: 'row', flex: 1}}>
                {
                    companiesData.map((item, index) => (
                        <View
                            style={cstyles.container}
                            key={item.id}
                        >
                            {this.companyGroupsRenderer(item)}
                        </View>
                    ))
                }
            </View>
        )
    }
}

export default CompanyList

const cstyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 30,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
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