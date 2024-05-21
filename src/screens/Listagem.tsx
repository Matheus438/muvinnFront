import React, { useEffect, useState } from "react";
import { Anuncio } from "../components/interface/AnuncioInterface";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const renderItem = ({ item }: { item: Anuncio }) => (
    
    <View style={styles.item}>
        <Text style={styles.textTitle}>{item.estado}</Text>
        <Text style={styles.textTitle}>{item.cidade}</Text>
        <Text style={styles.textTitle}>{item.endereco}</Text>
        <Text style={styles.textTitle}>{item.tipos_imoveis}</Text>
        <Text style={styles.textItem}>R${item.preco}</Text>
        <Text style={styles.textTitle}>{item.banheiros}</Text>
        <Text style={styles.textTitle}>{item.quartos}</Text>
        <Text style={styles.textTitle}>{item.vagas}</Text>
        <Text style={styles.textTitle}>{item.area_do_imovel}</Text>
        <Image source={item.image ? {uri:item.image}: require('../assets/images/house.png')}  style={styles.image} />
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textoBotton}>Entrar em contato</Text>
        </TouchableOpacity>
    </View>
)


function Listagem(): React.JSX.Element {

    const [anuncio, setAnuncio] = useState<Anuncio[]>([]);
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.224:8000/api/imovel/retornarTodos');
                setAnuncio(response.data);
                console.log(response.data);
                
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error)
            }
        }
        fetchData();
    }, []);
    const navigation = useNavigation();
    return (

        <View style={styles.container}>

            <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
            <View style={styles.header}>

                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo} />
            </View>
            <ScrollView>

                <Text style={styles.textEspeciais}>Propriedade disponiveis</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={anuncio}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/homes.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FlatListCardapio')}>
                    <Image
                        source={require('../assets/images/lupe.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CadastroSteakhouse')}>
                    <Image
                        source={require('../assets/images/orders.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/plus.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
               
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf2fa"
    },
    item: {
        opacity: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white'

    },
    header: {
        opacity: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#09184d',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    textItem: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textItem2: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logo: {
        width: 300,
        height: 300,
        marginTop: -100
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'white',
        alignItems: 'flex-end'
    },
    textEspeciais: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 19,
        marginBottom: 19
    },
    image2: {
        width: 150,
        height: 350,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    image3: {
        width: 260,
        height: 210,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'white',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    textTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    sacola: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'white',
        marginLeft: 'auto'
    },
    bottom: {
        marginTop: 20,
        borderRadius: 5,

        width: 160,
        height: 40,
        backgroundColor: '#CD5942',
    },
    textoBotton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 6,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
})
export default Listagem;