import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import ActionButton from 'react-native-action-button';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

class CentrosScreen extends React.Component {
  static navigationOptions = {
       title: 'Centros Comerciales',
       headerTitleStyle : {textAlign: 'center', alignSelf:'center', fontSize: 18, fontWeight: 'normal', color: '#3E3E40' },
       headerStyle:{
           backgroundColor:'white',
       },
       };
  constructor(props) {
    super(props);
    this.state = {
      shareTitle: "Comparte un mapa",
      popupText: "¡Envía el mapa del lugar que quieres agregar (o actualízalo) y lo subiremos a la App!",
      linkText: "maps@quopard.com",
      contribuir: "También puedes colaborar creando mapas con otros usuarios mediante:",
    };
  }
  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
            <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} width={0.85} height={0.65} dialogStyle={{marginBottom:85}} dialogAnimation={slideAnimation}>
              <View style={styles.popupContent}>
                  <Image source={require('../images/share_cover.png')} style={styles.shareCover}/>
                  <Text style={styles.shareTitle}>
                  {this.state.shareTitle}{'\n'}
                  </Text>
                  <Text style={styles.popupText}>
                  {this.state.popupText}{'\n'}
                  </Text>
                  <Text style={styles.linkText}>
                  {this.state.linkText}{'\n'}
                  </Text>
                  <Text style={styles.popupText}>
                  {this.state.contribuir}{'\n'}
                  </Text>
                  <View style={styles.button}>
                  <Button onPress={()=> this.props.navigation.navigate('drive')}
                      title="Drive"
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
            </PopupDialog>
        <ScrollView>
        <View style={styles.content}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('centro_sf')}>
            <Image source={require('../images/centro_santa_fe.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('antara_fh')}>
            <Image source={require('../images/antara.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('reforma222')}>
            <Image source={require('../images/reforma222.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('galerias_perisur')}>
            <Image source={require('../images/perisur.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('parque_duraznos')}>
            <Image source={require('../images/parque_duraznos.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('antea')}>
            <Image source={require('../images/antea.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('galerias_atizapan')}>
            <Image source={require('../images/galerias_atizapan.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        </View>
        </ScrollView>
        <ActionButton onPress={() => {this.popupDialog.show();}} buttonColor="#FF636E"/>
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
  popupContent: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  shareCover:{
    width: 300,
    height: 170,
  },
  shareTitle:{
    marginTop: 12,
    fontSize: 18,
    color: '#3E3E40',
  },
  linkText:{
    marginTop: 10,
    color: '#3e78d6',
  },
  popupText:{
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    textAlign: 'center'
  },
  button: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 10,
  },
});
