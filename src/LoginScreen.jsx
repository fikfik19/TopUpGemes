import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Text,
  NativeBaseProvider,
  Heading,
  Box,
  Image,
  HStack,
  Stack,
  Input,
  Button,
  Divider,
} from 'native-base';
import MyButton from './widget/MyButton';
import google from '../Assets/google.png';
import facebook from '../Assets/facebook.png';

const LoginScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="black" width="100%" height="100%" px="5" pt="20">
        <Stack justifyContent="center" space={10} alignItems="center">
          <Heading color="white" size="2xl">
            Log in
          </Heading>
          <HStack space={2} justifyContent="center" mx="2">
            <MyButton
              text="Google"
              images={google}
              onPress={() => {
                navigation.navigate('DaftarGoogle');
              }}
            />
            <MyButton
              text="Facebook"
              images={facebook}
              onPress={() => {
                navigation.navigate('DaftarFacebook');
              }}
            />
          </HStack>
          <HStack alignItems="center" px="100">
            <Divider />
            <Text color="white">or</Text>
            <Divider />
          </HStack>
          <Input bg="white" variant="rounded" placeholder="Enter your email" />
          <Input
            bg="white"
            variant="rounded"
            placeholder="Enter your Password"
          />
          <Button
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            width="100%"
            height="50">
            Log in
          </Button>
          <Button
            onPress={() => {
              navigation.navigate('RegistrasiScreen');
            }}
            width="100%"
            height="50">
            Register
          </Button>
        </Stack>
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
