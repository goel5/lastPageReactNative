import React from 'react';
import CardDesign from '../BadmintonCard/CardDesign'
import AllBadmintonData from '../../Data/AllBadmintonData'
import {
  FlatList,
  Container,
  Text,
  TouchableOpacity
} from 'react-native';

const AllBadmintonAcademies = () => {
  // console.log(nav)
  const renderItem = ({ item }) => (
      <CardDesign item={item} />
  );
  return (
    <FlatList
      data={AllBadmintonData}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
    />
  )
}
export default AllBadmintonAcademies;