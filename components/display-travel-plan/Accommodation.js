import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import AppStyles from "../AppStyles";2
import { Card } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

export default function Accommodation({ accommodationDetails }) {
  console.log(accommodationDetails);
  return (
    <View>
      <View style={{ marginLeft: 16 }}>
        <Text style={AppStyles.smallTitle}>Accommodation 🏡</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {accommodationDetails?.map((accommodation, index) => {
            return (
              <Card key = {index} style={{ marginRight: 18 }}>
                <View style={styles.imageContainer}>
                  <Card.Cover
                    source={require("../../assets/landscape.jpg")}
                    style={styles.image}
                  />
                  <Text style={AppStyles.overlayTextHotel}>
                    {accommodation.hotelName}
                  </Text>
                </View>
                <Card.Content>
                  <View style={styles.hotelInfo}>
                    <View style={{ flex: 5 }}>
                      <Text style={AppStyles.extraSmallText}>
                        💰 Price : {accommodation.price}
                      </Text>
                      <Text style={AppStyles.extraSmallText}>
                        🌟 Rating: {accommodation.rating}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{ flex: 1, marginTop:20, marginLeft:10 }}
                      onPress={() =>
                        Linking.openURL(accommodation.hotelBookingUrl)
                      }
                    >
                      <Feather name="external-link" size={22} color="black" />
                    </TouchableOpacity>
                  </View>
                </Card.Content>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    height: 200,
    width: 250,
  },
  hotelInfo: {
    flexDirection: "row",
    marginTop: 10,
  },
});
