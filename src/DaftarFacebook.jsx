import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Flex,
  Center,
  NativeBaseProvider,
  Heading,
  Box,
  VStack,
  Input,
  Button,
} from 'native-base';

const DaftarFacebook = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="#385899" px="5">
        <Flex justifyContent="center" height="100%">
          <Center mb="20">
            <Heading size="3xl" color="white">
              facebook
            </Heading>
          </Center>
          <VStack space={4} mb="10">
            <Input
              bg="white"
              variant="outline"
              placeholder="Email or phone number"
            />
            <Input
              bg="white"
              variant="outline"
              placeholder="Enter your Password"
            />
          </VStack>
          <Button
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            width="100%"
            height="50">
            Log in
          </Button>
          <Center>
            <Heading size="md" color="white" mt="10">
              Sign up with facebook
            </Heading>
          </Center>
        </Flex>
      </Box>
    </NativeBaseProvider>
  );
};

export default DaftarFacebook;

const styles = StyleSheet.create({});
