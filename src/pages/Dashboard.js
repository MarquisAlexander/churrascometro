import React from 'react';
import { View,
         Text,
         Image,
         TextInput,
         StyleSheet,
         TouchableOpacity,
         Platform,
         KeyboardAvoidingView,
         container
        } from 'react-native';

import logo from '../../assets/churrasco.png';

export default function Dashboard({navigation}) {

  const [value1, onChangeText1] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  const [value3, onChangeText3] = React.useState('');


  return (
<>
    <View>
      <Image 
          borderRadius={20}
          style={{ width: 360, height: 300 }}
          source={logo}
          resizeMode='stretch'
        />
    </View>

    <Text style={styles.pergunta}>
      Quantas pessoa participarão do churrasco?
    </Text>

    <View style={styles.row}>
    <View style={styles.container}>
      <Text style={styles.pessoa}>
        Homens
      </Text>
      <TextInput
      onChangeText={(text) => onChangeText1(text)}
      value={value1}
      keyboardType={'numeric'}
      maxLength = {3}
      fontSize={30}
      />
    </View>

    <View style={styles.container}>
      <Text style={styles.pessoa}>
        Mulheres
      </Text>
    <TextInput
      onChangeText={text => onChangeText2(text)}
      value={value2}
      keyboardType={'numeric'}
      maxLength = {3}
      fontSize={30}
    />
    </View>

    <View style={styles.container}>
      <Text style={styles.pessoa}>
        Crianças
      </Text>
    <TextInput
      onChangeText={text => onChangeText3(text)}
      value={value3}
      keyboardType={'numeric'}
      maxLength = {3}
      //numberOfLines = {2}
      fontSize={30}
    />
    </View>
    </View>

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile', {homens: 'marqui santos'}) }>
          <Text style={styles.textbutton}>Calcular</Text>
    </TouchableOpacity>

    </>
  );
}

Dashboard.navigationOptions = {
  title: 'CHURRASCÔMETRO',
  headerTintColor: '#FFF',
  headerTitleStyle: {
      marginLeft: 80,
      fontWeight: 'bold',
      fontSize: 20,
  },
  headerStyle: {
    backgroundColor: '#800000',
  }
};

const styles = StyleSheet.create({
  Centro: {
    flex: 1,
  },

  pergunta: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    color: '#800000',
    //backgroundColor: '#382991'
  },

  container: {
    //flex: 1,
    height: '30%',
    width: '30%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#800000',
    marginTop: '3%',
    marginHorizontal: 5,
  },
  button: {
    //flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-around',
    backgroundColor: '#800000',
    width: '90%',
    height: '10%',
    marginLeft: '5%',
  },
  textbutton: {
    flex: 1,
    //alignSelf: 'center', // <-- tambem alinha ao centro
    alignItems: 'center',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pessoa: {
    alignItems:'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
