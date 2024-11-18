import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./screens/Inicio";
import LoginScreen from "./screens/Log_In";
import RegistroUsuario from "./screens/Reg_Usuario";
import RecoverPasswordScreen from "./screens/RecoverPassword";
import Home from "./screens/Home"; // Pantalla del Menú Principal
import WorkersList from "./screens/WorkersList"; // Lista de Trabajadores
import WorkerDetails from "./screens/WorkerDetails"; // Detalles del Trabajador
import AddWorker from "./screens/AddWorker";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      {/* Pantalla de Inicio */}
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{ title: "Inicio", headerShown: false }}
      />
      {/* Pantalla de Login */}
      <Stack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{ title: "Iniciar Sesión" }}
      />
      {/* Menú Principal */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Menú Principal" }}
      />
      {/* Registro de Usuario */}
      <Stack.Screen
        name="RegUsuario"
        component={RegistroUsuario}
        options={{ title: "Registro de Usuario" }}
      />
      {/* Recuperar Contraseña */}
      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPasswordScreen}
        options={{ title: "Recuperar Contraseña" }}
      />
      {/* Lista de Trabajadores */}
      <Stack.Screen
        name="WorkersList"
        component={WorkersList}
        options={{ title: "Gestión de Trabajadores" }}
      />
      <Stack.Screen
        name="AddWorker"
        component={AddWorker}
        options={{ title: "Agregar Trabajador" }}
      />
      {/* Detalles del Trabajador */}
      <Stack.Screen
        name="WorkerDetails"
        component={WorkerDetails}
        options={({ route }) => ({
          title: `Detalles de ${route.params.worker.name}`, // Título dinámico basado en el trabajador
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
