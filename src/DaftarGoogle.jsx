import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Card,
  Center,
  Image,
  NativeBaseProvider,
  Heading,
  Box,
  VStack,
  HStack,
  Avatar,
  Text,
  Divider,
  Container,
} from 'native-base';

const DaftarGoogle = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="white" height="100%" width="100%" py="10">
        <VStack>
          <Image
            source={require('../Assets/logoGoogle.png')}
            size="lg"
            alt={'Logo Apk'}
            width={'150'}
            height="50"
          />
          <Heading py="5" px="5">
            Choose an account
          </Heading>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Box width="100%" height="150">
              <HStack alignItems="center" px="5" py="5">
                <Image
                  source={require('../Assets/logoGmail.png')}
                  size="lg"
                  alt={'Logo Apk'}
                />
                <VStack pl="3">
                  <Heading>deTurtle</Heading>
                  <Text>deturtle@gmail.com</Text>
                </VStack>
              </HStack>
              <Divider />
            </Box>
          </TouchableOpacity>
          <Center>
            <Text>Sign in to another account</Text>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default DaftarGoogle;

const styles = StyleSheet.create({});
