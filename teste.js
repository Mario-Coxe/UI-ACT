import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleMenu}>
        <Text>Menu</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '80%', backgroundColor: '#fff' }}>
          <View style={{ padding: 20, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 25, color: 'red', textAlign: 'right', marginBottom: 30}}>Menu</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, textAlign: 'right', color: 'black' }}>Definições</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, textAlign: 'right', color: 'black' }}>Pagamentos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, textAlign: 'right', color: 'black' }}>Histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, textAlign: 'right', color: 'black' }}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, textAlign: 'right', color: 'black' }}>Cartões</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, textAlign: 'right', color: 'black' }}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, textAlign: 'right', color: 'black' }}>Suporte</Text>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 20, marginTop: 300}}>
            <View style={{borderBottomWidth: 1}} />
            <TouchableOpacity>
              <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'right', color: 'black'}}>Faça mais</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ textAlign: 'right', fontSize: 14, color: 'black'}}>Seja motorista</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ textAlign: 'right', fontSize: 14, color: 'black' }}>Avalie nossa App</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ textAlign: 'right', fontSize: 14, color: 'black'}}>Conduta.ao.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  ); 
}

export default Dashboard;
