import React from 'react';
import {View} from 'react-native';
import ScrollableHorizontalList from '../../components/ScrollableHorizontalList/ScrollableHorizontalList';
import SearchBar from '../../components/SearchBar/SearchBar';
import {homeScreenStyles} from './styles';

const Home = () => {
  return (
    <View style={homeScreenStyles.Layout}>
      <SearchBar />
      <ScrollableHorizontalList header={'Trending'} />
    </View>
  );
};

export default Home;
