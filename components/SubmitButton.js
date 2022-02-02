import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { theme } from "./theme";

const SubmitButton = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.accent,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.borderRadius.sm,
    },
    text: {
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.light,
        paddingHorizontal: theme.padding.buttonHorizontal,
        paddingVertical: theme.padding.buttonVertical,
    },
});
