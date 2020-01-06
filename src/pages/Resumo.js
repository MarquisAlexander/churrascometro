import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';

export default function Feed() {
    return (
      <>
      <View style={styles.back}>
      <View style={styles.princ}>
      <View style={styles.card} backgroundColor={'#800000'}>
        <View style={styles.cont}>
        <Text style={styles.title}>
          Carnes
        </Text>
          <AntDesign name="disconnect" size={32} color="black" />
        <Text style={styles.kg}>3 Kg</Text>
        </View>
      </View>

<View style={styles.card} backgroundColor={'#F0E68C'}>
<View style={styles.cont}>
<Text style={styles.title}>
Refrigerante
</Text>
<MaterialCommunityIcons name="bottle-wine" size={32} color="black" />
<Text style={styles.kg}>2</Text>
<Text> Litro(s)</Text>
</View>
</View>

<View style={styles.card} backgroundColor={'#FFD700'}>
<View style={styles.cont}>
<Text style={styles.title}>
Cerveja
</Text>
<Ionicons name="md-beer" size={32} color="black" />
<Text style={styles.kg}>8 </Text>
<Text> Litro(s)</Text>
</View>
</View>
</View>

<View style={styles.princ}>
      <View style={styles.card} backgroundColor={'#F0E68C'}>
      <View style={styles.cont}>
        <Text style={styles.title}>
          Farofas
        </Text>
          <Entypo name="bowl" size={32} color="black" />
        <Text style={styles.kg}>300 Kg</Text>
        </View>
      </View>

<View style={styles.card} backgroundColor={'#228B22'}>
<View style={styles.cont}>
<Text style={styles.title}>
Vinagrete
</Text>
<Entypo name="yelp" size={32} color="black" />
<Text style={styles.kg}>540 g</Text>
</View>
</View>

<View style={styles.card} backgroundColor={'#006400'}>
<View style={styles.cont}>
<Text style={styles.title}>
Saladas
</Text>
<Entypo name="basecamp" size={32} color="black" />
<Text style={styles.kg}>280 g</Text>
</View>
</View>
</View>


<View style={styles.princ}>
      <View style={styles.card} backgroundColor={'#DAA520'}>
      <View style={styles.cont}>
        <Text style={styles.title}>
        Pão de alho
        </Text>
          <AntDesign name="cloud" size={32} color="black" />
        <Text style={styles.kg}>8 Un</Text>
        </View>
      </View>

<View style={styles.card} backgroundColor={'#DCDCDC'}>
<View style={styles.cont}>
<Text style={styles.title}>
Queijo coalho
</Text>
<AntDesign name="laptop" size={32} color="black" />
<Text style={styles.kg}>400 Kg</Text>
</View>
</View>

<View style={styles.card} backgroundColor={'#FFFF00'}>
<View style={styles.cont}>
<Text style={styles.title}>
Abacaxi
</Text>
<Ionicons name="md-man" size={32} color="black" />
<Text style={styles.kg}>5 Un</Text>
</View>
</View>
</View>
</View>
</>
    );
  }

  const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
    },

    back: {
      flex:1,
      backgroundColor: '#F5FFFA',
    },

    princ: {
      //flex:1,
      flexDirection: 'row',
      //alignItems: 'center',
    },

    cont: {
      marginTop: 10,
      alignItems: 'center',
      flexDirection: 'column',
    },

    card: {
      alignContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 20,
      width: 100,
      height: 120,
      //backgroundColor: "#7159c1",
      marginLeft: '4%',
    },

    kg: {
      fontSize: 25,
      fontWeight: 'bold',
    },
  })
  