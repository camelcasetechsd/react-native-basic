import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
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
                        <Company
                            uri={{uri: item.image}}
                            name={item.name}
                            navigation={this.props.navigation}
                            key={item.id}
                        />
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})