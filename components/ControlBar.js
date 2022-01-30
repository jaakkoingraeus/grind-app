import { Pressable, StyleSheet, Text, View } from "react-native";
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
            <Pressable>
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={styles.icon}
                    size={theme.iconSizes.md}
                />
            </Pressable>
            <Pressable>
                <FontAwesomeIcon
                    icon={faClock}
                    style={styles.icon}
                    size={theme.iconSizes.md}
                />
            </Pressable>
            <Pressable>
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
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    icon: {
        color: theme.colors.secondary,
        marginHorizontal: theme.margin.lg,
        marginVertical: theme.margin.md,
    },
});
