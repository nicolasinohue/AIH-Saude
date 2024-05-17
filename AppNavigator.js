import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardPaciente from './screens/DashboardPaciente';
import DashboardMedico from './screens/DashboardMedico';
import LoginScreen from './screens/LoginScreen';
import DetalhesProcedimento from './screens/DetalhesProcedimento';
import AgendamentoConsulta from './screens/AgendamentoConsulta';
import ConsultasMedico from './screens/ConsultasMedico';
import UploadReceita from './screens/UploadReceita';
import ConsultasPaciente from './screens/ConsultasPaciente';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PacienteTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardPaciente} />
      <Tab.Screen name="Agendar Consulta" component={AgendamentoConsulta} />
      <Tab.Screen name="Consultas Paciente" component={ConsultasPaciente} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Paciente" component={PacienteTabNavigator} />
        <Stack.Screen name="Medico" component={DashboardMedico} />
        <Stack.Screen name="Detalhes Procedimento" component={DetalhesProcedimento} />
        <Stack.Screen name="Consultas Medico" component={ConsultasMedico} />
        <Stack.Screen name="Upload Receita" component={UploadReceita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
