import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de Aumento de Preço</Text>
      { }
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://www.onflag.com.br/wp-content/uploads/qual-nivel-presenca-digital-empresa-calcule-alcance-aqui.jpg' }}
          style={styles.productImage}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={produto}
        onChangeText={setProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor Original"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        style={styles.input}
        placeholder="Aumento (%)"
        keyboardType="numeric"
        value={aumentoPercentual}
        onChangeText={setAumentoPercentual}
      />
      <Button title="Calcular Aumento" onPress={calcularValor} />
      {resultadoAumento && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Produto: {resultadoAumento.produto}</Text>
          <Text style={styles.resultText}>Valor Original: R$ {resultadoAumento.valorOriginal.toFixed(2)}</Text>
          <Text style={styles.resultText}>Aumento: {resultadoAumento.percentualAumento}%</Text>
          <Text style={styles.resultText}>Aumento Calculado: R$ {resultadoAumento.aumentoCalculado.toFixed(2)}</Text>
          <Text style={styles.resultText}>Novo Preço: R$ {resultadoAumento.valorComAumento.toFixed(2)}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    width: '80%',
    height: 150,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  resultText: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 10,
  },
});