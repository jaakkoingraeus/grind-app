import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faSignOutAlt,
    faClock,
    faUserCog,
} from "@fortawesome/free-solid-svg-icons";

const ControlBar = () => {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                icon={faSignOutAlt}
                style={styles.icon}
                size={theme.iconSizes.md}
            />
            <FontAwesomeIcon
                icon={faClock}
                style={styles.icon}
                size={theme.iconSizes.md}
            />
            <FontAwesomeIcon
                icon={faUserCog}
                style={styles.icon}
                size={theme.iconSizes.md}
            />
        </View>
    );
};

export default ControlBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bgSecondary,
        height: theme.constants.bottomBarHeight,
        paddingBottom: theme.margin.md,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    icon: {
        color: theme.colors.secondary,
        margin: theme.margin.lg,
    },
});
