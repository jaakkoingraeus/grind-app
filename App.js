import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import Companies from "./screens/Companies";
import DashBoard from "./screens/DashBoard";
import Login from "./screens/Login";
import Profile from "./screens/Settings";
import { TimerContext } from "./contexts/timer";
import useTimer from "./hooks/useTimer";

const Stack = createNativeStackNavigator();

export default function App() {
    const timer = useTimer();

    const cancelTimer = () => {
        Alert.alert(
            "Stop timer",
            "Are you sure you want to stop your work timer?",
            [
                {
                    text: "Stop",
                    onPress: () => {
                        console.log("Stopped");
                    },
                },
                {
                    text: "Cancel",
                },
            ]
        );
    };
    return (
        <TimerContext.Provider value={timer}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={DashBoard} />
                    <Stack.Screen name="Settings" component={Profile} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Companies" component={Companies} />
                </Stack.Navigator>
            </NavigationContainer>
        </TimerContext.Provider>
    );
}

const styles = StyleSheet.create({});
