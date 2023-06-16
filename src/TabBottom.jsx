import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        elevation: 3,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 5,
        width: '100%',
        height: '30%',
      }}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Icon name="home" size={23} color="#0082F7" /> */}
        <Text style={{fontSize: 12}}>Beranda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Icon name="calendar" size={23} color="#bdbdbd" /> */}
        <Text style={{fontSize: 12}}>Transaksi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Icon name="chatbubbles" size={23} color="#bdbdbd" /> */}
        <Text style={{fontSize: 12}}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
