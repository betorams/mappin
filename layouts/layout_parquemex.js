import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, WebView, ActivityIndicator } from 'react-native';

class parque_mex extends React.Component {

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
                source={{uri: 'https://mapin.io/parque-la-mexicana-page/'}}
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

export default parque_mex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
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
