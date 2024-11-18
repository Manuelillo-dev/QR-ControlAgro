import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const RegistroUsuario = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    telefono: "",
    email: "",
    contraseña: "",
    fechaNacimiento: "",
    curp: "",
    rol: "Administrador", // Por defecto administrador
    actaNacimiento: null,
    credencialElector: null,
    comprobanteDomicilio: null,
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSelectFile = (field) => {
    alert(`Seleccionar archivo para: ${field}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      {/* Campos de texto */}
      <TextInput
        placeholder="Primer Nombre"
        value={formData.nombre1}
        onChangeText={(value) => handleInputChange("nombre1", value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Segundo Nombre (Opcional)"
        value={formData.nombre2}
        onChangeText={(value) => handleInputChange("nombre2", value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Primer Apellido"
        value={formData.apellido1}
        onChangeText={(value) => handleInputChange("apellido1", value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Segundo Apellido (Opcional)"
        value={formData.apellido2}
        onChangeText={(value) => handleInputChange("apellido2", value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Teléfono"
        value={formData.telefono}
        onChangeText={(value) => handleInputChange("telefono", value)}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={formData.contraseña}
        onChangeText={(value) => handleInputChange("contraseña", value)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
        value={formData.fechaNacimiento}
        onChangeText={(value) => handleInputChange("fechaNacimiento", value)}
        style={styles.input}
      />
      <TextInput
        placeholder="CURP"
        value={formData.curp}
        onChangeText={(value) => handleInputChange("curp", value)}
        style={styles.input}
      />

      {/* Documentos */}
      <Text style={styles.sectionTitle}>Documentos</Text>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleSelectFile("Acta de Nacimiento")}
      >
        <Text style={styles.uploadButtonText}>Subir Acta de Nacimiento</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleSelectFile("CURP")}
      >
        <Text style={styles.uploadButtonText}>Subir CURP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleSelectFile("Credencial de Elector")}
      >
        <Text style={styles.uploadButtonText}>Subir Credencial de Elector</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleSelectFile("Comprobante de Domicilio")}
      >
        <Text style={styles.uploadButtonText}>Subir Comprobante de Domicilio</Text>
      </TouchableOpacity>

      {/* Botones de acción */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Registro enviado")}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: width * 0.05,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#333",
    marginBottom: height * 0.02,
  },
  input: {
    width: "100%",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: height * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#333",
    marginBottom: height * 0.01,
  },
  uploadButton: {
    width: "100%",
    paddingVertical: height * 0.02,
    backgroundColor: "#3498db",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    paddingVertical: height * 0.02,
    backgroundColor: "#14ae5c",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
  cancelButton: {
    width: "100%",
    paddingVertical: height * 0.02,
    backgroundColor: "#e74c3c",
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
});

export default RegistroUsuario;
