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

const TransaksiBerhasil = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box bg="black" width="100%" height="100%" px="5" pt="10">
        <Card width="100%" mt="150">
          <Box bg="#FFC700">
            <Center p="4">
              <Heading>Transaksi Berhasil</Heading>
            </Center>
          </Box>
          <Box bg="#343333">
            <Center my="2">
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
              <Button
                onPress={() => {
                  navigation.navigate('HomeScreen');
                }}
                width={'200'}
                my="5"
                bg="#FFC700">
                Keluar
              </Button>
            </Center>
          </Box>
        </Card>
      </Box>
    </NativeBaseProvider>
  );
};

export default TransaksiBerhasil;

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
