import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "./theme";

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [timerStatus, setTimerStatus] = useState(false);

    useEffect(() => {
        let interval = null;
        if (timerStatus)
            interval = setInterval(() => setTimer((timer) => timer + 1), 1000);
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [timerStatus]);
    const cancelTimer = () => {
        Alert.alert(
            "Stop timer",
            "Are you sure you want to stop your work timer?",
            [
                {
                    text: "Stop",
                    onPress: () => {
                        setTimerStatus(false);
                        setTimer(0);
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
            <Text style={styles.time}>{timer}</Text>
            <Pressable
                style={styles.startButton}
                onPress={() => setTimerStatus(!timerStatus)}
            >
                <Text style={styles.grindText}>
                    {timerStatus ? "PAUSE" : "GRIND"}
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
    time: {
        fontSize: 96,
        textAlign: "center",
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.textPrimary,
        transform: [{ scaleY: 1.1 }],
        marginBottom: theme.margin.xl,
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
