import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faSignOutAlt,
    faClock,
    faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-native";

const ControlBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Link to="/login">
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                        style={styles.icon}
                        size={theme.iconSizes.md}
                    />
                </Link>
            </Pressable>
            <Pressable>
                <Link to="/">
                    <FontAwesomeIcon
                        icon={faClock}
                        style={styles.icon}
                        size={theme.iconSizes.md}
                    />
                </Link>
            </Pressable>
            <Pressable>
                <Link to="/settings">
                    <FontAwesomeIcon
                        icon={faUserCog}
                        style={styles.icon}
                        size={theme.iconSizes.md}
                    />
                </Link>
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
