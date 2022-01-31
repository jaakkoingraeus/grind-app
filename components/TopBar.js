import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-native";

const TopBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>GRIND</Text>

            {location.pathname === "/" && (
                <Pressable
                    onPress={() => navigate("/companies")}
                    style={styles.companySelector}
                >
                    <Text style={styles.companyText}>Nacu Oy</Text>
                    <FontAwesomeIcon
                        style={styles.sortDown}
                        icon={faSortDown}
                    />
                </Pressable>
            )}

            {location.pathname === "/companies" && (
                <Pressable
                    onPress={() => navigate("/")}
                    style={styles.companySelector}
                >
                    <Text style={styles.companyText}>Nacu Oy</Text>
                    <FontAwesomeIcon style={styles.sortUp} icon={faSortUp} />
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
    sortUp: {
        transform: [{ translateY: 5 }],
        color: theme.colors.secondary,
    },
});
