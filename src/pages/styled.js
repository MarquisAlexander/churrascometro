import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, TextInput, Image,
} from 'react-native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';

import logo from '../../assets/churrasco.png';


export default class Newdashboard extends Component {

  constructor(props){
    super(props)
    this.state = {somaall:0, num1:0, num2:0, num3:0, res:0, cerv:2, refri:1, palho:4,}
    this.calcular = this.calcular.bind(this)
  }


    // Função para retornar o calculo
    calcular(){
      let somaall = parseInt(this.state.num1) + parseInt(this.state.num2) + parseInt(this.state.num3)
      let a = this.state
      a.resp = somaall
      this.setState(a)

      let totalrefrigerante = parseInt(this.state.resp) * parseInt(this.state.refri)
      let r = this.state
      r.totalrefrigerante = totalrefrigerante
      this.setState(r)      

      let totalcerveja = parseInt(this.state.resp) * parseInt(this.state.cerv)
      let c = this.state
      c.totalcerveja = totalcerveja
      this.setState(c)

      let totalpaodealho = parseInt(this.state.resp) * parseInt(this.state.palho)
      let p = this.state
      p.totalpaodealho = totalpaodealho
      this.setState(p)
    }

  render() {
    return (
      <View style={styles.container}>

<View>
      <Image 
          //marginTop={25}
          borderRadius={20}
          style={{ width: 360, height: 300 }}
          source={logo}
          resizeMode='stretch'
        />
    </View>

    <Text style={styles.pergunta}>
          Quantidade de pessoa para o churrasco 
    </Text>

    <View style={styles.row}>
    <View style={styles.container}>
      <Text style={styles.pessoa}>
        Homens
      </Text>
      <TextInput style={styles.input}
      maxLength = {8}
      fontSize={30}
      placeholder="000"
      keyboardType="numeric"
      onChangeText={(num1)=>{this.setState({num1})}}
      />
      <View style={styles.figu}>
      <Ionicons name="md-man" size={100} color="black" />
      </View>
    </View>

    <View style={styles.container}>
      <Text style={styles.pessoa}>
        Mulheres
      </Text>
    <TextInput style={styles.input}
      maxLength = {3}
      fontSize={30}
      placeholder="000"
      keyboardType="numeric"
      onChangeText={(num2)=>{this.setState({num2})}}
    />
      <View style={styles.figu}>
      <Ionicons name="md-woman" size={100} color="black" />
      </View>
    </View>

    <View style={styles.container}>
      <Text style={styles.pessoa}>
        Crianças
      </Text>
    <TextInput style={styles.input}
      maxLength = {3}
      fontSize={30}
      placeholder="000"
      keyboardType="numeric"
      onChangeText={(num3)=>{this.setState({num3})}}
    />
      <View style={styles.figuchild}>
      <FontAwesome name="child" size={60} color="black" />
      </View>
    </View>
    </View>

        {/* view especifica para acoplar os inputs */}

      {/* Botão para calcular a soma */}
      
      <TouchableOpacity onPress={this.calcular}  style={styles.ofibtn}>
        <Text style={styles.calc}> salvar dados </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.ofibtn} 
        onPress={() => this.props.navigation.navigate('Profile',
         {total: this.state.totalcerveja}
         
         )}>
        <Text style={styles.calc}> calcular </Text>
      </TouchableOpacity>
      

      {/* Campo de saida do resultado */}
      <Text style={styles.resultado}>valor {this.state.totalrefrigerante} </Text>
      <Text style={styles.resultado}>valor {this.state.totalcerveja} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  ofibtn: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-around',
    backgroundColor: '#800000',
    width: '90%',
    height: '10%',
    marginLeft: '5%',
  },

  figu: {
    alignItems: 'center',
    marginTop: '10%',
  },

  figuchild: {
    alignItems: 'center',
    marginTop: '40%',
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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#800000',
    marginHorizontal: 5,
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

  container: {
    flex: 1,
    backgroundColor: '#7125c1',
  },
    input: {
    //height:80,
    textAlign:"center",
    //width:"50%",
    fontSize:40,
    marginTop:'0%',
    //backgroundColor: '#000',
  },
  calc: {
    alignSelf: "center",
    fontSize:30,
    padding: 20,
    color: 'red',
  },
  resultado: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: "center",
    fontSize:35,
    //padding:30,
  },
});