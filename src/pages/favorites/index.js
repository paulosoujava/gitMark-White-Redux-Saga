import React, { Component } from 'react';
import { View, Text, FlatList, } from 'react-native';
import styles from './styles';
import FavoriteItem from './component/FavoriteItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Favorites extends Component{
    static navigationOptions = {
        title: 'Meus Favoritos',
    };
    static PropTypes = {
        favorites : PropTypes.arrayOf( PropTypes.shape({
            id: PropTypes.number,
        })).isRequired,
    };
    state = {
        favorites: [],
    };
    renderList = () => (
        <FlatList 
          data={this.props.favorites}
          keyExtractor= {item => String(item.id)}
          renderItem={({item}) => <FavoriteItem favorite={item} />}    />
    );
    render(){
        return(
            <View style={styles.container}>
                {!this.props.favorites.length
                ?<Text style={styles.empty}> Opss nada por aqui...</Text> 
                : this.renderList()}
            </View>
        );
    }
}
const masStateToProps = state => ({
    favorites: state.favorites.data,
});
export default connect(masStateToProps)(Favorites);

