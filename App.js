import { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";

import LayOut from "./components/LayOut";
import Companies from "./views/Companies";
import DashBoard from "./views/DashBoard";
import Login from "./views/Login";
import Profile from "./views/Settings";

export default function App() {
    const [timer, setTimer] = useState(0);
    const [timerStatus, setTimerStatus] = useState(false);

    useEffect(() => {
        let interval = null;
        if (timerStatus)
            interval = setInterval(() => setTimer((timer) => timer + 1), 1000);
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
        <NativeRouter>
            <LayOut>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DashBoard
                                timer={timer}
                                setTime={setTimer}
                                cancelTimer={cancelTimer}
                                timerStatus={timerStatus}
                                setTimerStatus={setTimerStatus}
                            />
                        }
                    />
                    <Route path="/settings" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/companies" element={<Companies />} />
                </Routes>
            </LayOut>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({});
