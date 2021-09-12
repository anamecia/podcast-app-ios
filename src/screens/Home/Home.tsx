import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <SearchBar />
    </View>
  );
};

export default Home;
