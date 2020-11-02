import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , Dimensions ,Share, Image , TouchableOpacity , ScrollView} from 'react-native';
import { Appbar } from 'react-native-paper';
import {withNavigation} from 'react-navigation'
import Header from './Header'


const DATA = [
  {
    id: 'History',
    title: 'History',
  },
  {
    id: 'Vision',
    title: 'Vision & Mission',
  },
  {
    id: 'Honable',
    title: 'Honable Chancellor ',
  },
  {
    id: 'HonarVice',
    title: 'Honable Vice Chancellor',
  },
  
 
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

 class MyComponent extends React.Component {

  subject = (txt) => {
    this.props.navigation.navigate(txt)
  }

  render() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
      

<View>


<Header/>


</View>





<ScrollView>
        <View style={{flex:1}}>
        <FlatList
        data={DATA}
        contentContainerStyle={styles.container}
        numColumns={2}
          ItemSeparatorComponent={
          () => <View style={{ width: 16, backgroundColor: 'pink' }}/>
      }
        renderItem={({ item }) => 
      (
        
        <View style={styles.listItem}>
         <TouchableOpacity onPress={this.subject.bind(this,item.id)}>
        <Text style={styles.title}>{item.title}</Text>
         </TouchableOpacity>
    </View>
      )  
      }
        keyExtractor={item => item.id}
      />



        </View>
        </ScrollView>
      </View>
 
    </SafeAreaView>
  
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'white'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  title: {
   
    fontSize: 14,
    marginTop:10,
    marginLeft:20,
    textAlign:'center',
    justifyContent:'center',
    flex:1
    
  },
  listItem: {
    maxWidth: Dimensions.get('window').width /2,
    flex:1,
    

    padding: 20,
    borderStyle: 'solid', 
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eee',
    borderLeftColor: '#eee',
    borderRightColor: '#eee',
    
    borderBottomColor: '#eee',
    
},

});


export default withNavigation(MyComponent)