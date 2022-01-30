import Constants from "expo-constants";

export const theme = {
    colors: {
        bgPrimary: "#FFF",
        bgSecondary: "lightgray",
        primary: "lightblue",
        secondary: "#3b82f6",
        accent: "#2563eb",
        textPrimary: "#1f2937",
        textSecondary: "#4b5563",
        textLight: "#d1d5db",
        light: "#f9fafb",
    },
    fontSizes: {
        md: 16,
        lg: 24,
        xl: 36,
    },
    fontWeight: {
        normal: "500",
        semibold: "600",
        bold: "700",
    },
    margin: {
        sm: 8,
        md: 16,
        lg: 24,
        xl: 48,
        xxxl: 72,
    },
    padding: {
        buttonHorizontal: 36,
        buttonVertical: 24,
    },
    borderRadius: {
        sm: 5,
        md: 10,
    },
    constants: {
        statusBarHeight: Constants.statusBarHeight,
        bottomBarHeight: 52,
    },
    iconSizes: {
        md: 24,
        lg: 36,
    },
};
