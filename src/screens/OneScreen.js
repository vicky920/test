import React from 'react';

import {View,Text,StyleSheet} from 'react-native'


const OneScreen = () => {
 return (
  <View style ={styles.container}>
    <Text style ={styles.title}>
            This is One Screen
    </Text>
    </View>

 )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

  

});

export default OneScreen;