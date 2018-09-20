import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Overlay from 'react-native-modal-overlay'
import { createStackNavigator } from 'react-navigation';
class OverlayModal extends Component {

    state = {
        overlayVisible: false
    }

    GoToCompanyList = () => {
        this.setState({ overlayVisible: false })
        this.props.navigation.navigate('CompanyList', {
            categoryId: this.props.categoryId,
            categoryName: this.props.categoryName,
        }
        )
    }

    render() {
        return (
            <Overlay visible={this.props.showOverlay}
                closeOnTouchOutside animationType="zoomIn"
                containerStyle={{ backgroundColor: 'rgba(37, 8, 10, 0.78)' }}
                childrenWrapperStyle={{ backgroundColor: '#eee' }}
                animationDuration={500}>
                <TouchableOpacity>
                    <Button 
                    onPress={() => this.GoToCompanyList()}
                    title='Companies' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Button title='Information' 
                    onPress={() => this.GoToCompanyList()}/>
                </TouchableOpacity>
            </Overlay>
        )
    }
}

export default OverlayModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    Button:{
        width: 100,
        height: 100,
        borderStyle: 'solid',
    }
})