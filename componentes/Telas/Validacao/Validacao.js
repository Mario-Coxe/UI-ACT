import React, {Component } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import BotaoRecto from '../../ComponentesGeral/BotaoRecto';
import Login from '../Login/Login';
import styles from './ValidacaoEstilo'



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
      return <Login />;
    } 

  return (
    <SafeAreaView style={styles.container2} >

      <StatusBar backgroundColor={'#D6001B'} />
          <View style={styles.camada1}>
          <View style={styles.container}>
            <StatusBar style={styles.status} barStyle="light-content" backgroundColor="#D6001B" />
            <View style={styles.form}>
                <Text style={styles.titulo}>Validado!</Text>
                <Text style={styles.subtitle}>Obrigado Por Fazer</Text>
                <Text style={styles.subtitle}>Parte Do Nduta.</Text>
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





