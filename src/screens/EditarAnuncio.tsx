import axios from "axios";
import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../components/Footer";

interface Item {
  id: string;
  estado: string;
  cidade: string;
  endereco: string;
  tipos_imoveis: string;
  preco: string;
  banheiros: string;
  quartos: string;
  vagas: string;
  area_do_imovel: string;
}

function EditarAnuncio({ item }: { item: Item }): React.JSX.Element {
  const [estado, setEstado] = useState(item.estado);
  const [cidade, setCidade] = useState(item.cidade);
  const [endereco, setEndereco] = useState(item.endereco);
  const [tipos_imoveis, setTipos_imoveis] = useState(item.tipos_imoveis);
  const [preco, setPreco] = useState(item.preco);
  const [banheiros, setBanheiros] = useState(item.banheiros);
  const [quartos, setQuartos] = useState(item.quartos);
  const [vagas, setVagas] = useState(item.vagas);
  const [area_do_imovel, setArea_do_imovel] = useState(item.area_do_imovel);

  const editarScreen = async () => {
    try {
      const formData = new FormData();
      formData.append('estado', estado);
      formData.append('cidade', cidade);
      formData.append('endereco', endereco);
      formData.append('tipos_imoveis', tipos_imoveis);
      formData.append('preco', preco);
      formData.append('banheiros', banheiros);
      formData.append('quartos', quartos);
      formData.append('vagas', vagas);
      formData.append('area_do_imovel', area_do_imovel);

      console.log(formData);
      const response = await axios.put(`http://10.137.11.211:8000/api/imovel/update/{id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar hidden barStyle={"light-content"} backgroundColor={"black"} />
            <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo} />

            <View>
                
                <TextInput
                style={styles.input} 
                placeholder="Estado" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteEstado) => setEstado(texteEstado)}
                />
                
                <TextInput
                style={styles.input} 
                placeholder="Cidade" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteCidade) => setCidade(texteCidade)}
                
                />
                <TextInput
                style={styles.input} 
                placeholder="Endereço" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteEndereco) => setEndereco(texteEndereco)}
                
                />
                <TextInput
                style={styles.input} 
                placeholder="Tipo do Imóvel" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteTipos_imoveis) => setTipos_imoveis(texteTipos_imoveis)}
                
                />
                <TextInput
                style={styles.input} 
                placeholder="Preço" 
                placeholderTextColor={"#151413"} 
                onChangeText={(textePreco) => setPreco(textePreco)}
                
                />
                <TextInput
                style={styles.input} 
                placeholder="Banheiros" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteBanheiros) => setBanheiros(texteBanheiros)}
                
                />
                <TextInput
                style={styles.input} 
                placeholder="Quartos" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteQuartos) => setQuartos(texteQuartos)}
                
                />
                <TextInput
                style={styles.input} 
                placeholder="Vagas" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteVagas) => setVagas(texteVagas)}
                
                />
                <TextInput
                style={styles.input} 
                placeholder="Área do Imóvel" 
                placeholderTextColor={"#151413"} 
                onChangeText={(texteArea_do_Imovel) => setArea_do_imovel(texteArea_do_Imovel)}
                
                />
                </View>
                <View>
                    
                <TouchableOpacity style={styles.button} 
                onPress={()=>{editarScreen()}}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

                </View>
            
            </ScrollView>
            <Footer />
        </View>
        
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edf2fa'
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: -120,
        marginTop: -69
        
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: 'center',

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        
    },
    button: {
        backgroundColor: '#7b5bf2',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d6ccc2',
        height: 40,

    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 40,
       

    },
    forgotPassword: {
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 14

    },
    footer: {
        width: 100,
    },

});

export default EditarAnuncio;