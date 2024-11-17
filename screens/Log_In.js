import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default function LogIn({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Agro.png')} style={styles.logo} />
      
      <TextInput placeholder="Correo" value={correo} onChangeText={setCorreo} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Contraseña" value={contraseña} onChangeText={setContraseña} style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88CEFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    top: 80,
    left: 50,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    width: 300,
    height: 300,
    position: "absolute"
  },
    bienvenido: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '80%',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
