import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, WebView } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Icon, Header, Button } from 'react-native-elements';

class form extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
   super(props);
   this.state = {
     titleText: "Comparte un mapa",
     subTitle: "¿Cómo funciona?",
     bodyText: "En Mapin queremos que nos ayudes a servir a miles de personas subiendo un mapa creado por ti, actualizando mapas ya hechos o ayudando a otros usuarios a crear nuevos. Si quieres unirte al equipo de mapas ingresa al Drive haciendo click abajo."
   };
 }

  render() {
    return (
        <View style={styles.container}>
        <View style={styles.topElements}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
             <Icon style={styles.navItem} name="arrow-left" type="feather" size={25} color="#4f4d4c"/>
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
          <Image source={require('../images/logo.png')} style={{width: 70, height: 70, marginTop: 35}}/>
          </TouchableOpacity>
          <View style={styles.titles}>
            <Text style={styles.titleText}>
            {this.state.titleText}{'\n'}
            </Text>
          </View>
        </View>
        <View style={styles.optionGrid}>
          <Image source={require('../images/comparte.png')} style={{width: 110, height: 90}} borderRadius={5}/>
          <Image source={require('../images/actualiza.png')} style={{width: 110, height: 90}} borderRadius={5}/>
          <Image source={require('../images/contribuye.png')} style={{width: 110, height: 90}} borderRadius={5}/>
        </View>
        <View style={styles.instructions}>
          <Text style={styles.guideText}>
          {this.state.subTitle}{'\n'}
          </Text>
          <Text style={styles.description}>
          {this.state.bodyText}
          </Text>
        </View>
        <View style={styles.button}>
        <Button onPress={()=> this.props.navigation.navigate('drive')}
            title="¡Quiero ayudar!"
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "#61DBBB",
              width: 185,
              height: 50,
              borderColor: "transparent",
              borderWidth: 2,
              borderRadius: 30
            }}
            containerStyle={{ marginTop: 20 }}
            />
        </View>
       </View>
    );
  }
}

export default form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topElements: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 18,
  },
  icon: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 15,
    fontSize: 15,
    color: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    },
    optionGrid: {
    marginTop: 40,
    marginLeft: 23,
    marginRight: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guideText: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 13,
    color: '#000',
  },
  description: {
    marginLeft: 23,
    marginRight: 23,
  },
  button: {
    marginTop: 65,
    flexDirection: 'column',
    alignItems: 'center',
  }
});
