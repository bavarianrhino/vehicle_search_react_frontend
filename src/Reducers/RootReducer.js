import { combineReducers } from 'redux';
import { CarsReducer } from './CarsReducer';
import { FavoritesReducer } from './FavoritesReducer';

export const RootReducer = combineReducers({
	cars: CarsReducer,
	favorites: FavoritesReducer
});