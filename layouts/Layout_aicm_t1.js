import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, WebView, ActivityIndicator } from 'react-native';

class aicm_t1 extends React.Component {

  static navigationOptions = {
       title: 'Terminal 1',
       headerTitleStyle :{textAlign: 'center', alignSelf:'center', fontSize: 18, fontWeight: 'normal', color: '#3E3E40' },
       headerStyle:{
           backgroundColor:'white',
       },
   };

  ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color='black'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
            <WebView
                source={{uri: 'https://mapin.io/aicm_t1_page/'}}
                scalesPageToFit = {false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                renderLoading={this.ActivityIndicatorLoadingView}
                startInLoadingState={true}
            />
        </View>
    );
  }
}

export default aicm_t1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 25,
  },
  shareText:{
    color:'#95989A',
    fontSize: 12
  },
  ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
