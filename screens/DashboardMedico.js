import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function DashboardMedico({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard do Médico</Text>
      <Button
        title="Visualizar Consultas"
        onPress={() => navigation.navigate('Consultas Medico')}
      />
      <Button
        title="Upload de Receita"
        onPress={() => navigation.navigate('Upload Receita')}
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

export default DashboardMedico;
