import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, WebView } from 'react-native';

class centro_sf extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      titleText: " -  Actualiza este mapa  - ",
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
            <WebView
                source={{uri: 'http://mapin.io/centro_santa_fe_page/'}}
            />
            <View style={styles.footer}>
              <Text style={styles.shareText} onPress={()=> this.props.navigation.navigate('form')}>
                {this.state.titleText}{'\n'}
              </Text>
            </View>
        </View>
    );
  }
}

export default centro_sf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 10,

  },
  shareText:{
    color:'#95989A',
    fontSize: 12
  }
});