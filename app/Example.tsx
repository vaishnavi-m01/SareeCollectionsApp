import { Text, View,StyleSheet } from "react-native"

const Example =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Login Successfully😎</Text>
        </View>
    )
}
export default Example

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF"
    },
    label:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        color:"green"
    }

})