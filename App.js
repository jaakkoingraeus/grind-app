import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LayOut from "./components/LayOut";
import DashBoard from "./views/DashBoard";

export default function App() {
    return (
        <LayOut>
            <DashBoard />
        </LayOut>
    );
}

const styles = StyleSheet.create({});
