import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';

import logo from '../../assets/icon.png';

export default function Feed() {
  const [value, onChangeText] = React.useState('');

  return (
<>
    <View>
      <Image
          style={{ width: 360, height: 300 }}
          source={logo}
          resizeMode='stretch'
        />
    </View>
    <View style={styles.row}>
    <View style={styles.container}>
      <Text>
        Homens
      </Text>
    <TextInput
      onChangeText={text => onChangeText(text)}
      value={value}
      keyboardType={'numeric'}
    />
    </View>

    <View style={styles.container}>
      <Text>
        Mulheres
      </Text>
    <TextInput
      onChangeText={text => onChangeText(text)}
      value={value}
      keyboardType={'numeric'}
    />
    </View>

    <View style={styles.container}>
      <Text>
        Crianças
      </Text>
    <TextInput
      onChangeText={text => onChangeText(text)}
      value={value}
      keyboardType={'numeric'}
    />
    </View>
    </View>

    <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Calcular</Text>
    </TouchableOpacity>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: '30%',
    width: '30%',
    borderRadius: 4,
    borderWidth: 10,
    borderColor: '#814592',
  },
  button: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#814592',
    width: '100%',
    height: '10%',
  },
  textbutton: {
    flex: 1,
    //alignSelf: 'center', // <-- tambem alinha ao centro
    alignItems: 'center',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
