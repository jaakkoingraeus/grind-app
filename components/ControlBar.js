import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faSignOutAlt,
    faClock,
    faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../contexts/user";

const ControlBar = ({ navigation }) => {
    const userContext = useContext(UserContext);

    const logOut = () => {
        Alert.alert("Log out", "Are you sure you want to log out?", [
            {
                text: "Log out",
                onPress: () => userContext.setUser(null),
                style: "cancel",
            },
            {
                text: "Cancel",
            },
        ]);
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={() => logOut()}>
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={styles.icon}
                    size={theme.iconSizes.md}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Main")}>
                <FontAwesomeIcon
                    icon={faClock}
                    style={styles.icon}
                    size={theme.iconSizes.md}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Settings")}>
                <FontAwesomeIcon
                    icon={faUserCog}
                    style={styles.icon}
                    size={theme.iconSizes.md}
                />
            </Pressable>
        </View>
    );
};

export default ControlBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bgSecondary,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexDirection: "row",
        paddingBottom: theme.margin.md,
    },
    icon: {
        color: theme.colors.secondary,
        marginHorizontal: theme.margin.lg,
        marginTop: theme.margin.md,
        marginBottom: theme.margin.lg,
    },
});
