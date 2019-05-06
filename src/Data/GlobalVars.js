
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
export const RADIUS = '&radius='
export const ROWS_10 = '&start=0&rows=10'
export const ROWS_25 = '&start=0&rows=25'
export const ROWS_50 = '&start=0&rows=50'
export const PHOTOS = '&photo_links=true'

// ------------- Missing Data Catch ------------- //
export const TRUSTFALL = {
    id: 'Car ID - n/a',
    user_id: 'User ID - n/a',
    heading: 'Heading Missing',
    car_specs: 'Car Specs Missing',
    price: 'Price Missing',
    miles: 'Miles Missing',
    dealerInfo: 'Dealer Info Missing',
    distance: 'Distance Missing',
    image: 'Image Missing',
    images: 'Images Missing',
    build: 'Build Missing',
    make: 'Make Missing',
    model: 'Model Missing',
    trim: 'Trim Missing',
    year: 'Year Missing',
    vdp_url: 'URL Missing',
    vin: 'Vin Missing'
}