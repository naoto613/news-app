import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ClipButton = ({onPress, enabled}) => {
    const name = enabled? 'bookmark' : 'bookmark-o';
    return (
        <TouchableOpacity style={styles.container} onPress= {onPress}>
           <FontAwesome name={name} size={40} color="gray" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});

export default ClipButton;