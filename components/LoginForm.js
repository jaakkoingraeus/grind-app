import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./theme";

const LoginForm = ({ setStatus }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login page</Text>
            <View style={styles.form}>
                <Pressable onPress={() => setStatus("signup")}>
                    <Text>New user? Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    title: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeight.semibold,
        marginLeft: theme.margin.md,
        marginTop: theme.margin.lg,
    },
    form: {
        marginHorizontal: theme.margin.lg,
        marginTop: theme.margin.xl,
    },
});
