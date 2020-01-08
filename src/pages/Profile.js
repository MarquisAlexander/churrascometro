import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Profile({navigation}) {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');

  const Totalcerveja =  navigation.getParam('total', 'sem valor');
  const Totalrefrigerante =  navigation.getParam('totall', 'sem valor');
  const [resultado] = React.useState('1');

  function  calcular({value, value1, resultado}){

  }

  return (
    <View  marginTop={90}>
      <Text>
        alexander
      </Text>
  <Text>cervejas: {JSON.stringify(Totalcerveja)}</Text>
  <Text>refrigerante: {JSON.stringify(Totalrefrigerante)}</Text>
    </View>
    
  );
}