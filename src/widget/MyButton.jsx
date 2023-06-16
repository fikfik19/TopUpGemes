import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
// import {Image} from 'native-base';

const MyButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={props.images} />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    padding: 7,
    width: '50%',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default MyButton;
