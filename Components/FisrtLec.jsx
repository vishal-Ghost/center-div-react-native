import { View,Text, StyleSheet, SafeAreaView, useColorScheme } from "react-native";


const style = StyleSheet.create({
    contTextDark : {
        color : 'black'
    },
    contTextLight : {
        color : 'white'
    },
    container:{
        flex :1,
        alignItems:'center',
        justifyContent:'center'
    }
})

const FirstLec = () =>{
    const colorScheme = useColorScheme()
    return(
        <View style={style.container}>
            <Text style={ colorScheme == 'light'? style.contTextDark : style.contTextLight}>Hello Hi</Text>
            <Text style={ colorScheme == 'light'? style.contTextDark : style.contTextLigh}>Hello Hi</Text>
            <Text style={ colorScheme == 'light'? style.contTextDark : style.contTextLigh}>Hello Hi</Text>
        </View>
    )
}

export default FirstLec