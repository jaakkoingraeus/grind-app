import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./theme";

const UserStats = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Jaakko Ingraeus</Text>
            <Text style={styles.company}>Reaktor</Text>
            <View style={styles.statBox}>
                <Text style={styles.hoursText}>Total hours: </Text>
                <Text style={styles.hours}>14.3</Text>
            </View>
        </View>
    );
};

export default UserStats;

const styles = StyleSheet.create({
    container: {
        marginVertical: theme.margin.lg,
        marginHorizontal: theme.margin.md,
    },
    name: {
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.textPrimary,
    },
    company: {
        fontSize: theme.fontSizes.md,
        marginBottom: theme.margin.md,
        color: theme.colors.textSecondary,
    },
    statBox: {
        display: "flex",
        flexDirection: "row",
    },
    hoursText: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.textSecondary,
    },
    hours: {
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeight.semibold,
    },
});
