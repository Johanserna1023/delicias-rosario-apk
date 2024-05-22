import Logo from "../assets/logo/Logo.png"
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const LogoScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Logo} // Reemplaza 'tu_logo.png' con el nombre de tu archivo de imagen
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Ajusta el tamaño según tus necesidades
    height: 200,
  },
});

export default LogoScreen;

