import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {scrollableHorizontalListStyles} from './styles';

type Props = {
  header: string;
};

const ScrollableHorizontalList: React.FC<Props> = ({header}) => {
  return (
    <View style={scrollableHorizontalListStyles.Container}>
      <Text style={scrollableHorizontalListStyles.SectionTitle}>{header}</Text>
      <FlatList
        horizontal={true}
        data={[
          {
            title: 'Fuso',
            author: 'Marina Cabral',
            image:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/e6/9e/63/e69e6355-20c6-a36c-7226-dd09de7588c6/mza_3780523531891798932.jpg/1200x1200bb.jpg',
          },
          {
            title: 'Terapia the casal',
            author: 'GF e RN',
            image:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/e6/9e/63/e69e6355-20c6-a36c-7226-dd09de7588c6/mza_3780523531891798932.jpg/1200x1200bb.jpg',
          },
          {
            title: 'Aleixopedia',
            author: 'Antena 3',
            image:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/e6/9e/63/e69e6355-20c6-a36c-7226-dd09de7588c6/mza_3780523531891798932.jpg/1200x1200bb.jpg',
          },
        ]}
        renderItem={({item}) => (
          <View style={scrollableHorizontalListStyles.ListItem}>
            <ImageBackground
              style={scrollableHorizontalListStyles.ImageContainer}
              imageStyle={scrollableHorizontalListStyles.Image}
              source={{uri: item.image}}
              resizeMode="cover"
            />
            <Text style={scrollableHorizontalListStyles.Title}>
              {item.title}
            </Text>
            <Text style={scrollableHorizontalListStyles.Author}>
              {item.author}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ScrollableHorizontalList;
