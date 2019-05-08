
// import { LOCALHOST } from '../Data/GlobalVars';
import { COORS } from '../Data/GlobalVars'
import { MCAPIKEY } from '../Data/GlobalVars';
// import { MCSALES } from '../Data/GlobalVars'
import { MCSEARCH } from '../Data/GlobalVars'
import { USED } from '../Data/GlobalVars'
// import { NEW } from '../Data/GlobalVars'
// import { LAT } from '../Data/GlobalVars'
// import { LONG } from '../Data/GlobalVars'
import { YEAR } from '../Data/GlobalVars'
import { MAKE } from '../Data/GlobalVars'
import { MODEL } from '../Data/GlobalVars'
// import { TRIM } from '../Data/GlobalVars'
// import { ZIP } from '../Dat÷a/GlobalVars'
// import { RADIUS } from '../Data/GlobalVars'
// import { ROWS_10 } from '../Data/GlobalVars'
// import { ROWS_25 } from '../Data/GlobalVars'
// import { ROWS_50 } from '../Data/GlobalVars'
// import { PHOTOS } from '../Data/GlobalVars'
import { PLOT } from '../Data/GlobalVars'


export const fetchValuesForCars = (data) => {
	console.log(data);
	return (dispatch) => {
		dispatch({ type: 'LOADING_VALUES' });
		return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${USED}${YEAR}${data.year}${MAKE}${data.make}${MODEL}${data.model}${PLOT}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((payload) => dispatch({ type: 'LANDING_VALUES', payload }));
	};
};