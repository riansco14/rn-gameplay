import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    check: {
        position: 'absolute',
        right: 8,
        top: 8,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary70,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3,
        

    },
    checked: {
        position: 'absolute',
        right: 8,
        top: 8,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.primary,
        borderRadius: 3,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15
    }

})
