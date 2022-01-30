import { StyleSheet } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";

import LayOut from "./components/LayOut";
import DashBoard from "./views/DashBoard";
import Login from "./views/Login";
import Profile from "./views/Settings";

export default function App() {
    return (
        <NativeRouter>
            <LayOut>
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="/settings" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </LayOut>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({});
