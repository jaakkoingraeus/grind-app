import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CompaniesList from "../components/CompaniesList";
import { theme } from "../components/theme";
import LayOut from "../components/LayOut";

const Companies = ({ navigation }) => {
    return (
        <LayOut navigation={navigation}>
            <View style={styles.container}>
                <CompaniesList />
            </View>
        </LayOut>
    );
};

export default Companies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
