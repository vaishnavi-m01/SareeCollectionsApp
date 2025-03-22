import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import CustomCheckIcon from "./CustomCheckIcon";

type ShopReviewProps = {
  name: string;
  reviewText: string;
  date: string;
};

const ShopViewCommand = ({
  name,
  reviewText,
  date,
}: ShopReviewProps) => {
  return (
    <View style={style.shopReviewContainer}>
      <View style={style.starContainer}>
        {[...Array(4)].map((_, index) => (
          <MaterialIcons key={index} name="star" size={24} color="#ffc633" />
        ))}
      </View>
      <View>
        <View style={style.ratingContainer}>
          <Text style={style.userName}>{name}</Text>
          <CustomCheckIcon/>
        </View>
        <Text style={style.reviewText}>{reviewText}</Text>
        <Text style={style.reviewdate}>{date}</Text>
      </View>
    </View>
  );
};

export default ShopViewCommand;

const style = StyleSheet.create({
  shopReviewContainer: {
    width: "100%",
    height: 220,
    borderRadius: "3%",
    backgroundColor: "#FFE9EC",
    borderWidth: 2,
    borderColor: "#ECD7DA",
    gap:5,
  },
  starContainer: {
    flexDirection: "row",
    marginVertical: 15,
    paddingLeft: 10,
    gap: 3,
  },
  userName: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
  ratingContainer:{
    display: "flex",
    flexDirection: "row",
  },
  reviewText:{
    paddingLeft: 10,
    paddingRight:10
  },
  reviewdate:{
    paddingLeft:10,
    marginTop: 30
  }
});
