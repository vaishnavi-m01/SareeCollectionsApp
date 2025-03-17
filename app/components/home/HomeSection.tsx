import { useNavigation } from "expo-router";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';


type HomeSectionProps = {
    bgImage: string | number;
    title: string;

}
const HomeSection: React.FC<HomeSectionProps> = ({ bgImage, title }) => {
    const navigation = useNavigation(); // React Navigation hook

    return (
        <ImageBackground
            source={typeof bgImage === "string" ? { uri: bgImage } : bgImage}
            style={style.homeContents}
        >
            {/* <AntDesign name="leftcircle" size={25} color="white" /> */}
            <View style={style.subContent}>
                <Text style={style.title}>{title.replace(/((?:\S+\s+){4})/g, "$1\n")}</Text>
                <TouchableOpacity
                    style={style.shopButton}
                    onPress={() => navigation.navigate("Shop" as never)}>
                    <Text style={style.buttonText}>SHOP NOW</Text>
                </TouchableOpacity>

            </View>
            {/* <View style={style.rightSideCarousel}>
                <AntDesign name="rightcircle" size={24} color="white" />
            </View> */}

        </ImageBackground>

    )

}
export default HomeSection


const style = StyleSheet.create({
    homeContents: {
        padding: 10,
        paddingRight: 30,
        paddingTop: 20,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        backgroundSize: "conver",
        backgroundRepeat: "no-repeat",
    },
    subContent: {
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 15,
        fontWeight: 900,
        color: "white",
        alignItems: "flex-start",
        marginBottom: 20,
    },

    shopButton: {
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        // borderRadius: 5,
        padding: 40,
        alignItems: "flex-start",
        marginRight: 40
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000",
    },
    // rightSideCarousel: {
    //     marginRight: 0,
    //     alignItems: "flex-end",
    //     width: 96
    // }
})