import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

export default function Input({ label, ...rest }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}
