import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 26 + getStatusBarHeight(),
        marginBottom: 42
    },
    content: {
        marginTop: 42
    },
    flatlistMatches: {
        marginTop: 24,
        marginLeft:24
    }

})
