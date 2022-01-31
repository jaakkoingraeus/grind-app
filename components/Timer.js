import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "./theme";
import Time from "./Time";

const Timer = ({
    hours,
    minutes,
    seconds,
    timerStatus,
    setTimerStatus,
    cancelTimer,
}) => {
    return (
        <View style={styles.container}>
            <Time hours={hours} minutes={minutes} seconds={seconds} />
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
