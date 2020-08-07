import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import GiveClassesBgImages from '../../assets/images/give-classes-background.png'



const GiveClasses: React.FC = () => {

  const {goBack} = useNavigation();

  function headleGoBack(){
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={GiveClassesBgImages}
        style={styles.content}
        resizeMode='contain'
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Pra começar, você precisa se cadastrar como professor
          nessa plataforma mobile
        </Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={headleGoBack}>
        <Text style={styles.okBtnText} >Tudo Bem</Text>

      </RectButton>
    </View>
  );
}

export default GiveClasses;