import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const AddWorker = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleAddWorker = () => {
    if (!name || !phone || !location) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }
    const newWorker = {
      id: Date.now().toString(),
      name,
      phone,
      location,
      profilePhoto: null,
    };

    const workers = route.params?.workers || [];
    workers.push(newWorker);
    route.params?.setWorkers(workers); // Actualizar la lista en WorkersList
    navigation.navigate("WorkersList"); // Volver a la lista
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Trabajador</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={location}
        onChangeText={setLocation}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddWorker}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f4f4" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#14ae5c",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default AddWorker;
