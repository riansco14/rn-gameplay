import { Inter_100Thin } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 94,
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading
    }
})
