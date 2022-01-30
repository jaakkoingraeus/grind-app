import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../components/theme";
import UserStats from "../components/UserStats";
import Timer from "../components/Timer";

const DashBoard = () => {
    return (
        <View style={styles.container}>
            <UserStats />
            <Timer />
        </View>
    );
};

export default DashBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
});
