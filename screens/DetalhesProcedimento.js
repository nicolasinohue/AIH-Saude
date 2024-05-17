import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetalhesProcedimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Procedimento</Text>
      <Text>Informações sobre o procedimento escolhido.</Text>
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

export default DetalhesProcedimento;
