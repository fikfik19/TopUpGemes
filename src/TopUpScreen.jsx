import {StyleSheet, TouchableOpacity} from 'react-native';
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
  VStack,
  Icon,
} from 'native-base';

const TopUpScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="black" width="100%" height="100%" px="5" pt="10">
        <Input
          placeholder="Cari Nama Game"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          InputRightElement={
            <Image
              source={require('../Assets/search.png')}
              size="xs"
              alt={'Logo Apk'}
            />
          }
        />
        <HStack alignItems="center" justifyContent="center" space={20} py="10">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PesanTopUp');
            }}>
            <VStack alignItems="center" justifyContent="center">
              <Image
                source={require('../Assets/mobilelegend.png')}
                size="sm"
                alt={'Logo Apk'}
              />
              <Text color="white" fontSize="lg">
                Mobile
              </Text>
              <Text color="white" fontSize="lg">
                legend
              </Text>
            </VStack>
          </TouchableOpacity>

          <VStack alignItems="center" justifyContent="center">
            <Image
              source={require('../Assets/mobilelegend.png')}
              size="sm"
              alt={'Logo Apk'}
            />
            <Text color="white" fontSize="lg">
              PUBG
            </Text>
            <Text color="white" fontSize="lg"></Text>
          </VStack>
          <VStack alignItems="center" justifyContent="center">
            <Image
              source={require('../Assets/mobilelegend.png')}
              size="sm"
              alt={'Logo Apk'}
            />
            <Text color="white" fontSize="lg">
              Mobile
            </Text>
            <Text color="white" fontSize="lg">
              legend
            </Text>
          </VStack>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default TopUpScreen;

const styles = StyleSheet.create({});
