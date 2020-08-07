import React from 'react';
import {useNavigation} from "@react-navigation/native";
import { View,Text,Image, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import heartIcon from '../../assets/images/icons/heart.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'

import styles from './styles';

const Landing: React.FC = () => {

  const {navigate} = useNavigation();

  function headleNavigationToGiveClasses(){
        navigate('GiveClasses');
  }

  return(
    <View style={styles.container}>
      <Image source={LandingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja Bem Vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsConatiner}>
           <RectButton style={[styles.button, styles.buttonPrimary]}>
             <Image source={studyIcon} />

             <Text style={styles.buttonText}> Estudar </Text>
           </RectButton>

           <RectButton onPress={headleNavigationToGiveClasses} style={[styles.button, styles.buttonSecondary]}>
             <Image source={giveClassesIcon} />

             <Text style={styles.buttonText}> Dar Aulas </Text>
           </RectButton>
        </View>

        <Text style={styles.totalConnects}>
          Total de 285 conexoes ja realizadas {' '}
          <Image source={heartIcon} />
        </Text>
    </View>
  );
}

export default Landing;