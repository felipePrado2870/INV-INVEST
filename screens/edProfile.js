import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EddtProfileScreen({navigation}) {
  function buttonPress() {
    navigation.goBack();
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1:{
      fontSize:15,
      color: '#fff'
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> Edd Profile</Text>
    </View>
  );
}

export default EddtProfileScreen;