import React, { Component } from 'react';

import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
  } from 'react-native';

// import { Container } from './styles';

export default class cronometro extends Component {
  render() {
    return (
    <View style = {styles.container}>
       <Image
       source = {require('./src/cronometro.png')}
       style = {styles.cronometro}
       /> 

       <Text style={styles.timer}>0.0</Text>
       <View style = {styles.btnArea}>


      <TouchableOpacity style = {styles.botao}>
        
        <Text style = {styles.btnTexto}>GO</Text>  
      </TouchableOpacity>   
         
      </View> 


    </View>  
      
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  timer:{

  }

})