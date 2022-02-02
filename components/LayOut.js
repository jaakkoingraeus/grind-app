import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "./TopBar";
import ControlBar from "./ControlBar";
import Constants from "expo-constants";

const LayOut = ({ navigation, hideNavigation, children }) => {
    return (
        <View style={styles.container}>
            <TopBar />
            {children}
            {!hideNavigation && <ControlBar navigation={navigation} />}
        </View>
    );
};

export default LayOut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        marginTop: Constants.statusBarHeight,
    },
});
