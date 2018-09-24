import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

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
import parques from './layouts/Layout_Parks';
import parque_mex from './layouts/layout_parquemex';
import feedback from './layouts/Layout_Feedback.js';
import antea from './layouts/Layout_Antea.js';
import reforma222 from './layouts/Layout_Reforma222.js';
import aicm_t1 from './layouts/Layout_aicm_t1';
import aicm_t2 from './layouts/Layout_aicm_t2';
import aicm_full from './layouts/Layout_aicm_full';
import Aeropuertos from './layouts/Layout_Airports.js';
import galerias_atizapan from './layouts/Layout_GaleriasAtizapan.js';
import parque_duraznos from './layouts/Layout_ParqueDuraznos';
import galerias_perisur from './layouts/Layout_GaleriasPerisur.js';
import ibero_cdmx from './layouts/Layout_ibero_cdmx.js';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
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
  parques: parques,
  parque_mex: parque_mex,
  feedback: feedback,
  antea: antea,
  reforma222: reforma222,
  Aeropuertos: Aeropuertos,
  aicm_full: aicm_full,
  aicm_t1: aicm_t1,
  aicm_t2: aicm_t2,
  galerias_atizapan: galerias_atizapan,
  parque_duraznos: parque_duraznos,
  galerias_perisur: galerias_perisur,
  ibero_cdmx: ibero_cdmx,
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
