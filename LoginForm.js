import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

//import { Accounts } from 'react-native-meteor';

export default class Login extends Component {


    constructor(props) {
    super(props);

         this.state = {
                 // accounts:[{user:'test1',password : 'abcd'}],
                   email: '',
                   password: '',
                   error: null,
                       };
                    }
                    
    isValid() {
    const  email= this.state.email;
    const password = this.state.password
    let valid = false;

    if (email.length > 0 && password.length > 0) {
      valid = true;
    }

    if (email.length === 0) {
      this.setState({ error: 'You must enter an email address' });
      alert(this.state.error);
    } else if (password.length === 0) {
      this.setState({ error: 'You must enter a password' });
      alert(this.state.error);
    }

    return valid;
  }

  login =  ()=> {
  
    fetch('http://192.168.1.120', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-Type': 'application/json',      

      },

       body: JSON.stringify({
         username: this.state.email,
         passeword: this.state.passeword,  
       })

    })
    .then((response) => response.json())
    .then((res) => {

         if(res.success===true){
         var username = res.message;
         AsyncStorage.setItem('username',username);
         this.props.navigator.push({
            id: 'Memberarea'
         });

       }else{
          alert(res.message);     

       }
    })
    .done();
         
  }
  
    

  onCreateAccount() {
   
  }

  render() {
    return (
      <View style={styles.container}>
   <TextInput
     onChangeText={(email) => this.setState({email})}
     value = {this.state.email}
     placeholder="username or email " 
     placeholderTextColor ="black"
     autoCapitalize="none"
     autoCorrect={false}
     style={styles.input}
   />

   <TextInput 
     placeholder="password"
     placeholderTextColor ="black"
     onChangeText={(password) => this.setState({password})}
     value = {this.state.password}
     autoCapitalize="none"
     autoCorrect={false}
     secureTextEntry
     style={styles.input}
   />

   <TouchableOpacity style={styles.bouttonContainer} onPress={this.login.bind(this)}>
     <Text style={styles.buttonText}> LOGIN </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.bouttonContainer} onPress={this.onCreateAccount.bind(this)}>
     <Text style={styles.buttonText}> SIGN IN</Text>
   </TouchableOpacity>
      <Text style={styles.error}>{this.state.error}</Text> 

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
   padding : 20,
  
  },
  input :{
   marginBottom :20,
    height :50,
   // backgroundColor : '#FFCCBC',

  },

  bouttonContainer :{
      flexDirection: 'row',
      borderWidth: 1,
      marginBottom:20,
  },
  buttonText:{

     // textAlign : 'center',
      color : 'black',
      fontWeight: 'bold',
      fontSize : 20,
  },
  error:{
   color : 'red',


  }
  
});
