import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Icon, Header, Button } from 'react-native-elements';
import { SplashScreen } from 'react-native-splash-screen';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

class HomeScreen extends React.Component {

   static navigationOptions = {
      header: null,
   }

   constructor(props) {
    super(props);
    this.state = {
      shareTitle: "Comparte un mapa",
      titleText: "¿Qué es lo que buscas?",
      bodyText: 'Encuentra el lugar que quieres con nuestros mapas interactivos.',
      popupText: "¡Envía el mapa del lugar que quieres agregar (o actualízalo) y lo subiremos a la App!",
      linkText: "maps@quopard.com",
      feedback: "Contacto",
      drives: "Drive",
      contribuir: "También puedes colaborar creando mapas con otros usuarios mediante:",
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
                   <TouchableOpacity onPress={() => {this.popupDialog.show();}}>
                      <Icon style={styles.navItem} name="map-pin" type="feather" size={25} color="#4f4d4c" marginRight={15}/>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => {this.popupSettings.show();}}>
                      <Icon style={styles.navItem} name="dots-three-vertical" type="entypo" size={20} color="#4f4d4c" marginTop={2}/>
                   </TouchableOpacity>
               </View>
              </View>
              <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} width={0.85} height={0.65} dialogAnimation={slideAnimation}>
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
              <PopupDialog ref={(popupDialog) => { this.popupSettings = popupDialog; }} width={0.55} height={0.25} dialogAnimation={slideAnimation}>
                <View style={styles.SettingsContent}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('feedback')}>
                <View style={styles.IconSettings}>
                <Icon name="edit" type="feather" size={25} color="#4f4d4c" marginRight={8}/>
                <Text style={styles.feedbackText}>
                {this.state.feedback}{'\n'}
                </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('drive')}>
                <View style={styles.IconSettings}>
                <Icon name="social-drive" type="foundation" size={30} color="#4f4d4c" marginRight={8}/>
                <Text style={styles.driveText}>
                {this.state.drives}{'\n'}
                </Text>
                </View>
                </TouchableOpacity>
                </View>
              </PopupDialog>
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
          <Image source={require('../images/centros.png')} style={{width:320, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Universidades')}>
          <Image source={require('../images/universidades.png')} style={{width:320, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Aeropuertos')}>
          <Image source={require('../images/aeropuertos.png')} style={{width:320, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('parques')}>
          <Image source={require('../images/parques.png')} style={{width:320, height: 230, marginTop: 21}} borderRadius={5}/>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Image source={require('../images/copyright.png')} style={{ width: 147, height: 16 }}/>
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
  popupContent: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  shareCover:{
    width: 300,
    height: 170,
  },
  cover: {
    width: null,
    height: 265,
    resizeMode: 'cover'
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
  IconSettings:{
    flexDirection: 'row',
    marginBottom: 15,
  },
  SettingsContent:{
    marginTop: 50,
    alignItems:'center',
    flexDirection:'column',
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
  },
  driveText:{
    marginTop: 5,
  },
  feedbackText:{
    marginTop: 5,
  },
  button: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 10,
  },
});
