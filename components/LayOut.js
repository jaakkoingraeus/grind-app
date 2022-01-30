import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "./TopBar";

const LayOut = ({ children }) => {
    return (
        <View style={styles.container}>
            <TopBar />
            {children}
        </View>
    );
};

export default LayOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
