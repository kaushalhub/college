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
        <Text style={{flex:1,alignItems:'center',justifyContent:'center',color:'blue',fontSize:18,marginTop:10,marginBottom:10}}>Vision and Mission</Text>


        <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>The university's main objective is to train need based quality human resource in consonance with need of the public and private sector organizations, conduct basic and applied research to solve both the existing and long term problems; and arrange Human Resource Development (HRD) programmes for effective transfer of technology to the officers and supervisory staff of the Departments of Agriculture, Horticulture, Forestry, Soil Conservation and Watershed Management, Animal Husbandry, etc. The specific objectives are as follows:</Text>

        <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>
        The extension and research programmes have regional functions and are based upon priorities and requirements of identified micro-farming situations in three agro-climatic zones of the state.
        </Text>
        <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>
        To achieve the above objectives, the university has made untiring efforts and all developmental plans were strategically and effectively implemented, which resulted into rapid and systematic progress in all spheres of teaching, research and extension.  The university has a good status among the Agricultural Universities in the country. This has become possible with the unstinted and genuine support of Government of Rajasthan and the Indian Council of Agricultural Research.  University is now actively involved in upliftment of socio-economic conditions of farming community particularly tribal in the south and south eastern Rajasthan by promoting efficiency in use of natural resources, ecological security and sustainability in productivity by crop diversification, quality seed production etc. Concerted efforts are being made on utilization of indigenous resources of energy, integrated nutrient management involving bio-fertilizers and vermi-composting, diversification of cropping systems, integrated pest management, judicious use of scarcely available irrigation water, rainwater harvesting management, processing and value addition, farm mechanization, women empowerment and ergonomics of farm women, entrepreneurial promotion, livestock improvement and production in order to attain a sustainable farming system. The university also supports the Commission for Agricultural Costs and Prices with the data base for cost of production estimates of major crops required for minimum support price policy of the Government of India.
        </Text>
        <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>
        To start with, Rajasthan College of Agriculture (RCA), College of Community and Applied Sciences (CCASc), College of Technology and Engineering (CTAE), College of Dairy and Food Science Technology (CDFST) at the erstwhile Udaipur campus of Rajasthan Agricultural University, Bikaner, Agricultural Research Stations, Sub-Stations, Livestock Research Stations as well as Krishi Vigyan Kendras in 10 districts in earmarked service area of the university were transferred along with staff and facilities to this newly created University as its constituent units. Later on the College of Horticulture and Forestry at Jhalawar (CHF) in 2004 and the College of Fisheries at Udaipur in 2010 were established. In order to address the socio-economic and policy planning research related  issues of agriculture and allied areas a separate cell named as “Socio-Economic and Agricultural Policy Planning Research Cell” has been established in the university. 
        </Text>
        <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>
        The university has a full fledged Directorate of Research with comprehensive infrastructure for research both at headquarters and at different research stations. A number of research projects are in progress where in postgraduate students do participate by taking up their research problems under the main project with a specific objective(s). Many a times, the postgraduate students get financial help also in the form of research fellowship as provided in the project.
        </Text>

        <Text style={{color:'black',fontSize:14,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20}}>
        The Directorate of Extension Education is another important component of the university responsible for the development of extension education processes and transfer of technology to the stake holders. Farm advisory service, organization of field days, various trainings etc. through a number of Krishi Vigyan Kendras  are some of the major activities of the directorate.
        Keeping in view the above extensive academic programmes, the university has created a Directorate of Student’s Welfare with the aim to plan and organize the co-curricular activities for the students at the University and College level. The main objectives of the Directorate are to coordinate different activities of NCC, NSS, Sports, Literary, Cultural, Moral Education, Placement and Counseling etc. to facilitate the overall personality development and to inculcate the basic values amongst the young students of the university to groom them as a good citizen of the nation. The Directorate is also supervising the Students’ Union activities to allow them to work in a democratic way to solve the genuine problems of the students and to bridge the gap between the students and university administration.
        </Text>


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