import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "./theme";

const Time = ({ hours, seconds, minutes }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.time, styles.hours]}>
                {hours > 0 && `${hours}:`}
            </Text>
            <Text style={[styles.time, styles.minutes]}>
                {(minutes || hours) > 0 && `${minutes}:`}
            </Text>
            <Text style={[styles.time, styles.seconds]}>{seconds}</Text>
        </View>
    );
};

export default Time;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    time: {
        fontSize: 96,
        textAlign: "center",
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.textPrimary,
        marginBottom: theme.margin.xl,
    },
    seconds: {
        color: theme.colors.textSecondary,
    },
});
