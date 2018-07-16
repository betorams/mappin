import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, WebView } from 'react-native';

class drive extends React.Component {

  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
            <WebView
                source={{uri: 'https://drive.google.com/drive/folders/1znB2LCUAKnRMlOP85ociGwooxkaTgr8T?usp=sharing'}}
            />
        </View>
    );
  }
}

export default drive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
  },

});
