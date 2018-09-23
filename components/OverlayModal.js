import React, { Component } from 'react'
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Overlay from 'react-native-modal-overlay'
import { createStackNavigator } from 'react-navigation';
class OverlayModal extends Component {

    state = {
        overlayVisible: false
    }

    GoToCompanyList = () => {
        let myFirstPromise = new Promise((resolve, reject) => {
            this.hideOverlay();
            resolve("Success!"); // Yay! Everything went well!
        });

        myFirstPromise.then((successMessage) => {
            this.props.navigation.navigate('CompanyList', {
                categoryId: this.props.categoryId,
                categoryName: this.props.categoryName,
            })
        });

    }

    hideOverlay = () => {
        this.setState({ overlayVisible: false })
        this.state.overlayVisible = false
        console.log(this.state.overlayVisible)
    }

    static getDerivedStateFromProps(props, state) {
        return {
            overlayVisible: props.showOverlay
        };
    }

    render() {
        return (
            <Overlay visible={this.state.overlayVisible}
                onClose={this.hideOverlay}
                closeOnTouchOutside={true}
                animationType="zoomIn"
                childrenWrapperStyle={styles.childrenWrapperStyle}
            >
                <TouchableOpacity>
                    <Image source={require('./icons/openBook.png')}
                    />
                    <Text>Information</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.GoToCompanyList()}
                    style={{ marginTop: 50, }}>
                    <Image source={require('./icons/list.png')}
                    />
                    <Text>Companies</Text>
                </TouchableOpacity>

            </Overlay>
        )
    }
}

export default OverlayModal

const styles = StyleSheet.create({
    childrenWrapperStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    }
})