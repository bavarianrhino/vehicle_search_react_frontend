
// ------------- LocalHost URL ------------- //
export const LOCALHOST = 'http://localhost:3000';


// ------------- API KEYS FROM .ENV ------------- //
export const MCAPIKEY = process.env.REACT_APP_MARKETCHECK_API_KEY;
console.log('API KEY', MCAPIKEY);


// ------------- Market Check EndPoints ------------- //
export const COORS = 'https://cors-anywhere.herokuapp.com/';
export const MCSALES = 'https://marketcheck-prod.apigee.net/v1/sales?api_key='
export const MCSEARCH = 'https://marketcheck-prod.apigee.net/v1/search?api_key='
export const MCLISTING = 'https://marketcheck-prod.apigee.net/v1/listing/'
export const USED = '&car_type=used'
export const NEW = '&car_type=new'
export const LAT = '&latitude='
export const LONG = '&longitude='
export const YEAR = '&year='
export const MAKE = '&make='
export const MODEL = '&model='
export const TRIM = '&trim='
export const ZIP = '&zip='
export const RADIUS = '&&radius='
export const ROWS_10 = '&rows=10&start=0'
export const ROWS_25 = '&rows=25&start=0'
export const ROWS_50 = '&rows=50&start=0'
export const PHOTOS = '&photo_links=true'

// ------------- Missing Picture Url ------------- //
export const TRUSTFALL = 'https://img00.deviantart.net/69d9/i/2009/219/c/f/missing_car_by_dreamofyou.jpg'