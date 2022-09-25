import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Participant({ name }){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        { name }
      </Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}