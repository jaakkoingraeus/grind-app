import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CompaniesList from "../components/CompaniesList";
import { theme } from "../components/theme";

const Companies = () => {
    return (
        <View style={styles.container}>
            <CompaniesList />
        </View>
    );
};

export default Companies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
