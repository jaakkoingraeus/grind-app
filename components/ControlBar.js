import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faSignOutAlt,
    faClock,
    faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../contexts/user";

const ControlBar = ({ navigation, route }) => {
    const userContext = useContext(UserContext);
    const [currentRoute, setCurrentRoute] = useState(null);

    useEffect(() => {
        setCurrentRoute(route.name);
    });
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
            <Pressable style={styles.wrapper} onPress={() => logOut()}>
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={styles.icon}
                    size={theme.iconSizes.md}
                />
                <Text style={styles.text}>Log out</Text>
            </Pressable>
            <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("Main")}
            >
                <FontAwesomeIcon
                    icon={faClock}
                    style={
                        currentRoute === "Main"
                            ? [styles.icon, styles.active]
                            : styles.icon
                    }
                    size={theme.iconSizes.md}
                />
                <Text
                    style={
                        currentRoute === "Main"
                            ? [styles.text, styles.active]
                            : styles.text
                    }
                >
                    Dashboard
                </Text>
            </Pressable>
            <Pressable
                style={styles.wrapper}
                onPress={() => navigation.navigate("Settings")}
            >
                <FontAwesomeIcon
                    icon={faUserCog}
                    style={
                        currentRoute === "Settings"
                            ? [styles.icon, styles.active]
                            : styles.icon
                    }
                    size={theme.iconSizes.md}
                />
                <Text
                    style={
                        currentRoute === "Settings"
                            ? [styles.text, styles.active]
                            : styles.text
                    }
                >
                    Settings
                </Text>
            </Pressable>
        </View>
    );
};

export default ControlBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 34,
        height: 83,
    },
    icon: {
        color: theme.colors.textLight,
    },
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: theme.fontSizes.iconSm,
        color: theme.colors.textLight,
    },
    active: {
        color: theme.colors.secondary,
    },
});
