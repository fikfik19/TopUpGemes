import {StyleSheet, View} from 'react-native';
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
  Button,
  Input,
  ScrollView,
} from 'native-base';

const DetailPesananScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="black" width="100%" height="100%" px="5" pt="10">
        <HStack lignItems="center" justifyContent="center">
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
        <Card>
          <Box bg="#FFC700">
            <Center>
              <Heading>Detail Pesanan</Heading>
            </Center>
          </Box>
          <Box bg="#343333">
            <Center my="2">
              <Text color="#469ADD" fontSize="xs">
                Mohon untuk mengecek apakah data anda telah sesuai.
              </Text>
              <View style={styles.container} space={5} my="1">
                <Text>Username :</Text>
                <Text color="white">GGame </Text>
              </View>
              <View style={styles.container} space={5} my="1">
                <Text>ID Game :</Text>
                <Text color="white">123456778(34125) </Text>
              </View>
              <View style={styles.container} space={5} my="1">
                <Text>Nama Item :</Text>
                <Text color="white">77 Diamonds + 8 Bonus </Text>
              </View>
              <View style={styles.container} space={5} my="1">
                <Text>Email :</Text>
                <Text color="white">ggameee@gmail.com </Text>
              </View>
              <View style={styles.container} space={5} my="1">
                <Text>Metode Pembayaran :</Text>
                <Text color="white">Ovo </Text>
              </View>
              <View style={styles.container} space={5} my="1">
                <Text>Total :</Text>
                <Text color="white">Rp. 23.000 </Text>
              </View>
              <HStack space={5} my="5">
                <Button onPress={() => {}} width="100" bg="black">
                  Batal
                </Button>
                <Button
                  onPress={() => {
                    navigation.navigate('PembayaranScreen');
                  }}
                  bg="#FFC700">
                  Bayar Sekarang
                </Button>
              </HStack>
            </Center>
          </Box>
        </Card>
      </Box>
    </NativeBaseProvider>
  );
};

export default DetailPesananScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
