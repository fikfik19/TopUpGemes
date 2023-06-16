import {StyleSheet, StatusBar} from 'react-native';
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

const PesanTopUp = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Box width="100%" height="100%" bg="black" px="10">
        <ScrollView>
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
              <Heading size="lg" color="#FFC700">
                Cara Memesan?
              </Heading>
            </VStack>
          </HStack>
          <Box bg="#333232" my="4">
            <HStack space={3}>
              <Box bg="#FFC700" width="10%">
                <Center>
                  <Heading color="white">1</Heading>
                </Center>
              </Box>
              <Heading color="white">Masukan User ID</Heading>
            </HStack>
            <VStack px="2" py="5" space={3}>
              <Input size="lg" placeholder="Masukan User ID" />
              <Input size="lg" placeholder="Zone ID" />
            </VStack>
          </Box>
          <Box bg="#333232" my="4">
            <HStack space={3}>
              <Box bg="#FFC700" width="10%">
                <Center>
                  <Heading color="white">2</Heading>
                </Center>
              </Box>
              <Heading color="white"> Kupon</Heading>
            </HStack>
            <VStack px="2" py="5" space={3}>
              <Input size="lg" placeholder="Kode Kupon" />
              <Button
                onPress={() => console.log('hello world')}
                width={'100'}
                bg="#FFC700">
                Click Me
              </Button>
              <Text color="white" pt="2">
                Pembelian tetap dapat dilakukan tanpa menggunakan kupon
              </Text>
            </VStack>
          </Box>
          <Box bg="#333232" my="4">
            <HStack space={3}>
              <Box bg="#FFC700" width="10%">
                <Center>
                  <Heading color="white">3</Heading>
                </Center>
              </Box>
              <Heading color="white">Pilih Nominal TopUp</Heading>
            </HStack>
            <VStack px="2" py="5" space={3}>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">5 Diamonds</Text>
                    <Text color="white">+ 0 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">11 Diamonds</Text>
                    <Text color="white">+ 1 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">17 Diamonds</Text>
                    <Text color="white">+ 2 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">25 Diamonds</Text>
                    <Text color="white">+ 3 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">33 Diamonds</Text>
                    <Text color="white">+ 3 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">40 Diamonds</Text>
                    <Text color="white">+ 4 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">77 Diamonds</Text>
                    <Text color="white">+ 6 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">67 Diamonds</Text>
                    <Text color="white">+ 7 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">77 Diamonds</Text>
                    <Text color="white">+ 8 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">154 Diamonds</Text>
                    <Text color="white">+ 16 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">167 Diamonds</Text>
                    <Text color="white">+ 18 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">200 Diamonds</Text>
                    <Text color="white">+ 37 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">217 Diamonds</Text>
                    <Text color="white">+ 23 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">256 Diamonds</Text>
                    <Text color="white">+ 40 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">333 Diamonds</Text>
                    <Text color="white">+ 37 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">367 Diamonds</Text>
                    <Text color="white">+ 41 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">503 Diamonds</Text>
                    <Text color="white">+ 65 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">774 Diamonds</Text>
                    <Text color="white">+ 101 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">1003 Diamonds</Text>
                    <Text color="white">+ 156 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">1708 Diamonds</Text>
                    <Text color="white">+ 302 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">4003 Diamonds</Text>
                    <Text color="white">+ 827 Diamonds</Text>
                  </Center>
                </Box>
                <Box
                  borderWidth="2"
                  borderColor="#FFC700"
                  p="5"
                  mx="2"
                  rounded="lg">
                  <Center>
                    <Text color="white">5003 Diamonds</Text>
                    <Text color="white">+ 1047 Diamonds</Text>
                  </Center>
                </Box>
              </HStack>
            </VStack>
          </Box>
          <Box bg="#333232" my="4">
            <HStack space={3}>
              <Box bg="#FFC700" width="10%">
                <Center>
                  <Heading color="white">4</Heading>
                </Center>
              </Box>
              <Heading color="white"> Pilih Pembayaran</Heading>
            </HStack>
            <HStack alignItems="center" justifyContent="center" py="5">
              <Box
                borderWidth="2"
                borderColor="#FFC700"
                p="3"
                mx="1"
                rounded="lg">
                <HStack alignItems="center" justifyContent="center" space={3}>
                  <Image
                    source={require('../Assets/ovo.png')}
                    alt={'Logo Apk'}
                  />
                  <Text color="white">Rp 23.000</Text>
                </HStack>
              </Box>
              <Box
                borderWidth="2"
                borderColor="#FFC700"
                p="3"
                mx="1"
                rounded="lg">
                <HStack alignItems="center" justifyContent="center" space={3}>
                  <Image
                    source={require('../Assets/dana.png')}
                    alt={'Logo Apk'}
                  />
                  <Text color="white">Rp 23.000</Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box bg="#333232" my="4">
            <HStack space={3}>
              <Box bg="#FFC700" width="10%">
                <Center>
                  <Heading color="white">5</Heading>
                </Center>
              </Box>
              <Heading color="white"> Email</Heading>
            </HStack>
            <VStack px="2" py="5" space={3}>
              <Input size="lg" placeholder="Kode Kupon" />
              <Text color="white" pt="2">
                Mohon mengisi alamat email anda, untuk menerima bukti pembayaran
              </Text>
              <Center>
                <Button
                  onPress={() => {
                    navigation.navigate('DetailPesananScreen');
                  }}
                  width="200"
                  bg="#FFC700"
                  px="3">
                  Bayar Sekarang
                </Button>
              </Center>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

export default PesanTopUp;

const styles = StyleSheet.create({});
