import React from 'react'
import { StyleSheet, Text, View  , Alert, ScrollView, Image , AsyncStorage,ActivityIndicator,StatusBar  } from 'react-native';
import { TextInput , Appbar , Button} from 'react-native-paper';
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Index from './components/Index';
import Footer from './components/Footer';
import History from './components/History';
import Vision from './components/Vision';
import About from './components/About';
import Profile from './components/Profile';
import Research from './components/REsearch';
import Education from './components/Education';
import Student from './components/Student';
import Monitoring from './components/Monitoring';
import Resident from './components/Resident';
import Rajasthan from './components/Rajasthan';
import Honable from './components/Honable';
import HonarVice from './components/HonarVice';


const AppNavigator = createStackNavigator({
 
  Home: {
    screen: Footer,
    navigationOptions: {
      // No header on tab (prevent double header)
      header: null,
      },
    },
      About: {
    screen: About,
    navigationOptions: {
      // No header on tab (prevent double header)
      header: null,
      },
    },



     Profile: {
    screen: Profile,
    navigationOptions: {
      // No header on tab (prevent double header)
      header: null,
      },
    },

 REsearch: {
    screen: Research,
    navigationOptions: {
      // No header on tab (prevent double header)
      header: null,
      },
    },

    Education: {
      screen: Education,
      navigationOptions: {
        // No header on tab (prevent double header)
        header: null,
        },
      },

      Student: {
        screen: Student,
        navigationOptions: {
          // No header on tab (prevent double header)
          header: null,
          },
        },
     
        Monitoring: {
          screen: Monitoring,
          navigationOptions: {
            // No header on tab (prevent double header)
            header: null,
            },
          },

          Resident:{
            screen: Resident,
            navigationOptions:{
              header: null,
            },
          },


          Rajasthan: {
            screen: Rajasthan,
            navigationOptions: {
              header: null,
            },
          },


          History: {
            screen: History,
            navigationOptions:{
              header: null
            },
          },

          Vision: {
            screen: Vision,
            navigationOptions:{
              header: null
            },
          },

          Honable: {
            screen: Honable,
            navigationOptions:{
              header: null
            },
          },

          HonarVice: {
            screen: HonarVice,
            navigationOptions: {
              header: null
            },
          }
   

})



class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('Login');
    console.log("USertoken",userToken)

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'App');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}



export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppNavigator,
      // Auth: AuthStack,
      // Auth1 : AuthStack1
      
    },
    {
      initialRouteName: 'AuthLoading',
 
    }
  )
);