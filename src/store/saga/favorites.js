import { call, put, select } from 'redux-saga/effects';
import api from 'service/api';
import { Creators as FavoriteActions } from 'store/ducks/favorites';

export function* addFavoriteRequest(action){
    try{
        const response = yield call(api.get, `/repos/${action.payload.repoName}`);
        const favorites = yield select( state =>   state.favorites.data);
        if( favorites.find( favorite => favorite.id === response.data.id )) {
            yield put( FavoriteActions.addFavoriteError('Repositório existente nos favoritos!'));
        }else{
            yield put(FavoriteActions.addFavoriteSuccess(response.data));
        }
    } catch( err ){
        yield put( FavoriteActions.addFavoriteError('Repositório não existe!'));
    }
    
}