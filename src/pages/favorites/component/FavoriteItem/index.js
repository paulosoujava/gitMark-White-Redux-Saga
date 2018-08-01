import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const FavoriteItem = ({ favorite: {name, owner, description } }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: owner.avatar_url}} />
    <View style={styles.info}>
        <Text  style={styles.title}>{name}</Text>
        <Text numberOfLines={2} style={styles.description}>{description}</Text>
    </View>
  </View>
);
FavoriteItem.PropTypes = {
    favorite: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        owner: PropTypes.shape({
            avatar_url: PropTypes.string,
        }),
    }).isRequired,
 };

export default FavoriteItem;
