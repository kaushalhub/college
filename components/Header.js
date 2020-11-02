import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , Dimensions ,Share, Image , TouchableOpacity , ScrollView} from 'react-native';
import { Appbar } from 'react-native-paper';
import {withNavigation} from 'react-navigation'

 class MyComponent extends React.Component {


  render() {
  return (
  <View style={{backgroundColor:'green',
    justifyContent:'center',
    alignItems: 'center'}}>
<Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mpuat_udaipur.png',
        }}
      />
</View>
  
  );
    }
}

const styles = StyleSheet.create({
 
 
 tinyLogo: {
    width: 50,
    height: 50,
    marginTop:20,
    marginBottom:20
  
   
    
  },
});


export default withNavigation(MyComponent)