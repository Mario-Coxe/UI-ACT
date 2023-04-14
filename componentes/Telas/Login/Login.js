import React, {Component } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import BotaoRecto from '../../ComponentesGeral/BotaoRecto';
import Autenticacao from '../Autenticacao/Autenticacao';
import Home from '../../ComponentesGeral/home';
import styles from './LoginEstilo'

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAutentication: false
    };    
  }

  handleRegistrationClick = () => {
    this.setState({
      showAutentication: true
    });
  }
  

  render() {
    if (this.state.showAutentication) {
      return <Autenticacao />;
    } 

  return (
    <SafeAreaView style={styles.container2} >
      <StatusBar backgroundColor={'#D6001B'} />
          <View style={styles.camada1}>
          <View style={styles.container}>
            <StatusBar style={styles.status} barStyle="light-content" backgroundColor="#D6001B" />
            <View style={styles.cabecalho}>
              <Text style={styles.titulo}>Faça Login</Text>
              <Text style={styles.subtitle}>Vamos começar</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                onChangeText={nome => setNome(nome)}
                placeholder="Email ou Telefone"
              />
              <TextInput
                style={styles.input}
                onChangeText={senha => setSenha(senha)}
                secureTextEntry={true}
                placeholder="Senha"
              />
              <View>
                <TouchableOpacity onPress={this.handleRegistrationClick}>
                  <Text style={[styles.esqueceu]}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.botaoContainer} >
                <BotaoRecto titulo={'Acessar'} />
              </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
   );
  };
}






