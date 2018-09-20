import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import ImageSlider from 'react-native-image-slider'
import { Container, Content } from 'native-base'
import HumburgerIcon from './HumburgerIcon'

class CompanyDetailsScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const company = navigation.getParam('company', 'NO-COMPANY');
        return {
            headerTitle: company.name.toUpperCase(),
            headerLeft: <HumburgerIcon navigation={navigation}/>
        };
    }

    state = {
        name: 'Example Company',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        images: [
            'http://placeimg.com/640/480/tech',
            'http://placeimg.com/640/480/tech',
            'http://placeimg.com/640/480/tech'
        ],
        website: 'http://youtube.com'
    }

    render() {
        const { navigation } = this.props;
        const company = navigation.getParam('company', 'NO-COMPANY');
        return (
            <ScrollView>
                <ScrollView style={styles.container}>
                    <ImageSlider style={styles.imageslider} images={this.state.images} />
                    <ScrollView>
                        <Text style={{ color: 'green', textAlign: 'center', fontSize: 24, marginTop: 10 }}>
                            {company.name.toUpperCase()}
                        </Text>
                        <Text style={styles.text}>
                            {company.description}
                        </Text>
                    </ScrollView>
                </ScrollView>
            </ScrollView>
        )
    }
}

export default CompanyDetailsScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    subcontainer: {
        padding: 30,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
        textAlign: 'justify',
        padding: 5,
    },
    imageslider: {
        width: '100%',
        height: 250,
        flex: 0,
    }
})