import {StyleSheet, TouchableOpacity} from 'react-native';
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
import {SliderBox} from 'react-native-image-slider-box';
import TabBottom from './TabBottom';
import MenuBar from './TabBottom';

const asasa = ({navigation}) => {
  const images = [
    require('../Assets/slideshow1.jpeg'),
    require('../Assets/slideshow2.jpeg'),
    require('../Assets/slideshow3.jpeg'),
  ];
  const onCurrentImagePressed = index => {
    console.warn(`image ${index} pressed`);
  };

  return (
    <NativeBaseProvider>
      <Box>
        <Box pt="20">
          {/* <SliderBox
            images={images}
            onCurrentImagePressed={onCurrentImagePressed}
          /> */}
        </Box>
        <HStack alignItems="center" justifyContent="center" space={30}>
          <VStack alignItems="center" justifyContent="center">
            <Image
              source={require('../Assets/jualbeli.jpeg')}
              size="lg"
              alt={'Logo Apk'}
            />
            <Text>Jual Beli</Text>
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
              <Text>Top Up</Text>
            </VStack>
          </TouchableOpacity>
        </HStack>
        <HStack alignItems="center" justifyContent="center" space={30}>
          <VStack alignItems="center" justifyContent="center">
            <Image
              source={require('../Assets/jualbeli.jpeg')}
              size="lg"
              alt={'Logo Apk'}
            />
            <Text>Mabar</Text>
          </VStack>
          <VStack alignItems="center" justifyContent="center">
            <Image
              source={require('../Assets/game.png')}
              size="lg"
              alt={'Logo Apk'}
            />
            <Text>Lainnya</Text>
          </VStack>
        </HStack>
      </Box>

      <Box mt="50%">
        <MenuBar />
      </Box>
    </NativeBaseProvider>
  );
};

export default asasa;

const styles = StyleSheet.create({});
