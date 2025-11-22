import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@formularios";

export async function saveForm(data: any) {
  const list = await getForms();
  list.push(data);
  await AsyncStorage.setItem(KEY, JSON.stringify(list));
}

export async function getForms() {
  const response = await AsyncStorage.getItem(KEY);
  return response ? JSON.parse(response) : [];
}
