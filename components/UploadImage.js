import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImageScreen = () => {
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    // Solicitar permisos al cargar la pantalla
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permisos denegados para acceder a la galería.');
      }
    })();
  }, []);

  const seleccionarImagen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagen(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {imagen && <Image source={{ uri: imagen }} style={styles.imagenPreview} />}
      <TouchableOpacity style={styles.boton} onPress={seleccionarImagen}>
        <Text style={styles.textoBoton}>Seleccionar Imagen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  imagenPreview: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
});

export default UploadImageScreen;