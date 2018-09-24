import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, WebView, ImageBackground } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Icon, Header, Button } from 'react-native-elements';

class feedback extends React.Component {
  static navigationOptions = {
      header: null,
    }
    constructor(props) {
     super(props);
     this.state = {
       titleText: "Envíanos tus comentarios",
       subTitle: "Tu opinión en muy importante para nosotros, envíanos un email y dinos lo que piensas.",
       bodyText: "maps@quopard.com",
     };
   }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          backgroundColor='#51C0F5'
          barStyle='light-content'/>
          <ImageBackground source={require('../images/backgroud_quopard.png')} style={styles.cover}>
          <View style={styles.topElements}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
               <Icon style={styles.navItem} name="arrow-left" type="feather" size={25} color="#fff"/>
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
              <TouchableOpacity>
              <Image source={require('../images/quopard_inc.png')} style={{width: 150, height: 50, marginTop: 35}}/>
              </TouchableOpacity>
          </View>
          <View style={styles.titles}>
            <Text style={styles.titleText}>
            {this.state.titleText}{'\n'}
            </Text>
            <Text style={styles.subTitle}>
            {this.state.subTitle}{'\n'}
            </Text>
            <Text style={styles.bodyText}>
            {this.state.bodyText}{'\n'}
            </Text>
          </View>
          </ImageBackground>
       </View>
      );
   }
 }

export default feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
    alignItems: "stretch"
  },
  cover: {
    flex: 1,
    width: null,
  },
  topElements: {
    flexDirection: 'row',
    marginTop: 18,
    paddingHorizontal: 15,
    alignItems:'center',
    justifyContent: 'space-between'
  },
  titles: {
    flexDirection:'column',
    alignItems:'center',
    margin: 55
  },
  titleText: {
    marginTop: 15,
    fontSize: 17,
    color: '#808080',
    alignItems: 'center',
    marginBottom: 20,
  },
  subTitle: {
    marginTop: 15,
    fontSize: 15,
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
  },
  bodyText: {
    marginTop: 45,
    fontSize: 18,
    color: '#fff',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  icon: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
