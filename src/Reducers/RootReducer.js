import { combineReducers } from 'redux';
import { CarsReducer } from './CarsReducer';
import { FavoritesReducer } from './FavoritesReducer';
import { UserReducer } from './UserReducer';

export const RootReducer = combineReducers({
	cars: CarsReducer,
    favorites: FavoritesReducer,
    user: UserReducer
});