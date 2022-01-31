import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../components/theme";
import UserStats from "../components/UserStats";
import Timer from "../components/Timer";

const DashBoard = (props) => {
    return (
        <View style={styles.container}>
            <UserStats />
            <Timer
                hours={props.hours}
                minutes={props.minutes}
                seconds={props.seconds}
                timerStatus={props.timerStatus}
                setTimerStatus={props.setTimerStatus}
                cancelTimer={props.cancelTimer}
            />
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
