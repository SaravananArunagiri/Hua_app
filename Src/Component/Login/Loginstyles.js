import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
export default  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height:hp('100%'),
      width:wp('100%') 
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:wp('80%'),
        height:hp('7.5%'),
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        borderColor:'#F79A70',
        borderWidth:1.5
        
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center',
      tintColor:'#F79A70'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#F79A70",
    },
    loginText: {
      color: 'white',
    },
    image:{ 
      width: wp('65%'),
      height: hp('17%') ,
      alignSelf:'center',
      marginBottom:60
      }
  });

