import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../components/theme";

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.settings}>
                <View style={styles.settingRow}>
                    <Text style={styles.label}>Name: </Text>
                    <Text style={styles.value}>Jaakko Ingraeus</Text>
                </View>
                <View style={styles.settingRow}>
                    <Text style={styles.label}>Email: </Text>
                    <Text style={styles.value}>jaakko@nacu.fi</Text>
                </View>
                <Pressable
                    onPress={() => Alert.alert("You tried to change password")}
                >
                    <Text style={styles.buttonText}>Change password</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    buttonText: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.textSecondary,
        textDecorationLine: "underline",
        marginTop: theme.margin.md,
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeight.semibold,
        marginLeft: theme.margin.md,
        marginTop: theme.margin.lg,
    },
    settings: {
        marginVertical: theme.margin.md,
        marginHorizontal: theme.margin.lg,
        marginTop: theme.margin.lg,
    },
    settingRow: {
        marginBottom: theme.margin.sm,
        flexDirection: "row",
    },
    label: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.textSecondary,
        fontWeight: theme.fontWeight.semibold,
    },
    value: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeight.semibold,
    },
});
