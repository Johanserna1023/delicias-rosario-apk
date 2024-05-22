import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Deserts } from "../utils/dessertsCards";
import { useNavigation } from '@react-navigation/native';

export default function FilterDessert() {
  const navigation = useNavigation()
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedPrice, setSelectedPrice] = useState("Todos");
  const [selectedAvailability, setSelectedAvailability] = useState("Todos");

  const filterProducts = () => {
    let filteredProducts = Deserts;

    if (selectedCategory !== "Todos") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedPrice !== "Todos") {
      const priceThreshold = parseInt(selectedPrice, 10);
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= priceThreshold
      );
    }

    if (selectedAvailability !== "Todos") {
      const availabilityFilter =
        selectedAvailability === "Disponible" ? true : false;
      filteredProducts = filteredProducts.filter(
        (product) => product.available === availabilityFilter
      );
    }

    return filteredProducts;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtrar por Categoría:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Todos" value="Todos" />
        <Picker.Item label="Dulce" value="Dulce" />
        <Picker.Item label="Salado" value="Salado" />
      </Picker>

      <Text style={styles.label}>Filtrar por Precio:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedPrice}
        onValueChange={(itemValue) => setSelectedPrice(itemValue)}
      >
        <Picker.Item label="Todos" value="Todos" />
        <Picker.Item label="$0 - $50" value="50" />
        <Picker.Item label="$51 - $100" value="100" />
        {/* Agrega más rangos de precios según sea necesario */}
      </Picker>

      <Text style={styles.label}>Filtrar por Disponibilidad:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedAvailability}
        onValueChange={(itemValue) => setSelectedAvailability(itemValue)}
      >
        <Picker.Item label="Todos" value="Todos" />
        <Picker.Item label="Disponible" value="Disponible" />
        <Picker.Item label="No disponible" value="No disponible" />
      </Picker>

      <FlatList
        data={filterProducts()}
        style={{ marginBottom: 570 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Detail", {
                image: item.image,
                name: item.name,
                description: item.description,
                category: item.category,
                price: item.price,
                available: item.available,
              })
            }
          >
            <View style={styles.productItem}>
              <Image style={styles.image} source={item.image} />
              <Text>{item.name}</Text>
              <Text>Categoría: {item.category}</Text>
              <Text>Precio: ${item.price}</Text>
              <Text>Disponible: {item.available ? "Sí" : "No"}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 3,
  },
  picker: {
    height: 40,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  productItem: {
    marginBottom: 16,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
});
