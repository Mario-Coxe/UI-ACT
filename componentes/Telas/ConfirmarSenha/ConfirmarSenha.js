import React, {Component } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import BotaoRecto from '../../ComponentesGeral/BotaoRecto';
import TelaLogin from '../Login/Login';
import BotaoVoltar from '../../ComponentesGeral/BotaoVoltar';
import styles from './ConfirmarSenhaEstilo'

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MostrarLogin: false
    };    
  }

  handleRegistrationClick = () => {
    this.setState({
      MostrarLogin: true
    });
  }
  

  render() {
    if (this.state.MostrarLogin) {
      return <TelaLogin />;
    } 

  return (
    <SafeAreaView style={styles.container2} >

      <StatusBar backgroundColor={'#D6001B'} />
          <View style={styles.camada1}>
          <View style={styles.container}>
            <StatusBar style={styles.status} barStyle="light-content" backgroundColor="#D6001B" />
            <View style={styles.cabecalho}>
            <BotaoVoltar/>
            <Text style={styles.subtitle}>Redifina a sua senha</Text>
              <Text style={styles.titulo}>Aqui tudo é fácil!</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                onChangeText={nome => setNome(nome)}
                placeholder="Nova Senha"
             />
              <TextInput
                style={styles.input}
                onChangeText={senha => setSenha(senha)}
                secureTextEntry={true}
                placeholder="ConfirmSenha"
              />
              <View style={styles.botaoContainer} >
                <BotaoRecto titulo={'Continuar'} onPress={this.handleConfirmarPassword} />
              </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
   );
  };
}





