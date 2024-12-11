import { View,Text,ImageBackground, StyleSheet } from 'react-native';


export default function WelcomeScreen() {
  return (
   <ImageBackground
   source={{uri:'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/409855677_3614614998756640_6469921045999333261_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=C_BT54Pd3qgQ7kNvgE-NOYs&_nc_zt=23&_nc_ht=scontent-gru1-1.xx&_nc_gid=AwYQCjgz0YinDdLiC8J-kkY&oh=00_AYA1jsfq3yrRkZg8IM8hHKyv6f_qslvEOCpB-0cLXnl0Zg&oe=675583F4'}}
   style={styles.backgroundImage}
   >
    <View style={styles.overlay}>
      <Text style={styles.welcomeText}>Bem-Vindo!</Text>
    </View>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({

  backgroundImage:{
    flex: 1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center',
  },
  
  overlay:{
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:20,
    borderRadius:10,
  },

  welcomeText:{
    fontSize:24,
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
  }
})


