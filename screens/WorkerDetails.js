import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const WorkerDetails = ({ route }) => {
  const { worker } = route.params;

  const handleCameraAlert = () => {
    Alert.alert("Imagen de Perfil", "Aquí podrás insertar una imagen de perfil.");
  };

  return (
    <View style={styles.container}>
      {/* Sección de imagen de perfil */}
      <View style={styles.profileSection}>
        <Image
          source={
            worker.profilePhoto
              ? { uri: worker.profilePhoto }
              : require("../assets/agro.jpg") // Imagen por defecto
          }
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon} onPress={handleCameraAlert}>
          <FontAwesome name="camera" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Información del trabajador */}
      <Text style={styles.title}>{worker.name}</Text>
      <Text style={styles.detail}>📞 {worker.phone}</Text>
      <Text style={styles.detail}>📍 {worker.location}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Información adicional sobre el trabajador.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    alignItems: "center",
  },
  profileSection: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#14ae5c",
    borderRadius: 15,
    padding: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
});

export default WorkerDetails;
