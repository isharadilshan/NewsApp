import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isAuthenticated = useSelector(({auth}) => auth.isAuthenticated);
  return (
    <View>
      <Text onPress={() => navigation.navigate('SIGNIN')}>
        {isAuthenticated
          ? 'this is authenticated home screen'
          : 'not authenticated home screen'}
      </Text>
    </View>
  );
};

export default HomeScreen;
