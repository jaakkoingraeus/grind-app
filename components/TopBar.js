import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-native";

const TopBar = () => {
    const location = useLocation();
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>GRIND</Text>

            {location.pathname === "/" && (
                <Pressable
                    onPress={() =>
                        Alert.alert("You tried to change the company")
                    }
                    style={styles.companySelector}
                >
                    <Text style={styles.companyText}>Nacu Oy</Text>
                    <FontAwesomeIcon
                        style={styles.sortDown}
                        icon={faSortDown}
                    />
                </Pressable>
            )}
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bgSecondary,
        paddingTop: theme.constants.statusBarHeight,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        color: theme.colors.accent,
        fontWeight: "900",
        fontSize: theme.fontSizes.lg,
        marginLeft: theme.margin.md,
        marginBottom: theme.margin.sm,
    },
    companySelector: {
        display: "flex",
        flexDirection: "row",
        marginRight: theme.margin.md,
        marginBottom: theme.margin.sm,
    },
    companyText: {
        color: theme.colors.secondary,
    },
    sortDown: {
        transform: [{ translateY: -2 }],
        color: theme.colors.secondary,
    },
});
