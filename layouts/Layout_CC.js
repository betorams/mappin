import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

class CentrosScreen extends React.Component {
  static navigationOptions = {
       title: 'Centros Comerciales',
       headerTitleStyle :{textAlign: 'center', alignSelf:'center', fontSize: 18, fontWeight: 'normal', color: '#3E3E40' },
       headerStyle:{
           backgroundColor:'white',
       },
   };
  constructor(props) {
    super(props);
    this.state = {
      titleText: " -  Comparte un centro comercial  - ",
    };
  }
  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
        <ScrollView>
        <View style={styles.content}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('centro_sf')}>
            <Image source={require('../images/centro_santa_fe.png')} style={{width:350, height: 230, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('antara_fh')}>
            <Image source={require('../images/antara.png')} style={{width:350, height: 230, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.shareText} onPress={()=> this.props.navigation.navigate('form')}>
            {this.state.titleText}{'\n'}
          </Text>
        </View>
        </ScrollView>
        </View>
    );
  }
}

export default CentrosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
  },
  shareText:{
    color:'#95989A',
    fontSize: 12
  }
});
