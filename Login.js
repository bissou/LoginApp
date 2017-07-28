import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';
import LoginForm from './LoginForm';

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
  render() {
    return (
      <Image style={styles.backgroundImage} source ={require('./fond1.jpg')}>
      <View style={styles.container}>

        <View style ={styles.logincontainer}>
        
        <Image style = {styles.Imgstyle}source ={require('./pic5.png')} />
       
        <Text style ={styles.title}>Veuillez introduire vos info </Text>
        </View>
      
        <View style ={styles.formcontainer}>
        <LoginForm />
        </View>

      </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding :30
  },
  logincontainer : {

    justifyContent: 'center',
    alignItems: 'center',
    flexGrow :1,
    
  },
  formcontainer :{
  //  flexGrow : 1,

  },
  Imgstyle :{
    width : 110,
    height : 110,

  },
  title :{
    color : 'black',
    fontSize: 20,
    fontWeight: 'bold',

  },
  backgroundImage: {
    flex: 1,
     width,
    resizeMode: 'cover',
    height,
    
  }
});
