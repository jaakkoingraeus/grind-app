import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>GRIND</Text>

            {true && (
                <Pressable
                    onPress={() => console.log("/companies")}
                    style={styles.companySelector}
                >
                    <Text style={styles.companyText}>Nacu Oy</Text>
                    <FontAwesomeIcon
                        style={styles.sortDown}
                        icon={faSortDown}
                    />
                </Pressable>
            )}

            {true && (
                <Pressable
                    onPress={() => console.log("/")}
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
        display: "none",
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
