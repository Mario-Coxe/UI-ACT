import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Mapa from './Mapa';

export default class M extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      options: [
        {
          id: '1',
          name: 'Standard',
          price: '5200AOA',
          waitTime: '8 min',
          image: require('../../../assets/imagens/carro.png'),
        },
        {
          id: '2',
          name: 'Economia',
          price: '720AOA',
          waitTime: '5 min',
          image: require('../../../assets/imagens/carro.png'),
        },
        {
          id: '3',
          name: 'Standard',
          price: '5200AOA',
          waitTime: '2 min',
          image: require('../../../assets/imagens/carro.png'),
        },
      ],
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => this.setModalVisible(false)}>
        <View style={styles.optionImageContainer}>
          <Image source={item.image} style={styles.optionImage} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionName}>{item.name}</Text>
          <Text style={styles.optionPrice}>{item.price}</Text>
          <Text style={styles.optionWaitTime}>{item.waitTime}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Mapa />
        {this.state.modalVisible && (
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={this.state.options}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.optionsContainer}
                horizontal={true} // adiciona o flatlist na horizontal
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setModalVisible(false)}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {!this.state.modalVisible && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              backgroundColor: '#D6001B',
              width: '80%',
              height: '8%',
              alignSelf: 'center',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={() => this.setModalVisible(true)}>
            <Text style={styles.buttonText}>Escolher opção de transporte</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: 300,
    alignSelf: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  optionsContainer: {
    paddingBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  },
  optionImageContainer: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    padding: 10,
  },
  optionImage: {
    height: 60,
    width: 60,
  },
  optionTextContainer: {
    marginLeft: 10,
  },
  optionName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionType: {
    fontSize: 14,
    color: '#A5A5A5',
  },
  optionPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  optionWaitTime: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#D6001B',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 18,
  },
});
