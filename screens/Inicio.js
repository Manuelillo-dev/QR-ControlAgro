import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const VentanaVistaUsuario = ({ navigation }) => {
  return (
    <View style={styles.ventanaVistaUsuario}>
      <Image
        style={styles.logoAgricola}
        resizeMode="cover"
        source={require('../assets/Agro.png')} 
      />
      <View style={styles.bienvenido}>
        <TouchableOpacity
          style={styles.eresNuevoButton}
          onPress={() => navigation.navigate("RegUsuario")}
        >
          <Text style={styles.eresNuevo}>Ó , ¿ Eres nuevo ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerAuth}>
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={[styles.buttonText, styles.buttonText1]}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button2]}
          onPress={() => navigation.navigate("RegUsuario")}
        >
          <Text style={[styles.buttonText, styles.buttonText2]}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoAgricola: {
    top: -25,
    width: 325,
    height: 325,
    alignSelf: 'center',
    marginBottom: 30,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    height: 331,
    
  },
  bienvenido: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    alignItems: "center",
  },
  eresNuevoButton: {
    backgroundColor: "#cb6162",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 50,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  eresNuevo: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  headerAuth: {
    position: "absolute",
    bottom: 150,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  button1: {
    backgroundColor: "#14ae5c",
  },
  button2: {
    backgroundColor: "#e8b931",
  },
  buttonText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  buttonText1: {
    color: "#fff",
  },
  buttonText2: {
    color: "#fff",
  },
  ventanaVistaUsuario: {
    flex: 1,
    backgroundColor: "#50b3f9",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VentanaVistaUsuario;
