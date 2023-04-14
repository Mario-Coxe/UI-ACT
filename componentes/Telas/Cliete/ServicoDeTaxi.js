import React, { Component } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Mapa from './Mapa'

export default class M extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };    
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <Mapa/>
        {this.state.modalVisible && (
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', top: 45, width: '45%', padding: 10, borderRadius: 20, elevation: 7 }}>
                    <Image source={require('../../../assets/imagens/carro.png')} style={{ height: 45, width: 45 }} />
                    <Text style={{ fontSize: 14 }}>Econômico</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', top: 45, width: '45%', padding: 10, borderRadius: 20, elevation: 7 }}>
                    <Image source={require('../../../assets/imagens/carro.png')} style={{ height: 50, width: 50 }} />
                    <Text style={{ fontSize: 14 }}>SUV</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30 }}>
                  <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', top: 45, width: '45%', padding: 10, borderRadius: 20, elevation: 7 }}>
                    <Image source={require('../../../assets/imagens/carro.png')} style={{ height: 45, width: 45 }} />
                    <Text style={{ fontSize: 14 }}>Carrinha</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', top: 45, width: '45%', padding: 10, borderRadius: 20, elevation: 7 }}>
                    <Image source={require('../../../assets/imagens/carro.png')} style={{ height: 50, width: 50 }} />
                    <Text style={{ fontSize: 14 }}>Famíliar</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.button}  onPress={() => this.setModalVisible(false)}>
                  <Text style={styles.buttonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {!this.state.modalVisible && (
          <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 10}} onPress={() => this.setModalVisible(true)}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color:'#D6001B', right: -140, backgroundColor: '#FFFFFF', borderColor: '#D6001B',borderRadius: 10, paddingVertical: 8, paddingHorizontal: 36}}>Carro</Text>
          </TouchableOpacity>
        )}
    </View>
  );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: -115,
    left: 50,
    right: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6001B',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    height:300
  },
});
