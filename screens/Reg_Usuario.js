import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default function RegUsuario({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [curp, setCurp] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <Image source={require('../assets/Agro.png')} style={styles.logo} />
      </TouchableOpacity>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder="Apellidos" value={apellido} onChangeText={setApellido} style={styles.input} />
      <TextInput placeholder="Teléfono" value={telefono} onChangeText={setTelefono} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Correo" value={correo} onChangeText={setCorreo} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="CURP" value={curp} onChangeText={setCurp} style={styles.input} />
      {/* Sección para futura funcionalidad de agregar foto */}
      <View style={styles.fotoContainer}>
        <Text>FOTO</Text>
        <TouchableOpacity style={styles.fotoButton}>
          <Text>Elegir Archivo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88CEFA',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  fotoContainer: {
    marginVertical: 15,
  },
  fotoButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
