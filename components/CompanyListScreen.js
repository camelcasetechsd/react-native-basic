import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import Company from './Company.js'
import CompaniesData from './json/companies.json'
import {Container, Content} from 'native-base'
import HeaderComponent from './HeaderComponent'

class CompanyListScreen extends Component {
    state = {
        names: CompaniesData
    }

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: params.categoryName,
        };
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
            <Container>
                <HeaderComponent navigation={this.props.navigation}/>
                <Content>
                    <ScrollView>
                        <View style={cstyles.container}>
                            {
                                companiesData.map((item, index) => (
                                    <Company
                                        uri={{uri: item.image}}
                                        name={item.name}
                                        company={item}
                                        navigation={this.props.navigation}
                                        key={item.id}
                                    />
                                ))
                            }
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

export default CompanyListScreen

const cstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})