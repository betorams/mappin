import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Icon, Header } from 'react-native-elements';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
   constructor(props) {
    super(props);
    this.state = {
      titleText: "¿Qué es lo que buscas?",
      bodyText: 'Encuentra el lugar que quieres con nuestros mapas interactivos.'
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
              <View style={styles.navBar}>
               <Image source={require('../images/logo_full.png')} style={{width:96, height: 28}}/>
               <View style={styles.rightNav}>
                   <TouchableOpacity onPress={()=> this.props.navigation.navigate('form')}>
                      <Icon style={styles.navItem} name="map-pin" type="feather" size={25} color="#4f4d4c"/>
                   </TouchableOpacity>
               </View>
            </View>
        <ScrollView>
          <Image source={require('../images/Header.png')} style={styles.cover}/>
        <View style={styles.content}>
          <View style={styles.titles}>
            <Text style={styles.titleText}>
            {this.state.titleText}{'\n'}
            </Text>
            <Text style={styles.bodyText} numberOfLines={5}>
            {this.state.bodyText}
            </Text>
          </View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('centros')}>
          <Image source={require('../images/centros.png')} style={{width:350, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Universidades')}>
          <Image source={require('../images/universidades.png')} style={{width:350, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('proximamente')}>
          <Image source={require('../images/aeropuertos.png')} style={{width:350, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('proximamente')}>
          <Image source={require('../images/parques.png')} style={{width:350, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Image source={require('../images/copyright.png')} style={{ width: 147 }}/>
        </View>
        </ScrollView>
        </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
  },
  navBar: {
    height: 55,
    backgroundColor: '#fff',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 100
  },
  cover: {
    width: null,
    height: 265,
    resizeMode: 'cover'
  },
  titles:{
    marginTop: 22,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    color: '#3E3E40',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 15,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
  }
});
