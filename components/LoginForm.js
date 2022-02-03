import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { theme } from "./theme";
import SubmitButton from "./SubmitButton";

const LoginForm = ({
    setStatus,
    login,
    password,
    setPassword,
    email,
    setEmail,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log in</Text>
            <View style={styles.form}>
                <View>
                    <Text style={styles.inputLabel}>Email</Text>
                    <View style={styles.inputField}>
                        <TextInput
                            style={styles.textInput}
                            value={email}
                            placeholder="Enter email"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Password</Text>
                        <View style={styles.inputField}>
                            <TextInput
                                style={styles.textInput}
                                value={password}
                                secureTextEntry={true}
                                placeholder="Enter password"
                                onChangeText={(password) =>
                                    setPassword(password)
                                }
                            />
                        </View>
                    </View>
                </View>
                <SubmitButton onPress={() => login(email, password)}>
                    Log in
                </SubmitButton>
                <Pressable
                    style={styles.changeStatus}
                    onPress={() => setStatus("signup")}
                >
                    <Text style={styles.changeStatusText}>Create user</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginForm;

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
        marginHorizontal: theme.margin.md,
        marginTop: theme.margin.lg,
    },
    inputLabel: {
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.textSecondary,
        marginBottom: theme.margin.sm,
    },
    inputField: {
        backgroundColor: theme.colors.bgSecondary,
        borderRadius: theme.borderRadius.sm,
        marginBottom: theme.margin.lg,
    },
    textInput: {
        paddingHorizontal: theme.padding.inputHorizontal,
        paddingVertical: theme.padding.inputVertical,
    },
    changeStatus: {
        marginTop: theme.margin.md,
    },
    changeStatusText: {
        textDecorationLine: "underline",
    },
});
