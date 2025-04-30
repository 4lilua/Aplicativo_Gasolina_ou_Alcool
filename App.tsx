import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, Image, TouchableOpacity,View, ImageSourcePropType} from 'react-native';
import {useState} from 'react';

const imagens: ImageSourcePropType[] = [
  require('./assets/Dado/dado1.png'),
  require('./assets/Dado/dado2.png'),
  require('./assets/Dado/dado3.png'),
  require('./assets/Dado/dado4.png'),
  require('./assets/Dado/dado5.png'),
  require('./assets/Dado/dado6.png')
]



export default function App() {
  const[Num, setNum] = useState(0);
  const[Anterior, setAnterior] = useState(0);
  
  function trocaEstado(){
    setAnterior(Num);
    do{
      let sorteio = Math.floor(Math.random() * 6);
      setNum(sorteio);
    }while(setNum == setAnterior)
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={trocaEstado}>
        <Image style={styles2.imagem} source={imagens[Num]}></Image>  
        <Text style={styles2.texto}>Número sorteado: setNum</Text>
      </TouchableOpacity>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#956ece',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  texto: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  fonteCinza: {
    color: '#c7c9cc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    height: 200,
  },
  imagem2: {
    width: 100,
    height: 100,
  }
});

const styles3 = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});