import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { FormData } from "../ListScreen";

export default function FormScreen({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");
  const [observacoes, setObservacoes] = useState("");
  

  async function salvar() {
    if (!nome || !email || !telefone || !idade) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      return;
    }
    

    const novo: FormData = {
      nome,
      email,
      telefone,
      idade,
      observacoes,
    };

    const dados = await AsyncStorage.getItem("@formularios");
    const lista = dados ? JSON.parse(dados) : [];

    lista.push(novo);

    await AsyncStorage.setItem("@formularios", JSON.stringify(lista));

    Alert.alert("Sucesso", "Formulário salvo!");
    setNome("");
    setEmail("");
    setTelefone("");
    setIdade("");
    setObservacoes("");
  }

  return (
    <LinearGradient colors={["#eef2f7", "#d9e4f5"]} style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.title}>Cadastro de Formulário</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
        />

        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />

        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Observações (opcional)"
          value={observacoes}
          onChangeText={setObservacoes}
          multiline
        />

        <TouchableOpacity style={styles.btnSalvar} onPress={salvar}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSecundario}
          onPress={() => navigation.navigate("ListScreen")}
        >
          <Text style={styles.btnSecundarioText}>Ver formulários</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}
