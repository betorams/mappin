import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, WebView } from 'react-native';

class antara_fh extends React.Component {

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
                source={{uri: 'http://mapin.io/antara_fashion_hall/'}}
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

export default antara_fh;

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
