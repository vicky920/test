import React from 'react';

import  {View,StyleSheet,Text,Button} from 'react-native';

const HomeScreen = (props) => {
 return (
  <View style ={styles.container}>
    <Text style ={styles.title}> This is HomeScreen
    </Text>

    <View style={styles.buttonContainer}>  
    <Button style ={styles.button} title= " FlexBox!" onPress={()=>{props.navigation.navigate('Flex')}}/> 
     </View>  




     <View style={styles.buttonContainer}>  
    <Button style ={styles.button} 
    title= " TextInput" 
    onPress={()=>{
     props.navigation.navigate('TextInput')
    }}/> 
     </View>  
    
     <View style={styles.buttonContainer}>  
    <Button style ={styles.button} 
    title= "One" 
    onPress={()=>{
     props.navigation.push('One');
    }}/> 
     </View>  
     
     <View style={styles.buttonContainer}>  

    <Button style ={styles.button} 
    title= "Two" 
    onPress={()=>{
     props.navigation.navigate('Two');
    }}/> 
     </View>  

   <View style={styles.buttonContainer}>  
     
    <Button style ={styles.button} 
    title= "Three" 
    onPress={()=>{
     props.navigation.navigate('Three');
    }}/> 
     </View>  
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
  

  buttonContainer: {  
    margin:15
},  

});


export default HomeScreen;





