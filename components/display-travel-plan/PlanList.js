import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import Transport from './Transport';

export default function PlanList() {
    const route = useRoute();
    const { plan } = route.params;

    console.log(plan)

    console.log(plan);
  return (
    <View style = {styles.container}>
      <Transport transportDetails = {plan.transport}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 100,
    padding: 25,
  },
});