import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Header, Button } from 'react-native-elements';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import ActionButton from 'react-native-action-button';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

class UniversitiesScreen extends React.Component {
  static navigationOptions = {
       title: 'Universidades',
       headerTitleStyle :{textAlign: 'center', alignSelf:'center', fontSize: 18, fontWeight: 'normal', color: '#3E3E40' },
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
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('csf_full')}>
            <Image source={require('../images/itesm_csf.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('ibero_cdmx')}>
            <Image source={require('../images/ibero_cdmx.png')} style={{width:320, height: 210, marginTop: 25}} borderRadius={5}/>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.shareText} onPress={()=> this.props.navigation.navigate('form')}>
            {this.state.titleText}{'\n'}
          </Text>
        </View>
        </ScrollView>
        <ActionButton onPress={() => {this.popupDialog.show();}} buttonColor="#FF636E"/>
        </View>
    );
  }
}

export default UniversitiesScreen;

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
    marginTop: 5,
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
