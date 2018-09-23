import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Category from './Category.js'
import CategoriesData from './json/categories.json';
import OverlayModal from './OverlayModal'

class CategoryList extends Component {

    state = {
        names: CategoriesData
    }

    showOverlay(data){
        this.setState({
            showOverlayState: data.showOverlayState,
            selectedCategoryId: data.categoryId,
            selectedCategoryName: data.categoryName
        });

    }

    render() {
        const state = this.state;
        const $this = this;
        return ([
            <ScrollView key='1'>
                {
                    <View style={styles.container}>
                        {
                            this.state.names.map((item, index) => (
                                <Category
                                    uri={{ uri: item.image }}
                                    category={item}
                                    navigation={this.props.navigation}
                                    key={item.id}
                                    showOverlay={(data) => { $this.showOverlay(data)}}
                                />
                            ))
                        }
                    </View>
                }
            </ScrollView>,
            <OverlayModal navigation={this.props.navigation} showOverlay={state.showOverlayState} categoryId={state.selectedCategoryId} categoryName={state.selectedCategoryName} key='2' />
        ]
        )
    }
}

export default CategoryList

const styles = StyleSheet.create({
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