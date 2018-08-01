import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as FavoriteActions } from 'store/ducks/favorites';

class Main extends Component{
  
  static navigationOptions = {
    header: null,
   };

   static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
       data: PropTypes.arrayOf( PropTypes.shape),
       errorOnAdd: PropTypes.oneOfType( null, PropTypes.string),
       loading: PropTypes.bool,
    }).isRequired,
   };

   state = {
     repoNameInput: '',
   };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  }
  addRepository = () => {
    if(!this.state.repoNameInput )return;
    this.props.addFavoriteRequest(this.state.repoNameInput);
  };
   render(){
     return(
            <SafeAreaView style={styles.contanier}>
            <StatusBar barStyle="light-content" />
            <View style={styles.content}>
                <Text style={styles.title}>
                  GitMark
                </Text>
                <Text style={styles.description}>
                  Comece adicionando alguns repositórios aos seus favoritos.
                </Text>
                <View style={styles.form}>
                { !!this.props.favorites.errorOnAdd   && ( 
                  <Text  style={styles.error}>{this.props.favorites.errorOnAdd}</Text>)}
                  <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    placeholder="usuário/repositório"
                    undelineColorAndroid="transparent"
                    value={this.state.repoNameInput}
                    onChangeText={repoNameInput => this.setState({ repoNameInput})}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.addRepository}
                    activeOpacity={0.7}>
                    {this.props.favorites.loading 
                    ? <ActivityIndicator size="small" color={styles.loading.color} />
                    :<Text tyle={styles.buttonText}>
                      Adicionar aos Favoritos
                    </Text>
                    }
                    
                  </TouchableOpacity>
                </View>
            </View> 
            <View style={styles.footer}>
              <TouchableOpacity
                  onPress={this.navigateToFavorites}
                  activeOpacity={0.7}>
                  <Text tyle={styles.footerLink}>
                    Meus favoritos ({this.props.favorites.data.length})
                  </Text>
              </TouchableOpacity>
            </View> 
          </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites,
});
const mapDispatchToProps = dispatch =>
bindActionCreators(FavoriteActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);