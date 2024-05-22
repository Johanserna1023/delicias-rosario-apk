import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

export default function DetailScreen() {
  const navigation = useNavigation()
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{route.params.name}</Text>
      <Image source={route.params.image} style={styles.image} />
      <Text style={styles.category}>Description: {route.params.description}</Text>
      <Text style={styles.category}>Categoría: {route.params.category}</Text>
      <Text style={styles.price}>Precio: ${route.params.price}</Text>
      <Text style={styles.availability}>
        Disponible:
        {route.params.available ? "Sí" : "No"}
      </Text>
      <Button
        title="Pedido"
        color="#F39C12"
        onPress={() => navigation.navigate('Order', {
          image: route.params.image,
          name: route.params.name,
          description: route.params.description,
          category: route.params.category,
          price: route.params.price,
          available: route.params.available,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  category: {
    fontSize: 18,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    marginBottom: 8,
  },
  availability: {
    fontSize: 18,
    marginBottom: 8,
  },
});
