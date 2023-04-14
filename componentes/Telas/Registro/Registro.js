import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView} from 'react-native';
import BotaoRecto from '../../ComponentesGeral/BotaoRecto';
import styles from './RegistroEstilo'

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');

  return (
    
  <SafeAreaView style={styles.container2} >
  <StatusBar backgroundColor={'#D6001B'} />
    <View style={styles.camada1}>
    <View style={styles.container}>
    <StatusBar  style={styles.status} barStyle="light-content" backgroundColor="#D6001B"/>
         <View style={styles.cabecalho}>
    <Text style={styles.titulo}>Registo</Text>
    <Text style={styles.subtitle}>Vamos começar</Text>
      </View>
      <View style={styles.form}>
     
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder="Nome Completo"
        />
        <TextInput
          style={styles.input}
          onChangeText={telefone => setTelefone(telefone)}
          keyboardType={"numeric"}
          placeholder="Telefone"
        />
        <TextInput
          style={styles.input}
          onChangeText={email => setEmail(email)}
          keyboardType={"email-address"}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={senha => setSenha(senha)}
          secureTextEntry={true}
          placeholder="Senha"
        />
        <TextInput
          style={styles.input}
          onChangeText={ConfirmarSenha => setConfirmarSenha(senha)}
          secureTextEntry={true}
          placeholder="Confirmar Senha"
        />
        <View style={styles.botaoContainer}>
          <BotaoRecto titulo={'Confirmar Registo'} />
        </View>
      </View>
    </View>
    </View>
    </SafeAreaView>
  );
};


export default Formulario;




