import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import UploadImageScreen from "../components/UploadImage";

const CreateDessertScreen = () => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [instrucciones, setInstrucciones] = useState("");

  const guardarPostre = () => {
    // Lógica para guardar el postre, puedes enviar los datos a una API o almacenar localmente
    console.log("Guardando postre:", { nombre, ingredientes, instrucciones });
    // Puedes agregar aquí la lógica para guardar los datos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Crear Postre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del postre"
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />

      <UploadImageScreen />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        onChangeText={(text) => setIngredientes(text)}
        value={ingredientes}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        onChangeText={(text) => setInstrucciones(text)}
        value={instrucciones}
        multiline
      />
      <Button title="Cargar Postre" color="#F39C12" onPress={guardarPostre} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});

export default CreateDessertScreen;
