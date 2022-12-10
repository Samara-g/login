import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import { Input,Button } from 'react-native-elements';

const Flex = () =>  {
   return(
    <View style={[styles.container, {
      flexDirection:"column"
    }]}>
    <View style={{flex:10, alignItems:'center', paddingTop:40}}>
    <Avatar
size="xlarge"
rounded
source={{
  uri:
  "https://img.myloview.com.br/fotomurais/pessoa-icone-vetorial-macho-usuario-perfil-avatar-simbolo-em-circulo-apartamento-cor-glyph-pictograma-ilustracao-700-140985837.jpg"
}}
/>

</View>
<View style={{ flex:9}} >
  <Input
  placeholder='Login'

  />
  <Input
  placeholder='Senha'
  />
</View>
<View style = {{flex: 7}}>
<Button
              title="Logar"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'blue',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />
<View style = {{flex:8}}>
<Button
              title="Cadastre-se"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'red',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />
  </View>
  </View>
</View>);
};

const styles = StyleSheet.create({
  container: {
flex: 1,
padding: 20,
  },

  avatar:{
    alignItems:'center',
    alignContent:'center',
    justfyContent:'center'
  }
});
export default Flex;