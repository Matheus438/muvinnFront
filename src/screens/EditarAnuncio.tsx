import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from "../components/Footer";
import axios from "axios";

interface RouteParams {
    anuncio: {
      estado: string;
      cidade: string;
      endereco: string;
      tipos_imoveis: string;
      preco: string;
      banheiros: string;
      quartos: string;
      vagas: string;
      area_do_imovel: string;
    };
  }
const EditarAnucio: React.FC = () => {
  const [estado, setEstado] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [tipos_imoveis, setTipos_imoveis] = useState<string>('');
  const [preco, setPreco] = useState<string>('');
  const [banheiros, setBanheiros] = useState<string>('');
  const [quartos, setQuartos] = useState<string>('');
  const [vagas, setVagas] = useState<string>('');
  const [area_do_imovel, setArea_do_imovel] = useState<string>('');

  const navigation = useNavigation();
  const route = useRoute();
    const anuncio = (route.params as RouteParams).anuncio;

  useEffect(() => {
    const route = useRoute();
    const anuncio = route.params?.anuncio;

    if (anuncio) {
      setEstado(anuncio.estado);
      setCidade(anuncio.cidade);
      setEndereco(anuncio.endereco);
      setTipos_imoveis(anuncio.tipos_imoveis);
      setPreco(anuncio.preco);
      setBanheiros(anuncio.banheiros);
      setQuartos(anuncio.quartos);
      setVagas(anuncio.vagas);
      setArea_do_imovel(anuncio.area_do_imovel);
    }
  }, [route.params]);

  const handleEdit = async () => {
    try {
      const data = {
        estado,
        cidade,
        endereco,
        tipos_imoveis,
        preco,
        banheiros,
        quartos,
        vagas,
        area_do_imovel,
      };

      const response = await axios.put(`http://10.137.11.211:8000/api/imovel/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <Head />
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          value={estado}
          onChangeText={setEstado}
        />
        <TextInput 
          style={styles.input}
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput 
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput 
          style={styles.input}
          value={tipos_imoveis}
          onChangeText={setTipos_imoveis}
        />
        <TextInput 
          style={styles.input}
          value={preco}
          onChangeText={setPreco}
        />
        <TextInput 
          style={styles.input}
          value={banheiros}
          onChangeText={setBanheiros}
        />
        <TextInput 
          style={styles.input}
          value={quartos}
          onChangeText={setQuartos}
        />
        <TextInput 
          style={styles.input}
          value={vagas}
          onChangeText={setVagas}
        />
        <TextInput 
          style={styles.input}
          value={area_do_imovel}
          onChangeText={setArea_do_imovel}
        />

        <TouchableOpacity style={styles.button}
          onPress={handleEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.menuList}></View>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "red",
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    menuList: {
        flexGrow: 1
    },


});

export default EditarAnucio;