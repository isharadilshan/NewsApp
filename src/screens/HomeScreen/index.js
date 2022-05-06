import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('SIGNIN')}>
        this is home screen
      </Text>
    </View>
  );
};

export default HomeScreen;
