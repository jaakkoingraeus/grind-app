import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "./TopBar";
import ControlBar from "./ControlBar";

const LayOut = ({ children }) => {
    return (
        <View style={styles.container}>
            <TopBar />
            {children}
            <ControlBar />
        </View>
    );
};

export default LayOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
    },
});
