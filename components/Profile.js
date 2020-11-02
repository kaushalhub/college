import * as React from 'react';
import { StyleSheet, View  , AsyncStorage ,ScrollView , TouchableOpacity,Alert,Text,Platform,Linking,Image , Share} from 'react-native';
import { Appbar ,Avatar, Button, Card, Title, Paragraph,List} from 'react-native-paper';
import {withNavigation} from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import Navbar from './Header'

class ProfileServices extends React.Component{

  state={
    modalVisible: false,
    data : '0',
    logout : '',
    login : 'User Login',
    number : '',
    expired : '',
    name : 'User Name'
}
setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

login = () => {
this.props.navigation.navigate('Auth')

}

manageaddress = () =>{
  this.props.navigation.navigate("ManageAddress")
}


userdetails = () => {
  this.props.navigation.navigate('UserDetails')
}


  logout = () =>{
    AsyncStorage.removeItem('Login', null)
    AsyncStorage.removeItem('storagenumber',null)
    this.setState({
     logout : null,
     login : "User Login", 
     data : 0
    })
    this.props.navigation.navigate('Home')
  }



cart = async () => {
this.props.navigation.navigate('Cart')
}


onShare = async () => {

if(Platform.OS == 'android'){
  try {
    const result = await Share.share({
      message:
        'Delo Services-One Destination For All Home,Beauty,Wellness & spa Services Delhi and NCR India.Download our app through https://tinyurl.com/Deloservices ',
    });
  
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
}
else{
  try {
    const result = await Share.share({
      message:
        'Delo Services-One Destination For All Home,Beauty,Wellness & spa Services Delhi and NCR India.Download our app through https://tinyurl.com/DeloHelp',
    });
  
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
}


};


deloservices = () =>{
  if(Platform.OS=="android"){
    Linking.openURL('https://play.google.com/store/apps/details?id=com.deloservices.deloservices')
  }
  else{
    Linking.openURL('https://apps.apple.com/us/app/id1497496631')
  }
}


deloteam = () =>{
  if(Platform.OS=="android"){
    Linking.openURL('https://play.google.com/store/apps/details?id=com.deloteam.deloservices')
  }
  else{
    Linking.openURL('https://play.google.com/store/apps/details?id=com.deloteam.deloservices')
  }
}



render(){

  return(

    <View  style={styles.container}>
    
   <Navbar/>
 
     
     <Card style={{margin:10,borderRadius: 15,marginBottom:10}}>
     <TouchableOpacity  >
      <Avatar.Image size={114} 
      source={{uri:'https://www.mpuat.ac.in/images/gallery/small/img9267001993.jpg'}} 
      style={{marginTop:10, marginBottom:10,position:'relative',left:170,borderColor:'black', backgroundColor:'transparent'}}
      />
</TouchableOpacity>


</Card>
     <ScrollView>   
     
      <Card style={{margin:10,borderRadius: 15}}>
          <TouchableOpacity  
                >
                <List.Item
              title='Name'
          
              style={{borderStyle: 'solid', borderWidth: 1,  borderColor: '#eee'}}

            />

            <Text style={{position:'absolute',right:20,bottom:15,color:'#196bfd'}}>Dr. A.S Panwar</Text>
            
          </TouchableOpacity>
      </Card>


      <Card style={{margin:10,borderRadius: 15}}>
          <TouchableOpacity  
                >
                <List.Item
              title='Destination'
          
              style={{borderStyle: 'solid', borderWidth: 1,  borderColor: '#eee'}}

            />

            <Text style={{position:'absolute',right:20,bottom:15,color:'#196bfd'}}>Director</Text>
            
          </TouchableOpacity>
      </Card>

      <Card style={{margin:10,borderRadius: 15}}>
          <TouchableOpacity  
                >
                <List.Item
              title='Date of Birth'
          
              style={{borderStyle: 'solid', borderWidth: 1,  borderColor: '#eee'}}

            />

            <Text style={{position:'absolute',right:20,bottom:15,color:'#196bfd'}}></Text>
            
          </TouchableOpacity>
      </Card>


      <Card style={{margin:10,borderRadius: 15}}>
          <TouchableOpacity  
                >
                <List.Item
              title='Academic Qualifications'
          
              style={{borderStyle: 'solid', borderWidth: 1,  borderColor: '#eee'}}

            />

            <Text style={{position:'absolute',right:20,bottom:15,color:'#196bfd'}}></Text>
            
          </TouchableOpacity>
      </Card>


      <Card style={{margin:10,borderRadius: 15}}>
          <TouchableOpacity  
                >
                <List.Item
              title='Maajor Research Areas'
          
              style={{borderStyle: 'solid', borderWidth: 1,  borderColor: '#eee'}}

            />

            <Text style={{position:'absolute',right:20,bottom:15,color:'#196bfd'}}></Text>
            
          </TouchableOpacity>
      </Card>


      <Card style={{margin:10,borderRadius: 15}}>
          <TouchableOpacity  
                >
                <List.Item
              title='Email'
          
              style={{borderStyle: 'solid', borderWidth: 1,  borderColor: '#eee'}}

            />

            <Text style={{position:'absolute',right:20,bottom:15,color:'#196bfd'}}>director.iifsr@icar.gov.in</Text>
            
          </TouchableOpacity>
      </Card>


      <Card style={{margin:10,borderRadius: 15}}>
          <TouchableOpacity  
                >
                <List.Item
              title='Phone No.'
          
              style={{borderStyle: 'solid', borderWidth: 1,  borderColor: '#eee'}}

            />

            <Text style={{position:'absolute',right:20,bottom:15,color:'#196bfd'}}>0121-2888711, (off) 01212888546</Text>
            
          </TouchableOpacity>
      </Card>
</ScrollView>

            </View>
            
          )

}



  
      
      }


      export default withNavigation(ProfileServices);



      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:'whitesmoke'
      
        },
       
      });