import { StatusBar } from 'expo-status-bar';
import React, { Component ,useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() { 
  
  const [valor1, setvalor1] = useState(0);
  const [valor2, setvalor2] = useState(0);

//  function calcular(){
//    this.setState({money:(this.state.valor/this.state.valor2)})
//  }

  

 // alterarValor = (valor) => {
 // this.setState({valor:valor},this.calcular());
 //   
 // }
//
 // alterarPessoas = (valor2) => {
 //   this.setState({valor2:valor2},this.calcular());
 //    
 // }
 
  return (
    <View style={styles.background}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Vamos Rachar !" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={styles.text}>Vamos</Text>

        <Text style={styles.text}>Rachar!</Text>

        <Icon name="money" size={50} color="#FFFFFF" />
        <TextInput
          keyboardType={'numeric'}
          style={{ height: 50, width: 200, borderColor: 'white', color: 'white', borderWidth: 1 }}
          onChangeText={(valor1) => { setvalor1(valor1) }}

          value={valor1}
    
        />

        <Icon name="users" size={50} color="#FFFFFF" />
        <TextInput
          keyboardType={'numeric'}
          style={{ height: 50, width: 200, borderColor: 'white', color: 'white', borderWidth: 1 }}
          onChangeText={(valor2) => { setvalor2(valor2) }}
          value={valor2}
      
        />

        <Text style={styles.text}>R$ {valor1/valor2}</Text>

        <IconButton
          icon="share-variant"
          color="white"
          size={50}
          onPress={() => console.log('Compartilhou')}
        />

        <IconButton
          icon="volume-high"
          color="white"
          size={50}
          onPress={() => console.log('Audio')}
        />

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5D2884',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: '#FFFFFF',
    fontSize: 34,
  },
  header: {
    backgroundColor: '#9E5ECE',
  },
});
