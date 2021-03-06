import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress= {props.onPress}>
            <View style={styles.leftContainer}>
                {!!props.imageUrl && (<Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: props.imageUrl }}
                />
                )}
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    {props.title}
                </Text>
                <Text style={styles.subText}>
                    {props.author}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: "row"
    },
    leftContainer: {
        width: 100,
    },
    rightContainer: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 12,
        color: 'gray',
    }
});

export default ListItem;