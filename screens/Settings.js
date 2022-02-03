import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../components/theme";
import StatView from "../components/StatView";
import LayOut from "../components/LayOut";

const Settings = ({ navigation, route }) => {
    return (
        <LayOut navigation={navigation} route={route}>
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <View style={styles.settings}>
                    <StatView
                        label="Name: "
                        value="Jaakko Ingraeus"
                        style={{ marginBottom: theme.margin.sm }}
                    />
                    <StatView
                        label="Email: "
                        value="jaakko@nacu.fi"
                        style={{ marginBottom: theme.margin.sm }}
                    />
                    <Pressable
                        onPress={() =>
                            Alert.alert("You tried to change password")
                        }
                    >
                        <Text style={styles.buttonText}>Change password</Text>
                    </Pressable>
                </View>
            </View>
        </LayOut>
    );
};

export default Settings;

const styles = StyleSheet.create({
    buttonText: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.textSecondary,
        textDecorationLine: "underline",
        marginTop: theme.margin.md,
    },
    container: {
        flex: 1,
    },
    title: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeight.semibold,
        marginLeft: theme.margin.md,
        marginTop: theme.margin.lg,
    },
    settings: {
        marginVertical: theme.margin.md,
        marginHorizontal: theme.margin.lg,
        marginTop: theme.margin.lg,
    },
});
