import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { theme } from "./theme";
import SubmitButton from "./SubmitButton";
import { app as firebaseApp } from "../firebase";

const SignUpForm = ({
    setStatus,
    password,
    setPassword,
    email,
    setEmail,
    signUp,
}) => {
    const [username, setUsername] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.form}>
                <View>
                    <Text style={styles.inputLabel}>Username</Text>
                    <View style={styles.inputField}>
                        <TextInput
                            style={styles.textInput}
                            value={username}
                            placeholder="Enter username"
                            onChangeText={(username) => setUsername(username)}
                        />
                    </View>
                </View>
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
                <SubmitButton onPress={signUp}>Sign up</SubmitButton>
                <Pressable
                    style={styles.changeStatus}
                    onPress={() => setStatus("login")}
                >
                    <Text style={styles.changeStatusText}>
                        Already a user? Log in
                    </Text>
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
