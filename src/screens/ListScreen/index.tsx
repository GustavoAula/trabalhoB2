import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  idade: string;
  observacoes: string;
}

export default function ListScreen() {
  const [dados, setDados] = useState<FormData[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  async function carregarDados() {
    const info = await AsyncStorage.getItem("@formularios");
    if (info) setDados(JSON.parse(info));
  }

  useEffect(() => {
    carregarDados();
  }, []);

  const filtrados = dados.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulários Salvos</Text>

      <TextInput
        style={styles.inputPesquisa}
        placeholder="Buscar por nome..."
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.nome}</Text>
            <Text style={styles.itemSubtitle}>{item.email}</Text>
            <Text style={styles.itemSubtitle}>Tel: {item.telefone}</Text>
            <Text style={styles.itemSubtitle}>Idade: {item.idade}</Text>

            {item.observacoes ? (
              <Text style={styles.itemObs}>Obs: {item.observacoes}</Text>
            ) : null}
          </View>
        )}
      />
    </View>
  );
}
