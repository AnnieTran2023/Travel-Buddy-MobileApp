import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ProgressBar } from "react-native-paper";
import AppStyles from "../AppStyles";
import { useContext } from "react";
import TripContext from "./TripContext";
import CalendarPicker from "react-native-calendar-picker";
import { Button } from "react-native-paper";
import moment from "moment";
import Toast from "react-native-toast-message";

export default function SelectDate({ navigation }) {
  const { tripDetails, setTripDetails } = useContext(TripContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(date);
    } else if (type === "END_DATE") {
      setEndDate(date);
    }
  };

  const dateSelectedContinue = () => {
    if (startDate && endDate) {
      const formattedStartDate = moment(startDate).format("DD MMM YYYY");
      const formattedEndDate = moment(endDate).format("DD MMM YYYY");
      const duration = moment(endDate).diff(moment(startDate), "days");

      setTripDetails({
        ...tripDetails,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        duration: duration + 1,
      });
      navigation.navigate("SelectBudget");
    } else {
      Toast.show({
        type: "error",
        text1: "Please select a start and end date!",
      });
    }
  };
  return (
    <View style={styles.container}>
      <ProgressBar
        progress={0.6}
        color="#6200b3"
        style={{ marginBottom: 20 }}
      />
      <Text style={AppStyles.title}>When are we heading?</Text>
      <Text style={AppStyles.text}>
        Share your dates so we can pack our bags and hit the road!
      </Text>
      <View style={{ marginTop: 20 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={10}
          selectedRangeStyle={{ backgroundColor: "#e5daff" }}
        />
        <Button
          mode="contained"
          buttonColor="black"
          textColor="white"
          labelStyle={AppStyles.buttonText}
          contentStyle={AppStyles.buttonContent}
          style={AppStyles.button}
          onPress={dateSelectedContinue}
        >
          Continue
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 120,
    padding: 20,
  },
});
