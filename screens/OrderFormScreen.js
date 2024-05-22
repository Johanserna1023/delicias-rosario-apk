import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function OrderFormScreen() {
  const route = useRoute();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDessert, setSelectedDessert] = useState("");
  const [instruction, setInstruction] = useState("");

  const handleFormSubmit = () => {
    // Aquí puedes agregar lógica para enviar el formulario
    console.log("Formulario enviado:", {
      name,
      phone,
      email,
      address,
      selectedDessert,
      imageSource,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Celular:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu celular"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Dirección:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu dirección"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />

      <Text style={styles.label}>Postre seleccionado:</Text>

      <Image source={route.params.image} style={styles.image} />
      <Text>{route.params.name}</Text>

      <Text style={styles.label}>Instrucciones del postre:</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setInstruction(text)}
        value={instruction}
        style={{
          padding: 8,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 16,
        }}
      />

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert("Pedido realizado!")}
      >
        <Text style={styles.buttonText}>Ordenar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#F39C12",
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginBottom: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  picker: {
    height: 40,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
