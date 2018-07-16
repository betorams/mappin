import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

class proximamente extends React.Component {

  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
          <Image source={require('../images/proximamente_cover.png')} style={styles.cover}/>
        </View>
    );
  }
}

export default proximamente;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
    alignItems: "stretch"
  },
  cover: {
    flex: 1,
    width: null,
    resizeMode: 'cover'
  },
});
