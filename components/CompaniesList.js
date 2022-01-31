import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacityBase,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "./theme";
import CompanyItem from "./CompanyItem";

const COMPANY_DATA = [
    {
        id: "235435234",
        name: "Nacu Oy",
        joined: new Date().getTime(),
        role: "admin",
    },
    {
        id: "235435236",
        name: "Nacu Oy",
        joined: new Date().getTime(),
        role: "admin",
    },
];

const CompaniesList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        setCompanies(COMPANY_DATA);
    }, []);

    const renderCompany = ({ item }) => <CompanyItem company={item} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={companies}
                keyExtractor={(item) => item.id}
                renderItem={(item) => renderCompany(item)}
            />
        </View>
    );
};

export default CompaniesList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: theme.margin.md,
    },
    companyName: {
        color: theme.colors.textPrimary,
    },
});
