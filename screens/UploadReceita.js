import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

function UploadReceita() {
  const [file, setFile] = useState(null);
  const [descricao, setDescricao] = useState('');

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setFile(result);
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log('Upload de receita:', file.name);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload de Receita</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Selecionar Arquivo" onPress={pickDocument} />
      {file && <Text>Arquivo selecionado: {file.name}</Text>}
      <Button title="Fazer Upload" onPress={handleUpload} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default UploadReceita;
