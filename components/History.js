import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , Dimensions ,Share, Image , TouchableOpacity , ScrollView} from 'react-native';
import { Appbar } from 'react-native-paper';
import {withNavigation} from 'react-navigation'
import Header from './Header'


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'History',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Vision & Mission',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Honable Chancellor ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
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

  subject = () => {
    this.props.navigation.navigate('History')
  }

  render() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
      

<View>


<Header/>


</View>





<ScrollView>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
       <Text style={{flex:1,alignItems:'center',justifyContent:'center',color:'blue',fontSize:18,marginTop:10,marginBottom:10}}>History</Text>


       <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>Recognizing the importance of agricultural growth and development in assuring livelihood security of its population, the Government of Rajasthan gave high priority to develop agricultural education, research and extension in the state. The first agriculture college established in the State was SKN College of Agriculture at Jobner.  Later on in 1955, Rajasthan College of Agriculture was established at Udaipur. With the establishment of first Agricultural University at Pantnagar in 1960 on the pattern of Land Grant Universities of USA, Rajasthan state had the distinction of being the second in establishment of Agricultural Universities in the country in 1962.  It also accepted the model of land grant pattern of education of U.S.A. with trinity of functions i.e. teaching, research and extension education. The government took the bold decision to transfer the research component to the university which many other states took a long time.  Soon the university was converted into multi faculty in 1964.  Later on separate Agricultural University was created in 1987 at Bikaner by bifurcating from the Sukhadia University, Udaipur. The selected allied Colleges at Udaipur became constituent colleges of Rajasthan Agricultural University, Bikaner.</Text>

      <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>Maharana Pratap University of Agriculture and Technology, Udaipur (MPUAT), the second Agricultural University of the state, (initially named as Agricultural University, Udaipur) came into existence on 1st November, 1999 by bifurcation of the Rajasthan Agricultural University, Bikaner through promulgation of Government of Rajasthan Ordinance No. 6 of 1999, which became an Act in May, 2000.  This has been done in view of wide physiographic variation including crops, cropping pattern, climate, soil parameters, etc. in the largest state of the country. Moreover, it was difficult to manage stipulated task of teaching, research and extension activities as per the mandate set-forth through a single University in the state.  Besides this, it provides new fillip to location specific programmes more suited to tribal belt specifically for the southern Rajasthan. The University started functioning in full swing with effect from December 1, 1999.</Text>


       <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>The jurisdiction of the university include constituent colleges, Agricultural Research Stations (ARSs), Agricultural Research Sub Stations (ARSSs), Livestock Research Station (LRS), Dryland Farming Research Station (DFRS),  and Krishi Vigyan Kendras (KVKs) spread over 7 districts of the south and south eastern part of the state of Rajasthan. These districts are Udaipur, Rajsamand, Dungarpur, Banswara, Chittorgarh, Bhilwara and Pratapgarh..</Text>



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