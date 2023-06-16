import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Text,
  NativeBaseProvider,
  Heading,
  Box,
  HStack,
  Stack,
  VStack,
  Input,
  Button,
  Divider,
  Image,
} from 'native-base';
import MenuBar from './TabBottom';
import {SliderBox} from 'react-native-image-slider-box';

const images = [
  require('../Assets/slideshow1.jpeg'),
  require('../Assets/slideshow2.jpeg'),
  require('../Assets/slideshow3.jpeg'),
];
const onCurrentImagePressed = index => {
  console.warn(`image ${index} pressed`);
};
const HomeScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="black" width="100%" height="100%">
        <Box pt="20" mb="10">
          <SliderBox
            images={images}
            onCurrentImagePressed={onCurrentImagePressed}
          />
        </Box>
        <VStack space={10}>
          <HStack alignItems="center" justifyContent="center" space={20}>
            <VStack alignItems="center" justifyContent="center">
              <Image
                source={require('../Assets/jualbeli.jpeg')}
                size="lg"
                alt={'Logo Apk'}
              />
              <Text color="white">Jual Beli</Text>
            </VStack>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PesanTopUp');
              }}>
              <VStack alignItems="center" justifyContent="center">
                <Image
                  source={require('../Assets/topUp.png')}
                  size="lg"
                  alt={'Logo Apk'}
                />
                <Text color="white">Top Up</Text>
              </VStack>
            </TouchableOpacity>
          </HStack>
          <HStack alignItems="center" justifyContent="center" space={20}>
            <VStack alignItems="center" justifyContent="center">
              <Image
                source={require('../Assets/game.png')}
                size="lg"
                alt={'Logo Apk'}
              />
              <Text color="white">Mabar</Text>
            </VStack>
            <VStack alignItems="center" justifyContent="center">
              <Image
                source={require('../Assets/lainnya.png')}
                size="lg"
                alt={'Logo Apk'}
              />
              <Text color="white">Lainnya</Text>
            </VStack>
          </HStack>
        </VStack>
        <Box mt="40%">
          <MenuBar />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
