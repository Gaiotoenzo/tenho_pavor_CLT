import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import Foto from './assets/vamo_trabaiar.jpg';

export default function App() {

  return (
    <View style={estilo.container}>
      <View style={estilo.perfil}>
        <Text style={estilo.perfiltxt}>PERFIL</Text>
      </View >
      <View style={estilo.avatarbox}>
        <Image
          source={Foto}
          style={estilo.avatar}
        />
      </View>
      <View style={estilo.nome}>
        <Text style={estilo.nometxt}>Nome</Text>
      </View>
      <View style={estilo.nomeV}>
        <Text style={estilo.nomeVV}>Enzo Cau</Text>
      </View>
      <View style={estilo.nome2}>
        <Text style={estilo.nometxt}>Esse não é seu nome de usuário e sim seu nome de exibição</Text>
      </View>
      <View style={estilo.nome3}>
        <Text style={estilo.nometxt}>Recado</Text>
      </View>
      <View style={estilo.nomeV}>
        <Text style={estilo.nomeVV}>por acaso vossa senhorita faz parte do job? </Text>
      </View>
      <View style={estilo.nome3}>
        <Text style={estilo.nometxt}>Telefone</Text>
      </View>
      <View style={estilo.nomeV}>
        <Text style={estilo.nomeVV}>+55 15 99120-6575</Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1, 
  },
  avatar:{
    width:190,
    height:190,
    borderRadius:100,
    marginTop: 30,
  },
  avatarbox:{
    alignItems: "center",
    justifyContent: "center"
  },
  perfil:{
    backgroundColor: "#00806A",
    paddingTop: 10,
    paddingBottom: 10
  },
  perfiltxt:{
    color: "white",
    fontSize: 20,
    marginLeft: 20,
    fontFamily: "monospace"
  },
  nome:{
    marginLeft: 60,
    marginTop: 50
  },
  nome2:{
    marginLeft: 60,
    marginTop: 10
  },
  nome3:{
    marginLeft: 60,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor : "#808080",
    marginRight: 50
  },
  nometxt:{
    fontFamily: "monospace",
    fontSize: 15,
    color: "#808080",
    marginRight: 60
  },
  nomeV:{
    marginLeft: 70,
    marginTop: 5,
    marginRight: 60
  },
  nomeVV:{
    fontFamily: "monospace",
    fontSize: 16,
    marginRight: 20
  }
}); 

