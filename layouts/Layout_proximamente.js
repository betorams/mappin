import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Icon, Header, Button } from 'react-native-elements';

class proximamente extends React.Component {

  render() {
    return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor='#F1F1F1'
            barStyle='dark-content'/>
          <ImageBackground source={require('../images/proximamente_cover.png')} style={styles.cover}>
          <View style={styles.button}>
            <Button onPress={()=> this.props.navigation.navigate('form')}
                title="Comparte un mapa"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  width: 185,
                  height: 50,
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 30
                }}
                containerStyle={{ marginTop: 20 }}
                />
            </View>
          </ImageBackground>
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
  },
  button: {
    marginTop: 375,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  }
});
