import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './layouts/Layout_Home';
import UniversitiesScreen from './layouts/Layout_Universities';
import CentrosScreen from './layouts/Layout_CC';
import csf_a1 from './layouts/Layout_csf_a1';
import csf_a2 from './layouts/Layout_csf_a2';
import csf_a3 from './layouts/Layout_csf_a3';
import csf_full from './layouts/Layout_csf_full';
import proximamente from './layouts/Layout_proximamente';
import form from './layouts/Layout_form';
import drive from './layouts/Layout_drive';
import centro_sf from './layouts/layout_CentroSF';
import antara_fh from './layouts/Layout_AntaraFH';

export default class App extends React.Component {
  render() {
    return (
        <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Universidades: UniversitiesScreen,
  csf_full: csf_full,
  csf_a1: csf_a1,
  csf_a2: csf_a2,
  csf_a3: csf_a3,
  proximamente: proximamente,
  form: form,
  drive: drive,
  centros: CentrosScreen,
  centro_sf: centro_sf,
  antara_fh: antara_fh,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    height: 55,
    backgroundColor: '#23282d',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems:'center'
  },
});
