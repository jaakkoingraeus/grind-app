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
        textLight: "#C0C5CB",
        light: "#f9fafb",
        white: "#FFF",
    },
    fontSizes: {
        iconSm: 10,
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
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 48,
        xxxl: 72,
    },
    padding: {
        buttonHorizontal: 36,
        buttonVertical: 18,
        inputHorizontal: 12,
        inputVertical: 16,
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
        sm: 18,
        md: 25,
        lg: 31,
    },
};
