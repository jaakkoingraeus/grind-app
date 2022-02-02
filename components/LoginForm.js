import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { theme } from "./theme";
import SubmitButton from "./SubmitButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../contexts/user";

const LoginForm = ({ setStatus }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const user = useContext(UserContext);

    const logIn = () => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                user.setUser(userCredential.user);
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                console.log(error);
            });
    };
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
                <SubmitButton onPress={logIn}>Log in</SubmitButton>
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
