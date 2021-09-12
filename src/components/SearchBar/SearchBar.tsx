import React, {useState} from 'react';
import {TextInput, View, Pressable} from 'react-native';
import {CancelIcon, SearchIcon} from '../../assets/Icons/Icons';
import {searchBarStyles} from './styles';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <View style={searchBarStyles.Field}>
      <SearchIcon height={20} width={20} />
      <TextInput
        style={searchBarStyles.Input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search..."
      />
      {searchTerm ? (
        <Pressable
          style={searchBarStyles.CancelBtn}
          onPress={() => setSearchTerm('')}>
          <CancelIcon height={12} width={12} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default SearchBar;
