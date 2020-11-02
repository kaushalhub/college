import * as React from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  NetInfo,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  AsyncStorage,
  ScrollView
} from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import { Avatar , Appbar } from 'react-native-paper';

//import { Container, Header, Content,Root } from 'native-base';

//for internet
const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

export default class Login extends React.Component {
  state = {
    text: '',
    isConnected: true,
    version: 'a',
    number: '',
    password: '',
    isLoading: false,
      contacts: [],
      name : [],
      email : []
  };


   

  //for internet


login1 =()=>{
  
 if(this.state.number== "" || this.state.number == []){
    alert('Please Enter Mobile Number...')
  }
  else if(this.state.password == "" || this.state.password == []){
    alert("Please Enter Password...")
  }
  else if(this.state.number == '1234567890' && this.state.password == '123'){
    alert("Successfully Login")
  }
  else{
    alert('Invalid Credentials')
  }
}

 

  signup = () => {
    alert("In Progess")
   // this.props.navigation.navigate('Signup');
  };

  login = () => {
  if(this.state.number== "" || this.state.number == []){
    alert('Please Enter Mobile Number...')
  }
  else if(this.state.password == "" || this.state.password == []){
    alert("Please Enter Password...")
  }
  else{
      var url = 'http://159.89.169.242/team-api/login';
      var data = { number: this.state.number, password: this.state.password , key :"sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ=="}
      console.log("sending", data)
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
        .catch(error => console.error("Error", error))
        .then(result => {
   if(result.status =='500'){
     alert('Invalid Credentials')
   }
   else if(result.status=='300'){
    this.props.navigation.navigate('Processing')
   }
   else if(result.status =='200'){
     console.log('result',result.result[0].id)
     AsyncStorage.setItem('number',result.result[0].number);
     AsyncStorage.setItem('categoryid',result.result[0].categoryid);
     AsyncStorage.setItem('cityid',result.result[0].categoryid);
         AsyncStorage.setItem('area1',result.result[0].area1);
         AsyncStorage.setItem('area2',result.result[0].area2);
         AsyncStorage.setItem('area3',result.result[0].area3);
         AsyncStorage.setItem('area4',result.result[0].area4);
         AsyncStorage.setItem('area5',result.result[0].area5);
         AsyncStorage.setItem('area6',result.result[0].area6);
         AsyncStorage.setItem('area7',result.result[0].area7);
AsyncStorage.setItem('loginsuccess',"1");
this.props.navigation.navigate('App')
   }
   else{
     alert("An Error occuredd..Please try again after some times")
   }
      

        })



  }
  };

  render() {
    //for internet

    return (
       
    <View style={{flex:1, backgroundColor: '#F5F5F5' }}>
     
     


<Root>
<ScrollView>
<View style={{marginTop:"10%"}}>

<View style={{  alignItems: 'center',
    justifyContent: 'center',}}>
  <Image
           source=''
          style={{ width: 150, height: 150, marginBottom: 20 }}
        />
</View>


</View>



<View style={{marginTop:"5%"}}>
 <Fumi
    label={'Mobile Number'}
    iconClass={FontAwesomeIcon}
    iconName={'phone'}
    iconColor={'#3FD0A2'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
    value={this.state.number}
    keyboardType = 'numeric'
    maxLength={10}
       onChangeText={(text) => this.setState({ number: text })}
      style={{marginLeft:'5%',marginRight:'5%'}}
  />

</View>


<View style={{marginTop:"5%"}}>
<Fumi
    label={'Password'}
    iconClass={FontAwesomeIcon}
    iconName={'key'}
    iconColor={'#3FD0A2'}
    iconSize={20}
    iconWidth={40}
    inputPadding={16}
     secureTextEntry
   value={this.state.password}
         onChangeText={(text) => this.setState({ password: text })}
      style={{marginLeft:'5%',marginRight:'5%'}}
  />


</View>



<View style={{marginTop:"5%"}}>
 
 <TouchableOpacity style={styles.loginBtn} onPress={this.login1}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

</View>



<View style={{marginTop:"5%", flex:1,
             alignItems: 'center',
    justifyContent: 'center',}}>
 
<TouchableOpacity onPress={this.signup}>
          <Text
            style={{
              position: 'relative',
              bottom: 0,
              color: '#666E77',
              margin: 20,
              fontSize:16
             

            }}>
            New User ?<Text style={{ color: '#009387' }}> Sign up now</Text>
          </Text>
        </TouchableOpacity>

</View>




</ScrollView>



  </Root>
     </View>

 

    
    );
 
  }    
}


const styles = StyleSheet.create({
 

  loginBtn:{
    width:"90%",
    backgroundColor:"#009387",
    borderRadius:2,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginLeft:"5%",
    marginBottom:"5%",
   
  },
  loginText:{
    color:"white"
  },
 

});