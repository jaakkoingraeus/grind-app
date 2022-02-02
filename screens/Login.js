import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import LayOut from "../components/LayOut";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { UserContext } from "../contexts/user";

const Login = ({ navigation }) => {
    const [status, setStatus] = useState("signup");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const userContext = useContext(UserContext);

    const auth = getAuth();

    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                userContext.setUser(userCredential.user);
                setEmail("");
                setPassword("");
                console.log("Logged in as: ", userContext.user.email);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                //Signed in
                userContext.setUser(userCredentials.user);
                setEmail("");
                setPassword("");
                console.log("Signed up");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <LayOut navigation={navigation}>
            <View style={styles.container}>
                {status === "login" ? (
                    <LoginForm
                        setStatus={setStatus}
                        login={logIn}
                        password={password}
                        setPassword={setPassword}
                        email={email}
                        setEmail={setEmail}
                    />
                ) : (
                    <SignUpForm
                        setStatus={setStatus}
                        signUp={signUp}
                        password={password}
                        setPassword={setPassword}
                        email={email}
                        setEmail={setEmail}
                    />
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
