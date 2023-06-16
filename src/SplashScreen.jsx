import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Flex, Text, NativeBaseProvider, Heading, Box, Image} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
  });

  return (
    <NativeBaseProvider>
      <Box bg="black">
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Image
            source={require('../Assets/splasshScreen.png')}
            size="2xl"
            alt={'Logo Apk'}
          />
        </Flex>
      </Box>
    </NativeBaseProvider>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({});
