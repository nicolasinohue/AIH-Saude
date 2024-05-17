import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function AgendamentoConsulta({ navigation }) {
  const [dataConsulta, setDataConsulta] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>
      <TextInput
        style={styles.input}
        placeholder="Data da consulta"
        value={dataConsulta}
        onChangeText={setDataConsulta}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição da consulta"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button
        title="Agendar"
        onPress={() => console.log('Consulta agendada')}
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
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
});

export default AgendamentoConsulta;
