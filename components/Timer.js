import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React, { useContext, useEffect } from "react";
import { theme } from "./theme";
import Time from "./Time";
import { TimerContext } from "../contexts/timer";

const Timer = ({}) => {
    const timer = useContext(TimerContext);

    const cancelTimer = () => {
        Alert.alert(
            "Stop timer",
            "Are you sure you want to stop your work timer?",
            [
                {
                    text: "Stop",
                    onPress: () => {
                        timer.reset();
                    },
                },
                {
                    text: "Cancel",
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Time hours={0} minutes={0} seconds={timer.time} />
            <Pressable
                style={styles.startButton}
                onPress={() => timer.toggle()}
            >
                <Text style={styles.grindText}>
                    {timer.status ? "PAUSE" : "GRIND"}
                </Text>
            </Pressable>
            <Pressable style={styles.addHours}>
                <Text
                    style={styles.addHours}
                    onPress={() => {
                        cancelTimer();
                    }}
                >
                    Cancel timer
                </Text>
            </Pressable>
        </View>
    );
};

export default Timer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
    },
    startButton: {
        backgroundColor: theme.colors.accent,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: theme.margin.lg,
        paddingVertical: theme.padding.buttonVertical,
        borderRadius: theme.borderRadius.sm,
    },
    grindText: {
        fontSize: theme.fontSizes.xl,
        color: theme.colors.light,
        fontWeight: theme.fontWeight.bold,
    },
    addHours: {
        fontSize: theme.fontSizes.md,
        textDecorationLine: "underline",
        fontWeight: theme.fontWeight.semibold,
        textAlign: "center",
        color: theme.colors.textSecondary,
        marginTop: theme.margin.sm,
    },
});
