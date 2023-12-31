import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const IconButton = (props) => {
    const buttonTitle = props.title;
    const buttonIcon = props.icon || "alert-box";

    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={props.activeOpacity || 0.8}
            disabled={props.disabled}
        >
            <View style={props.disabled ? [styles.container, props.style,{backgroundColor:"gray"}] : [styles.container, props.style]} gap={5}>
                <Icon name={buttonIcon} style={styles.icon} />
                <Text style={styles.text}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
    },
    icon: {
        fontSize: 20,
    },
    text: {
        fontSize: 20,
        color: "black"
    }

})