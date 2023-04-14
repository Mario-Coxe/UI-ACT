import React, {Component } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import BotaoRecto from '../../ComponentesGeral/BotaoRecto';
import Login from '../../Telas/Login/Login';
import BotaoVoltar from '../../ComponentesGeral/BotaoVoltar';
import styles from './RecuperarSenhaEstilo'


export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MostarLogin: false
    };    
  }

  handleRegistrationClick = () => {
    this.setState({
      MostarLogin: true
    });
  }
  

  render() {
    if (this.state.MostarLogin) {
      return <Login />;
    } 

  return (
    <SafeAreaView style={styles.container2} >

      <StatusBar backgroundColor={'#D6001B'} />
          <View style={styles.camada1}>
          <View style={styles.container}>
            <StatusBar style={styles.status} barStyle="light-content" backgroundColor="#D6001B" />
            <View style={styles.cabecalho}>
            <BotaoVoltar/>
            <Text style={styles.subtitle}>Você Tem Um Problema?</Text>
              <Text style={styles.titulo}>Não Te Preocupe!</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                onChangeText={nome => setNome(nome)}
                placeholder="Email ou Telefone"
              />
              <View>
                <TouchableOpacity onPress={this.handleRegistrationClick}>
                  <Text style={[styles.esqueceu]}>Sem Problema?  Faça Login</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.botaoContainer} >
                <BotaoRecto titulo={'Continuar'} />
              </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
   );
  };
}





