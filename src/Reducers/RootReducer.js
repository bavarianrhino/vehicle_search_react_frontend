import { combineReducers } from 'redux';
import { NewCarsReducer } from './NewCarsReducer';
import { UsedCarsReducer } from './UsedCarsReducer';
import { FavoritesReducer } from './FavoritesReducer';
import { UserReducer } from './UserReducer';
import { CarValuesReducer } from './CarValuesReducer';

export const RootReducer = combineReducers({
    new_cars: NewCarsReducer,
	used_cars: UsedCarsReducer,
    favorites: FavoritesReducer,
    user: UserReducer,
    values: CarValuesReducer
});