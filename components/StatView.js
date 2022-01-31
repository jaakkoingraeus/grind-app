import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./theme";

const StatView = ({ label, value, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

export default StatView;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    label: {
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.textSecondary,
    },
    value: {
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.textPrimary,
    },
});
