import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [aumentoPercentual, setAumentoPercentual] = useState('');
  const [resultadoAumento, setResultadoAumento] = useState(null);
  const calcularValor = () => {
    if (!produto || !valor || !aumentoPercentual) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente.');
      return;
    }
    const valorNumerico = parseFloat(valor);
    const aumentoNumerico = parseFloat(aumentoPercentual);
    const aumentoCalculado = (valorNumerico * aumentoNumerico) / 100;
    const valorComAumento = valorNumerico + aumentoCalculado;
    setResultadoAumento({
      produto,
      valorOriginal: valorNumerico,
      percentualAumento: aumentoNumerico,
      aumentoCalculado,
      valorComAumento,
    });
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Calculadora de Aumento de Preço</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Nome do Produto"
        value={produto}
        onChangeText={setProduto}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Valor Original"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Aumento (%)"
        keyboardType="numeric"
        value={aumentoPercentual}
        onChangeText={setAumentoPercentual}
      />
      <Button title="Calcular Aumento" onPress={calcularValor} />
      {resultadoAumento && (
        <View style={styles.resultadoBox}>
          <Text style={styles.resultadoText}>Produto: {resultadoAumento.produto}</Text>
          <Text style={styles.resultadoText}>Valor Original: R$ {resultadoAumento.valorOriginal.toFixed(2)}</Text>
          <Text style={styles.resultadoText}>Aumento: {resultadoAumento.percentualAumento}%</Text>
          <Text style={styles.resultadoText}>Aumento Calculado: R$ {resultadoAumento.aumentoCalculado.toFixed(2)}</Text>
          <Text style={styles.resultadoText}>Novo Preço: R$ {resultadoAumento.valorComAumento.toFixed(2)}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  inputField: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 5,
  },
  resultadoBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#e7e7e7',
    borderRadius: 8,
    width: '90%',
  },
  resultadoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});