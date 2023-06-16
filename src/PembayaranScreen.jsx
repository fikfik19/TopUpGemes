import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Checkbox,
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
  Button,
  Input,
  ScrollView,
} from 'native-base';

const PembayaranScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="black" width="100%" height="100%" px="5" pt="10">
        <HStack alignItems="center" justifyContent="center">
          <Image
            source={require('../Assets/mobilelegend.png')}
            size="xl"
            alt={'Logo Apk'}
          />
          <VStack justifyContent="center" space={2}>
            <Heading size="2xl" color="white">
              Mobile
            </Heading>
            <Heading size="2xl" color="white">
              Legend
            </Heading>
          </VStack>
        </HStack>
        <Box bg="white" px="8" my="5">
          <Center py="4">
            <Image
              source={require('../Assets/ovo.png')}
              size="2xl"
              width={'180'}
              height="55"
              alt={'Logo Apk'}
            />
            <Text fontSize="xl">Ovo</Text>
            <Text fontSize="lg">Jumlah Total</Text>
            <Heading size="2xl">Rp. 23.000</Heading>
            <View style={styles.container} space={5} my="1">
              <Text>Item :</Text>
              <Text>77 Diamond + 8 Bonus </Text>
            </View>
            <View style={styles.container} space={5} my="1">
              <Text>Jumlah Transaksi :</Text>
              <Text>Rp. 23.000 </Text>
            </View>
            <View style={styles.container} space={5} my="1">
              <Text>Nomor Telepon :</Text>
            </View>
            <Divider />
          </Center>
          <Text fontSize="xs">
            Nomor telepon Anda akan digunakan sebagai bukti pembelian
          </Text>
          <Checkbox value="Software Development" size="md">
            Software Development
          </Checkbox>
          <Center py="3">
            <Button
              onPress={() => {
                navigation.navigate('TransaksiBerhasil');
              }}
              bg="#FF9900"
              width="200">
              Konfirmasi
            </Button>
          </Center>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default PembayaranScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
