import { StyleSheet, Text, View } from "react-native";
import StatView from "./StatView";
import { theme } from "./theme";

const CompanyItem = ({ company }) => (
    <View style={styles.container}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{company.name}</Text>
        </View>
        <StatView label="Role: " value={company.role} />
    </View>
);

export default CompanyItem;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.margin.md,
        marginBottom: theme.margin.md,
    },
    title: {
        fontWeight: theme.fontWeight.semibold,
        fontSize: theme.fontSizes.md,
        marginBottom: theme.margin.xs,
    },
    titleWrapper: {
        borderBottomColor: theme.colors.textLight,
        borderBottomWidth: 1,
    },
});
