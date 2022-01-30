import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./theme";

const SignUpForm = ({ setStatus }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.form}>
                <Pressable onPress={() => setStatus("login")}>
                    <Text>Already a user? Log in</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignUpForm;

const styles = StyleSheet.create({
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
    form: {
        marginHorizontal: theme.margin.lg,
        marginTop: theme.margin.xl,
    },
});
