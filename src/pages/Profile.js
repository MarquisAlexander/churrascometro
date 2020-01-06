import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Profile({navigation}) {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');

  const Nome =  navigation.getParam('value3', 'sem valor');
  const [resultado] = React.useState('1');

  function  calcular({value, value1, resultado}){

  }

  return (
    <View  marginTop={90}>
      <Text>
        alexander
      </Text>
  <Text>valor recebido: {JSON.stringify(Nome)}</Text>


  <Button title={'press'} onPress={calcular}/>
    </View>
    
  );
}