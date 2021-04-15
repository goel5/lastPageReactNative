import React from 'react';
import SportCard from './SportCard'
import AllSportsData from '../Data/AllsportsData'
import {
  FlatList,
  Container,
  Text,
  TouchableOpacity
} from 'react-native';

const AllSportsCard = ({navigation}) => {
  // console.log(nav)
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.push("Academies")}>
      <SportCard item={item} />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={AllSportsData}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
    />
  )
}
export default AllSportsCard;