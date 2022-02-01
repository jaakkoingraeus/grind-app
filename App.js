import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import Companies from "./screens/Companies";
import DashBoard from "./screens/DashBoard";
import Login from "./screens/Login";
import Profile from "./screens/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
    const [timer, setTimer] = useState(0);
    const [timerStatus, setTimerStatus] = useState(false);

    useEffect(() => {
        let interval = null;
        if (timerStatus)
            interval = setInterval(() => setTimer((timer) => timer + 1), 500);
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [timerStatus]);

    const cancelTimer = () => {
        Alert.alert(
            "Stop timer",
            "Are you sure you want to stop your work timer?",
            [
                {
                    text: "Stop",
                    onPress: () => {
                        setTimerStatus(false);
                        setTimer(0);
                    },
                },
                {
                    text: "Cancel",
                },
            ]
        );
    };
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="dashboard" component={DashBoard} />
                <Stack.Screen name="settings" component={Profile} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="companies" component={Companies} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
