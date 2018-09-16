import React from "react";
import {Image} from 'react-native'


class MenuBar extends React.Component {
    render() {
        return (
            <Image
                source={{uri: 'https://png.icons8.com/material/50/000000/menu.png'}}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}

export default MenuBar