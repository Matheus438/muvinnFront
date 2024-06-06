import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/images/home.png') }
                style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Listagem')}>
                <Image source={require('../assets/images/list.png')}
                style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CadastroImovel')}>
                <Image source={require('../assets/images/cadastro.png')}
                style={styles.footerIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#9999a1',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        padding: 10,
        width: 390,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop: 40
    },
    footerIcon: {
        width: 35,
        height: 35
    }
});

export default Footer;