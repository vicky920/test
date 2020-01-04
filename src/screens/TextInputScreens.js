import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const TextInputScreen = () => {
 return (
   <View style ={styles.container}>
       <Text style ={styles.title}>
            This is TextInputScreen
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
    title: {
      fontSize: 25,
      alignItems: 'center',
      fontWeight: 'bold',
      color: 'red',
    },
  });


export default TextInputScreen;