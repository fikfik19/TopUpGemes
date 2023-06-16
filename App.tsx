/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SplashScreen from './src/SplashScreen';
import LoginScreen from './src/LoginScreen';
import RegistrasiScreen from './src/RegistrasiScreen';
import DaftarFacebook from './src/DaftarFacebook';
import DaftarGoogle from './src/DaftarGoogle';
import HomeScreen from './src/HomeScreen';
import PesanTopUp from './src/PesanTopUp';
import TopUpScreen from './src/TopUpScreen';
import DetailPesananScreen from './src/DetailPesananScreen';
import PembayaranScreen from './src/PembayaranScreen';
import TransaksiBerhasil from './src/TransaksiBerhasil';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    // <>
    //   <SplashScreen />
    // </>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrasiScreen"
          component={RegistrasiScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DaftarFacebook"
          component={DaftarFacebook}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DaftarGoogle"
          component={DaftarGoogle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PesanTopUp"
          component={PesanTopUp}
          options={{
            title: 'Mobile Legend',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="TopUpScreen"
          component={TopUpScreen}
          options={{
            title: 'Top Up',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="DetailPesananScreen"
          component={DetailPesananScreen}
          options={{
            title: 'Mobile Legend',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="PembayaranScreen"
          component={PembayaranScreen}
          options={{
            title: 'Detail Pesanan',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="TransaksiBerhasil"
          component={TransaksiBerhasil}
          options={{
            title: 'Detail Pesanan',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
