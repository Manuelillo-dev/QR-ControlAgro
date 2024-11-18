import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const initialWorkers = [
  { id: "1", name: "Morgan James", phone: "1234567890", location: "Zamora Mich.", profilePhoto: null },
  { id: "2", name: "John Doe", phone: "9876543210", location: "Uruapan Mich.", profilePhoto: null },
];

const WorkersList = ({ navigation }) => {
  const [workers, setWorkers] = useState(initialWorkers);
  const [searchQuery, setSearchQuery] = useState("");
  const loggedInUser = "Administrador"; // Simulación del usuario logueado

  // Filtrar trabajadores según la búsqueda
  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Configurar la barra superior con el usuario logueado y el botón para agregar
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Logueado: ${loggedInUser}`,
      headerRight: () => (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate("AddWorker", {
              workers,
              setWorkers, // Pasamos el estado y su setter para actualizar la lista
            })
          }
        >
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, workers]);

  const renderWorkerCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("WorkerDetails", { worker: item })}
    >
      <View style={styles.cardContent}>
        <View style={styles.profileSection}>
          <Image
            source={
              item.profilePhoto
                ? { uri: item.profilePhoto }
                : require("../assets/default-profile.png")
            }
            style={styles.profileImage}
          />
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>
            <MaterialIcons name="location-on" size={14} color="#e91e63" /> {item.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar trabajador por nombre..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredWorkers}
        keyExtractor={(item) => item.id}
        renderItem={renderWorkerCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  card: { backgroundColor: "#fff", borderRadius: 10, marginBottom: 10, padding: 15 },
  cardContent: { flexDirection: "row", alignItems: "center" },
  profileSection: { marginRight: 15 },
  profileImage: { width: 60, height: 60, borderRadius: 30 },
  infoSection: { flex: 1 },
  name: { fontSize: 18, fontWeight: "bold" },
  details: { fontSize: 14, color: "#555" },
  addButton: {
    backgroundColor: "#14ae5c",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default WorkersList;
