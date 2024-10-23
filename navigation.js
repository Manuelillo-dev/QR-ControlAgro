import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VistaUsuario from "./screens/Inicio";
import LogIn from "./screens/Log_In";
import RegUsuario from "./screens/Reg_Usuario";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      {/* Pantalla inicial sin header */}
      <Stack.Screen
        name="Inicio"
        component={VistaUsuario}
        options={{ headerShown: false }}
      />

      {/* LogIn con navegación por defecto */}
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ title: "Iniciar Sesión" }}
      />

      {/* RegUsuario con navegación por defecto */}
      <Stack.Screen
        name="RegUsuario"
        component={RegUsuario}
        options={{ title: "Registro de Usuario" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
