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
  shareText:{
    color:'#95989A',
    fontSize: 12
  }
});
