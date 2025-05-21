import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Componente principal do aplicativo
export default function App() {
  // Estado da idade
  const [gasolina, setGasolina] = useState("5");
  const [alcool, setAlcool] = useState("7.30");
  const [mensagem, setMensagem] = useState("");

  // Função para alterar a idade e exibir a mensagem
  function calcularPreco() {
    const precoGasolina = parseFloat(gasolina.replace(',', '.'));
    const precoAlcool = parseFloat(alcool.replace(',', '.'));
    const resultado = precoGasolina > 0 && precoAlcool > 0
          ? precoAlcool / precoGasolina < 0.7
          ? 'Abasteça com álcool!'
          : 'Abasteça com gasolina!'
          : 'Preencha todos os campos!';
    
    setMensagem(resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gasolina ou Álcool?</Text>
      <Text style={styles.texto}>Preço da gasolina: {gasolina}</Text>
      <Text style={styles.texto}>Preço do alcool: {alcool}</Text>
      <Button title="Calcular" onPress={calcularPreco}/>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  titulo: {
    fontSize: 26,
    color: '#00796b',
    marginBottom: 10,
  },
  texto: {
    fontSize: 20,
    color: '#00796b',
    marginBottom: 10,
  },
  mensagem: {
    fontSize: 18,
    color: '#004d40',
    marginBottom: 20,
  },
});

