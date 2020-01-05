import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Profile({navigation}) {
  const [value, onChangeText] = React.useState('');
  const [value1, onChangeText1] = React.useState('');

  const Nome =  navigation.getParam('homens', 'semnome');
  const [resultado] = React.useState('1');

  function  calcular({value, value1, resultado}){
    alert.call(
      'Alert Title',
      'funcionou',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    )
    resultado = (value1 + value);
  }

  

  return (
    <View  marginTop={90}>
      <Text>
        alexander
      </Text>
  <Text>nome: {JSON.stringify(Nome)}</Text>

  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    onChangeText={text => onChangeText(text)}
    value={value}
    keyboardType={'numeric'}
  />

<TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    onChangeText={text => onChangeText1(text)}
    value={value1}
    keyboardType={'numeric'}
  />

  <Button title={'press'} onPress={calcular}/>

  <Text>nome: {value} + {value1}</Text>
  <Text>valor 2: {value1}</Text>
<Text>soma: {resultado}</Text>
    </View>
    
  );
}