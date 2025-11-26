import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useForm, Controller } from "react-hook-form";

import styles from "./styles";
import Input from "../../components/Input";
import { saveForm } from "../../storage/formStorage";
import { useNavigation } from "@react-navigation/native";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  idade: string;
  observacoes: string;
};

export default function FormScreen() {
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      idade: "",
      observacoes: "",
    },
  });

  async function onSubmit(data: FormData) {
    try {
      await saveForm(data);
      Alert.alert("Sucesso", "Formulário salvo com sucesso!");
      reset();
    } catch (error) {
      console.error("Erro ao salvar formulário:", error);
      Alert.alert("Erro", "Não foi possível salvar o formulário.");
    }
  }

  return (
    <LinearGradient colors={["#6b6bff", "#3b3bff"]} style={styles.container}>
      <View style={styles.form}>

        <Controller
          control={control}
          name="nome"
          rules={{ required: "Nome é obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Nome"
              value={value}
              onChangeText={onChange}
              placeholder="Digite o nome"
            />
          )}
        />
        {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}

        <Controller
          control={control}
          name="email"
          rules={{
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "E-mail inválido",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="E-mail"
              value={value}
              onChangeText={onChange}
              placeholder="exemplo@dominio.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        <Controller
          control={control}
          name="telefone"
          rules={{
            required: "Telefone é obrigatório",
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Telefone"
              value={value}
              onChangeText={onChange}
              placeholder="(xx) xxxxx-xxxx"
              keyboardType="phone-pad"
            />
          )}
        />
        {errors.telefone && <Text style={styles.errorText}>{errors.telefone.message}</Text>}

        <Controller
          control={control}
          name="idade"
          rules={{
            required: "Idade é obrigatória",
            pattern: { value: /^[0-9]+$/, message: "Idade deve ser numérica" },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Idade"
              value={value}
              onChangeText={onChange}
              placeholder="Digite a idade"
              keyboardType="numeric"
            />
          )}
        />
        {errors.idade && <Text style={styles.errorText}>{errors.idade.message}</Text>}

        <Controller
          control={control}
          name="observacoes"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Observações"
              value={value}
              onChangeText={onChange}
              placeholder="Observações (opcional)"
              multiline
            />
          )}
        />

        <TouchableOpacity style={styles.btnSalvar} onPress={handleSubmit(onSubmit)}>
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
