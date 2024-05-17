import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('paciente'); // 'paciente' ou 'medico'

  const handleLogin = () => {
    if (userType === 'paciente') {
      navigation.navigate('Paciente');
    } else {
      navigation.navigate('Medico');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login AIH Saúde</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
      <Button
        title={`Switch to ${userType === 'paciente' ? 'medico' : 'paciente'}`}
        onPress={() => setUserType(userType === 'paciente' ? 'medico' : 'paciente')}
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
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
});

export default LoginScreen;
