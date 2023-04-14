import React from 'react';
import { StyleSheet, View, Platform, PermissionsAndroid, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const {width, height} = Dimensions.get('screen');

export default function Mapa() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'(50,50,50)',width:'100%',height:50, elevation:7, justifyContent:'center', alignItems:'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../../assets/imagens/voltar.png')} style={{width:"20%",height:30, resizeMode: 'contain', left: -80}}/>
          <Image source={require('../../../assets/imagens/ndutaVermelho.png')} style={{width:"50%",height:35, justifyContent:'center', alignItems:'center', resizeMode: 'contain', right: 40}}/>
          <Image source={require('../../../assets/imagens/configuracao.png')} style={{width:"20%",height:30, resizeMode: 'contain', position: 'absolute', right: -80}}/>
        </View>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: width, height: height}}
        initialRegion={{
          latitude: -8.838333,
          longitude: 13.234444,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
