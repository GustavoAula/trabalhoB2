import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Card({ title, subtitle }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
