import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../components/theme";

const DashBoard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>Jaakko Ingraeus</Text>
        </View>
    );
};

export default DashBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
    username: {
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeight.bold,
        color: theme.colors.accent,
        marginHorizontal: theme.margin.md,
        marginVertical: theme.margin.md,
    },
});
