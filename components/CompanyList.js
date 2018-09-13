import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, SectionList, ScrollView} from 'react-native'
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
                    key={company.id}
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
            <ScrollView>
                <View style={cstyles.container}>
                    {
                    companiesData.map((item, index) => (
                        <View key={item.id} style={cstyles.card}>
                            {this.companyGroupsRenderer(item)}
                        </View>
                    ))
                    }
                </View>
            </ScrollView>
        )
    }
}

export default CompanyList

const cstyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        padding: 5,
        marginTop: 5,
        marginRight: 7,
        backgroundColor: '#d9f9b1',
    },
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
    }
})