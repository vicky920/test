import React from 'react';

import {View,Text,StyleSheet} from 'react-native'

const ThirdScreen = () => {
 return (
    <View style ={styles.container}>
    <Text style ={styles.title}>
            This is HomeScreen
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
export default ThirdScreen;