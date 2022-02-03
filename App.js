import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, StyleSheet } from "react-native";
import Companies from "./screens/Companies";
import DashBoard from "./screens/DashBoard";
import Login from "./screens/Login";
import Profile from "./screens/Settings";
import { TimerContext } from "./contexts/timer";
import { UserContext } from "./contexts/user";
import useTimer from "./hooks/useTimer";
import { useState } from "react/cjs/react.development";

const Stack = createNativeStackNavigator();

export default function App() {
    const [user, setUser] = useState(null);
    const timer = useTimer();

    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
            <TimerContext.Provider value={timer}>
                <NavigationContainer>
                    <Stack.Navigator>
                        {true ? (
                            <>
                                <Stack.Screen
                                    name="Main"
                                    component={DashBoard}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Settings"
                                    component={Profile}
                                    options={{ headerShown: false }}
                                />

                                <Stack.Screen
                                    name="Companies"
                                    component={Companies}
                                    options={{ headerShown: false }}
                                />
                            </>
                        ) : (
                            <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{ headerShown: false }}
                            />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </TimerContext.Provider>
        </UserContext.Provider>
    );
}

const styles = StyleSheet.create({});
