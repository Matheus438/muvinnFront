import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Head(): React.JSX.Element {
    return(
        <View style={styles.header}>
                <Text style={styles.headerText}>Muvinn</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    header: {
        backgroundColor: '#D5BDAF',
        paddingVertical: 10,
        alignItems: 'center'
    }
});

export default Head