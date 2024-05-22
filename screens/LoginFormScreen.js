import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import LogoScreen from "../components/Logo";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

export default function LoginFormScreen() {
  const navigation = useNavigation()
  const route = useRoute();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <LogoScreen/>
      <Text style={styles.label}>Usuario:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Ingresa tu usuario"
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
      />

      <Button title="Iniciar sesión"  color="#F39C12" onPress={() => navigation.navigate('Admin')}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});
