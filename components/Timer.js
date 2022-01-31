import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "./theme";

const Timer = ({ props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.time}>{props.timer}</Text>
            <Pressable
                style={styles.startButton}
                onPress={() => props.setTimerStatus(!props.timerStatus)}
            >
                <Text style={styles.grindText}>
                    {props.timerStatus ? "PAUSE" : "GRIND"}
                </Text>
            </Pressable>
            <Pressable style={styles.addHours}>
                <Text
                    style={styles.addHours}
                    onPress={() => {
                        props.cancelTimer();
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
