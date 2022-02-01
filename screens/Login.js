import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import { theme } from "../components/theme";
import LayOut from "../components/LayOut";

const Login = ({ navigation }) => {
    const [status, setStatus] = useState("signup");
    return (
        <LayOut navigation={navigation}>
            <View style={styles.container}>
                {status === "login" ? (
                    <LoginForm setStatus={setStatus} />
                ) : (
                    <SignUpForm setStatus={setStatus} />
                )}
            </View>
        </LayOut>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
