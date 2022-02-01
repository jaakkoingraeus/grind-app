import { StyleSheet, View } from "react-native";
import React from "react";
import UserStats from "../components/UserStats";
import Timer from "../components/Timer";
import LayOut from "../components/LayOut";

const DashBoard = ({ navigation }) => {
    return (
        <LayOut navigation={navigation}>
            <View style={styles.container}>
                <UserStats />
                <Timer hours={2} minutes={45} seconds={6} timerStatus={false} />
            </View>
        </LayOut>
    );
};

export default DashBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
});
