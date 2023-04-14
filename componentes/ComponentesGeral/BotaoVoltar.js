import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './Estilos/BotaoVoltarEstilo'

const b = () => {
  const onPress = () =>" setCount(prevCount => prevCount + 1)";
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={{ width:30, height: 30}}
        source={require('../../assets/imagens/icons8-return-64.png')}
      />
        <Text style={{color:'#D6001B',fontSize:20}}>
          
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default b;