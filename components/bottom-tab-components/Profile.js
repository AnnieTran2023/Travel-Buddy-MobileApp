// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import {
//   TextInput,
//   Button,
//   Provider as PaperProvider,
// } from "react-native-paper";
// import Toast from "react-native-toast-message";
// import { signOut, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../configs/FirebaseConfig";
// import AppStyles from "../AppStyles";

// export default function Profile({ navigation }) {
//   const [user, setUser] = useState(null);
//   const [displayName, setDisplayName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         setDisplayName(currentUser.displayName || "");
//         setEmail(currentUser.email || "");
//       } else {
//         setUser(null);
//         setDisplayName("");
//         setEmail("");
//         setPassword("");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         Toast.show({
//           type: "success",
//           text1: "Logged out successfully",
//           visibilityTime: 2000,
//         });
//         navigation.navigate("SignIn");
//       })
//       .catch((error) => {
//         Toast.show({
//           type: "error",
//           text1: error.message,
//         });
//       });
//   };

//   return (
//     <PaperProvider theme={AppStyles.theme}>
//       <View style={styles.container}>
//         <Text style={AppStyles.title}>Profile</Text>
//         {user ? (
//           <>
//             <Text style={AppStyles.text}>
//               Welcome back, {user.displayName}!
//             </Text>
//             <View>
//               <TextInput
//                 mode="outlined"
//                 label="Display Name"
//                 value={displayName}
//                 onChangeText={setDisplayName}
//                 style={AppStyles.input}
//                 theme={AppStyles.theme}
//               />
//               <TextInput
//                 mode="outlined"
//                 label="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 style={AppStyles.input}
//                 theme={AppStyles.theme}
//                 editable={false}
//               />
//               <TextInput
//                 mode="outlined"
//                 label="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!passwordVisible}
//                 right={
//                   <TextInput.Icon
//                     icon={passwordVisible ? "eye-off" : "eye"}
//                     onPress={() => setPasswordVisible(!passwordVisible)}
//                   />
//                 }
//                 style={AppStyles.input}
//                 theme={AppStyles.theme}
//               />
//             </View>
//             <Button
//               mode="contained"
//               buttonColor="black"
//               textColor="white"
//               labelStyle={AppStyles.buttonText}
//               contentStyle={AppStyles.buttonContent}
//               style={AppStyles.button}
//               onPress={handleLogout}
//             >
//               Log Out
//             </Button>
//           </>
//         ) : (
//           <Text>Loading...</Text>
//         )}
//       </View>
//     </PaperProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     height: "100%",
//     paddingTop: 120,
//     padding: 20,
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}