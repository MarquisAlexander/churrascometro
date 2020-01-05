import React from 'react';
import { View, Text } from 'react-native';

export default function Profile({navigation}) {
  
  const Nome =  navigation.getParam('homens', 'semnome');

  return (
    <View  marginTop={90}>
      <Text>
        alexander
      </Text>
  <Text>nome: {JSON.stringify(Nome)}</Text>
    </View>
  );
}