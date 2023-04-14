import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  CheckBox,
} from 'react-native';
import Mapa from './Mapa';
import BotaoRecto from '../../ComponentesGeral/BotaoRectoCliente';


export default class M extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Mapa />
        {this.state.modalVisible && (
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Text style={styles.NomeUser}>Joca, Para Onde Vais?</Text>
                <View style={styles.favorite}>
                  <Image style={styles.heartIcon} source={require('../../../assets/imagens/coracao.png')}/>
                  <Text>Favorito</Text>
                  <View/>
                </View>
              </View>
              <TextInput 
                style={styles.input}
                placeholder="Escolhe O Teu Destino"
                placeholderTextColor="#a8a8a8"
                selectionColor="#000"
                keyboardType="default"
              />
              <BotaoRecto titulo={'Continuar'} />
          </View>       
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    height: 230,
  },
  NomeUser: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
  },
  heartIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  favorite: {
    flexDirection: 'row',
    marginTop: 40,
    right: -80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -60,
  },
    input: {
      width: '100%',
      height: 50,
      fontSize: 18,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: "#d3d3d3",
      elevation: 3,
      backgroundColor: "#fff",
      marginBottom: -20,
      marginTop: 70,
    },
  });
  
