import React from "react";
import {View, Text, Image,
     StyleSheet, SafeAreaView, StatusBar,
     Pressable,
     Linking
    } from 'react-native'

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/57037205?v=4';
const urlToGithub = 'https://github.com/FernandaBergoci';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo link ....');
           await Linking.openURL(urlToGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content'></StatusBar>   
        <View style = {style.content}>
            <Image accessibilityLabel="Foto de Fernanda" style={style.avatar} source = {{uri: imageProfileGithub}} />
            <Text accessibilityLabel="Nome: Fernanda Bergoci" style={[style.defaultText, style.name]}>Fernanda Bergoci</Text>
            <Text accessibilityLabel="nickname: feBergoci" style={[style.defaultText, style.nickname]}>feBergoci</Text>
            <Text accessibilityLabel="descrição: Estudante de Ciência da Computação" style={[style.defaultText, style.description]}>Estudante de Ciência da Computação</Text>
            <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
            </View>
            </Pressable>
        </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{ //column
       backgroundColor: colorGithub, 
       flex:1, // expandir para a tela inteira
       justifyContent: 'center',
       alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,

    },
    description:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,  
    },
    
});