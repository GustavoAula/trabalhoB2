import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "../screens/FormScreen";
import ListScreen from "../screens/ListScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="FormScreen" 
        component={FormScreen} 
        options={{ title: "Formulário" }}
      />

      <Stack.Screen 
        name="ListScreen" 
        component={ListScreen}
        options={{ title: "Lista de Formulários" }}
      />
    </Stack.Navigator>
  );
}
