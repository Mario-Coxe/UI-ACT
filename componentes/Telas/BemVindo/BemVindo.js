import React, { Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar, Modal} from 'react-native';
import Registro from '../Registro/Registro'; // importa a tela de registro
import Login from '../Login/Login'; 
import styles from './BemVindoEstilo'


export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MostrarTelaRegistro: false,
      MostrarTelaLogin: false,
      modalVisible: false,
    };    
  }

  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  

  handleRegistrationClick = () => {
    this.setState({
      MostrarTelaDeRegistro: true,
      MostrarTelaLogin: true
    });
  }
  
  handleLoginClick = () => {
    this.setState({
      MostrarTelaLogin: true
    });
  }

  render() {
    if (this.state.MostrarTelaDeRegistro) {
      return <Registro />;
    } else if (this.state.MostrarTelaLogin) {
      return <Login />;
    }
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Inglês</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Francês</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Português</Text>
              </TouchableOpacity>
            </View>
          </View>
          </Modal>
        <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <View style={styles.imageContainer}>
            <Image source={require('../../../assets/imagens/splash2.png')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Seja Bem-Vindo!</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>
          <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, {marginBottom: 20}]}>
            <TouchableOpacity style={[styles.button, { borderColor: '#fff' }]} onPress={this.handleRegistrationClick}>
              <Text style={[styles.buttonText, { color: '#fff' }]}>Registrar</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonContainer, {marginTop: 20}]}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#fff'}]} onPress={this.handleLoginClick}>
              <Text style={[styles.buttonText, { color: '#D6001B' }]}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.idiomaContainer}>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Text style={[styles.idiomaText]}>Idioma</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
