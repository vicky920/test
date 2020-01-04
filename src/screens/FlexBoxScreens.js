import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';





const FlexBoxScreen = () => {
 return (
<ScrollView>
  <View style ={styles.container1}>

       <View style={styles.boxStyle1}> 
       <Text style={styles.textStyle}> 1 </Text>
       </View>

        <View style={styles.boxStyle2}>
        <Text style={styles.textStyle}> 2 </Text>
           </View>

        <View style={styles.boxStyle3}> 
        <Text style={styles.textStyle}> 3 </Text>
        </View>
  </View>

<View style ={styles.container2}>
       <View style={styles.boxStyle4}> 
       <Text style={styles.textStyle}> 4 </Text>
       </View>
        <View style={styles.boxStyle5} >
        <Text style={styles.textStyle}> 5 </Text>
        </View>
        <View style={styles.boxStyle6}>
        <Text style={styles.textStyle}> 6</Text>
        </View>
  </View>

  <View style ={styles.container3}>
       <View style={styles.boxStyle7}> 
       <Text style={styles.textStyle}> 7 </Text>
       </View>
        <View style={styles.boxStyle8}>
        <Text style={styles.textStyle}> 8 </Text>
        </View>
        <View style={styles.boxStyle9}>
        <Text style={styles.textStyle}> 9</Text>
        </View>
  </View>


  <View style ={styles.container4}>
       <View style={styles.boxStyle10}> 
       <Text style={styles.textStyle}> 7 </Text>
       </View>
        <View style={styles.boxStyle11}>
        <Text style={styles.textStyle}> 8 </Text>
        </View>
        <View style={styles.boxStyle12}>
        <Text style={styles.textStyle}> 9</Text>
        </View>
  </View>

  <View style ={styles.container5}>
       <View style={styles.boxStyle13}> 
       <Text style={styles.textStyle}> 7 </Text>
       </View>
        <View style={styles.boxStyle14}>
        <Text style={styles.textStyle}> 8 </Text>
        </View>
        <View style={styles.boxStyle15}>
        <Text style={styles.textStyle}> 9</Text>
        </View>
  </View>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
    container1: {
          flex: 1,
          flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: 'space-around'

    },


    container2: {
      flex: 1,
      flexWrap:'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-around'

},

container3:{
  flex: 1,
  flexWrap:'wrap',
flexDirection: 'row',
justifyContent: 'space-between',
justifyContent: 'space-around'
},

container4:{
  flex: 1,
  flexWrap:'wrap',

flexDirection: 'row',
justifyContent: 'space-between',
justifyContent: 'space-around'
},


container5:{
  flex: 1,
  flexWrap:'wrap',
flexDirection: 'row',
justifyContent: 'space-between',
justifyContent: 'space-around'
},
    boxStyle1: {
      height: 120, 
      width: 120, 
      borderRadius:5,
      borderColor:'black',
      backgroundColor: 'pink', 
      marginBottom: 8,
      marginTop:8
    },

    boxStyle2: {
      height: 120, 
      width: 120, 
      backgroundColor: '#88fc03', 
      marginBottom: 8,
      marginTop:8
    },
    boxStyle3: {
      height: 120, 
      width: 120, 
      backgroundColor: '#fc2803', 
      marginBottom: 8,
      marginTop:8
    },

    boxStyle4: {
      height: 120, 
      width: 120, 
      backgroundColor: '#03fc41', 
      marginBottom: 8,
      marginTop:8
    },


    boxStyle5: {
      height: 120, 
      width: 120, 
      backgroundColor: '#1bcbf7', 
      marginBottom: 8,
      marginTop:8
    },

    boxStyle6: {
      height: 120, 
      width: 120, 
      backgroundColor: '#1c6ed4', 
      marginBottom: 8,
      marginTop:8
    },


    boxStyle7: {
      height: 120, 
      width: 120, 
      backgroundColor: '#8d1cd4', 
      marginBottom: 8,
      marginTop:8
    },

    boxStyle8: {
      height: 120, 
      width: 120, 
      backgroundColor: 'red', 
      marginBottom: 8,
      marginTop:8
    },
    boxStyle9: {
      height: 120, 
      width: 120, 
      backgroundColor: 'red', 
      marginBottom: 8,
      marginTop:8
    },
    boxStyle10: {
      height: 120, 
      width: 120, 
      backgroundColor: '#ed0e1d', 
      marginBottom: 8,
      marginTop:8
    },
    boxStyle11: {
      height: 120, 
      width: 120, 
      backgroundColor: '#ede90e', 
      marginBottom: 8,
      marginTop:8
    },

    boxStyle12: {
      height: 120, 
      width: 120, 
      backgroundColor: 'red', 
      marginBottom: 8,
      marginTop:8
    },

    boxStyle13: {
      height: 120, 
      width: 120, 
      backgroundColor: 'red', 
      marginBottom: 8,
      marginTop:8
    },


    boxStyle14: {
      height: 120, 
      width: 120, 
      backgroundColor: 'red', 
      marginBottom: 8,
      marginTop:8
    },

    boxStyle15: {
      height: 120, 
      width: 120, 
      backgroundColor: 'red', 
      marginBottom: 8,
      marginTop:8
    },
    textStyle:{
      textAlign: 'center',
      fontSize: 20,
       paddingTop: 80,
    }
   
  });

export default FlexBoxScreen;