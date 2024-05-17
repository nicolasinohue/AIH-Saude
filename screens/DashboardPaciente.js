import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function DashboardPaciente({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard do Paciente</Text>
      <Button
        title="Ver Detalhes do Procedimento"
        onPress={() => navigation.navigate('Detalhes Procedimento')}
      />
      <Button
        title="Agendar Consulta"
        onPress={() => navigation.navigate('Agendar Consulta')}
      />
      <Button
        title="Minhas Consultas"
        onPress={() => navigation.navigate('Consultas Paciente')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default DashboardPaciente;
