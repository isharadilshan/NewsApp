import React, {useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getEverything} from '../../services/news';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isAuthenticated = useSelector(({auth}) => auth.isAuthenticated);

  const fetchNewsByQuery = useCallback(async () => {
    try {
      const response = await getEverything('spacex');
      console.log('RESPONSE -----------------------', response);
    } catch (error) {
      console.log('RESPONSE -----------------------', error);
    }
  }, []);

  useEffect(() => {
    fetchNewsByQuery();
  }, [fetchNewsByQuery]);

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
