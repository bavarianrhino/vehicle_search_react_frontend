//=======LocalHost URL=======//
// const LOCALHOST = 'http://localhost:3000';
const COORS = 'https://cors-anywhere.herokuapp.com/';


//=======API KEYS FROM .ENV=======//
const MARKETCHECKAPIKEY = process.env.REACT_APP_MARKETCHECK_API_KEY;
console.log('API KEY', MARKETCHECKAPIKEY);


//=======Market Check EndPoints=======//
// const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/sales?api_key='
// const VINPARAMS = '&car_type=used&vin='


export const fetchCarsForSale = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({ type: 'LOADING_CARS' });
        return fetch(
			`${COORS}https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&radius=${data.miles}&zip=${data.zip}&seller_type=dealer&year=${data.year}&make=${data.make}&model=${data.model}&rows=50&start=2&photo_links=true`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json'
				}
			}
		)
        .then((res) => res.json())
        .then((payload) => dispatch({ type: "LAND_CARS_FOR_SALE", payload }));   
    }
};


// export const setCarValues = (data) => {
// 	return { type: 'SET_CAR_VALUES', data };
// };

// export const landCarsForSale = (data) => {
// 	return { type: 'LAND_CARS_FOR_SALE', data };
// };


// export const fetchCarsForSale = (data) => {
//     console.log(data);
//     return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&radius=${data.miles}&zip=${data.zip}&seller_type=dealer&year=${data.year}&make=${data.make}&model=${data.model}&rows=50&start=2&photo_links=true`,
//         {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json'
//             }
//     	}
//     ).then((res) => res.json())
// };

// u1 = User.create(username: "ryan", password: "1234")
// u1 = User.create(username: "james", password: "1234")
// u1 = User.create(username: "heather", password: "1234")

// Car.create(make: "BMW",
//     model: "540i",
//     year: 1995,
//     api_id: "WBXHT3C51K5L37191-2cf197c6-3cc1-4cf8-af32-428afaf6c736",
//     url: "https://www.unitedbmw.com/detail-2019-bmw-x1-xdrive28i_sports_activity_vehicle-new-18808468.html",
//     vin: "WBXHT3C51K5L37191")

// Car.create(make: "BMW",
//     model: "525i",
//     year: 1995,
//     api_id: "WBXHT3C5XK5L37299-87a50cad-f927-486e-8631-4ad9f2a2070b",
//     url: "https://www.unitedbmw.com/detail-2019-bmw-x1-xdrive28i_sports_activity_vehicle-new-18670975.html",
//     vin: "WBXHT3C5XK5L37299")

// Car.create(make: "Volkswagen",
//     model: "Type 2 Camper",
//     year: 1973,
//     api_id: "WBXYJ3C30JEJ82989-d3c7daff-76e7-4583-8341-9156f47a9234",
//     url: "https://www.unitedbmw.com/detail-2018-bmw-x2-sdrive28i_sports_activity_vehicle-used-certified-17845374.html",
//     vin: "WBXYJ3C30JEJ82989")




// s1 = Favorite.create( user_id: 1, car_id: 1)
// s2 = Favorite.create( user_id: 1, car_id: 2)
// s11 = Favorite.create( user_id: 2, car_id: 3)
// s11 = Favorite.create( user_id: 3, car_id: 1)
// s12 = Favorite.create( user_id: 3, car_id: 3)

// export const setCurrentUser = (data) => {
//     return {
//         type: 'SET_CURRENT_USER',
//         data
//     };
// };

// export const signUpNewUser = (data) => {
//     return {
//         type: 'SIGN_UP_NEW_USER',
//         data
//     };
// }

// //=======LocalHost URL=======//
// const LOCALHOST = 'http://localhost:8081';


// //=======API KEYS FROM .ENV=======//
// // const MARKETCHECKAPIKEY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
// const MARKETCHECKAPIKEYY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
// // const MARKETCHECKAPIKEYYY = `${process.env.REACT_APP_MARKETCHECK_API_KEYYY}`;
// // const MARKETCHECKAPIKEYYYY = `${process.env.REACT_APP_MARKETCHECK_API_KEYYYY}`;
// console.log('API KEY', MARKETCHECKAPIKEYY);


// //=======Market Check EndPoints=======//
// const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/'
// const COORS = 'https://cors-anywhere.herokuapp.com/';


// export const fetchCarsForSale = (data) => {
//     console.log(data);
//     return dispatch => {
//         dispatch({ type: 'LOADING_CARS' });
//         return fetch(
//             `${COORS}${MARKETCHECK}search?api_key=${MARKETCHECKAPIKEYY}&radius=${data.miles}&zip=${data.zip}&seller_type=dealer&year=${data.year}&make=${data.make}&model=${data.model}&rows=50&start=2&photo_links=true`,
//             {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json'
//                 }
//             }
//         )
//         .then((res) => res.json())
//         .then((payload) => dispatch({ type: 'LAND_CARS_FOR_SALE', payload }));   
//     }
// };

// export const landFavorites = (json) => {
//     console.log(json)
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_FAVORITES' })
//         return dispatch({ type: 'LANDING_FAVORITES', json });
//     }
// };

// export const fetchFavorites = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_FAVORITES' })
//         return fetch(`${LOCALHOST}/profile`, {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//         .then((response) => response.json())
//         .then((payload) => dispatch({ type: 'FETCH_FAVORITES', payload }));
//     };
// };

// // export const landFavorites = (api_id) => {
// //  return (dispatch) => {
// //      dispatch({ type: 'LOADING_FAVORITES' });
// //      return fetch(
// //             `${MARKETCHECK}listing/${api_id}?api_key=${MARKETCHECKAPIKEY}`,
// //          {
// //              method: 'GET',
// //              headers: {
// //                  Accept: 'application/json'
// //              }
// //          }
// //      )
// //         .then((response) => response.json())
// //         // .then((payload) => dispatch({ type: 'LANDING_FAVORITES', payload }));
// //  };
// // };

// export const handleAddFavorite = (data) => {
//     console.log(data);
//     return dispatch => {
//         dispatch({ type: 'SAVING_FAVORITE' });
//         return fetch(`${LOCALHOST}/cars`, {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 make: data.make,
//                 model: data.model,
//                 year: data.id,
//                 api_id: data.id,
//                 url: data.vdp_url,
//                 vin: data.vin,
//                 user_id: data.user_id
//             })
//         })
//             .then((res) => res.json())
//             .then((payload) => {
//                 if (payload.error) {
//                     console.error(payload.error);
//                 } else {
//                     dispatch({ type: 'LAND_FAVORITE_CAR', payload });
//                 }
//             });
//     }
// }

// import React from 'react';
// import ViewCarSaleModal from '../../LandingSearchPage/Components/ViewCarSaleModal';
// import { handleAddFavorite } from '../../Actions/FavoritesActions'
// import { connect } from 'react-redux';

// import { Card, Grid, Button, Image, Icon } from 'semantic-ui-react';
// import '../../Stylesheets/Carousel.min.css';
// import '../../Stylesheets/CarForSaleCard.css';

// class FavCarsForSaleCard extends React.Component {

//     state = {
//         open: false
//     };

//     mapImages = () => {
//         const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png';
//         return this.props.car.media.photo_links.map((img) => {
//             return (<div><img alt='' src={this.props.car.media.photo_links === 0 ? `${fallback}` : `${img}`} style={{ padding: '5px 5px' }} /></div>);
//         });
//     };

//     toggleModal = () => {
//         this.setState({
//             open: !this.state.open
//         });
//     };

//     addFavorite = (buildCarObj) => {
//         console.log('addFavorite');
//         console.log(this.props.currentUser)
//         console.log(buildCarObj);
//         this.props.handleAddFavorite(buildCarObj);
//         console.log('HIT')
//     };

//     render() {
        
//         const buildCarObj = {
//             id: this.props.car.id,
//             user_id: this.props.currentUser,
//             heading: this.props.car.heading,
//             car_specs: this.props.car.build,
//             price: this.props.car.ref_price,
//             miles: this.props.car.miles,
//             dealerInfo: this.props.car.dealer,
//             distance: this.props.car.dist,
//             image: this.props.car.media.photo_links[0],
//             images: this.props.car.media.photo_links,
//             make: this.props.car.build.make,
//             model: this.props.car.build.model,
//             trim: this.props.car.build.trim,
//             year: this.props.car.build.year,
//             vdp_url: this.props.car.vdp_url,
//             vin: this.props.car.vin
//         };

//         const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png';

//         return (
//             <Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '0.5em 0.2em' }}>
//                 <Grid>
//                     <Grid.Column width={7}>
//                         <Image size='medium' alt='no image' src={buildCarObj.image.length === 0 ? `${fallback}` : `${buildCarObj.image}`} style={{ padding: '5px 5px' }} />
//                     </Grid.Column>
//                     <Grid.Column width={9}>
//                         <Card.Content>
//                             <Card.Header>{buildCarObj.heading}</Card.Header>
//                             <Card.Meta>
//                                 <span>Miles: {buildCarObj.miles}</span>
//                             </Card.Meta>
//                             <Card.Description>${buildCarObj.price}.00</Card.Description>
//                             <Button inverted color='black' floated='right' onClick={this.toggleModal}>
//                                 View Images
//                                 <Icon color='black' name='images' />
//                             </Button>
//                             <Button inverted color='green' floated='right' onClick={() => this.addFavorite(buildCarObj)}>
//                                 Watch
//                                 <Icon name='like' />
//                             </Button>
//                         </Card.Content>
//                     </Grid.Column>
//                 </Grid>
//                 {this.state.open ? (
//                     <ViewCarSaleModal
//                         key={buildCarObj.id}
//                         buildCarObj={buildCarObj}
//                         toggleModal={this.toggleModal}
//                         mapImages={this.mapImages}
//                         open={this.state.open}
//                         addFavorite={this.addFavorite}
//                     />
//                 ) : null}
//             </Card>
//         );
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.cars.currentUser,
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     handleAddFavorite: (buildCarObj) => handleAddFavorite(buildCarObj)(dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleCard);

// import React from 'react';
// import FavCarsForSaleCard from './FavCarsForSaleCard';
// import { connect } from 'react-redux';

// // import { } from 'semantic-ui-react';


// class FavCarsForSaleList extends React.Component {

//     mapFavs = () => {
//         return this.props.favorites.map((fav, i) => {
//             return <FavCarsForSaleCard key={i} car={fav}/>
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {this.mapFavs()}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         favorites: state.favorites.favorites
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleList);

//    render() {
    
//         const panes = [
//             { menuItem: 'Saved Cars', render: () => <Tab.Pane attached={false}><FavCarsForSaleList /></Tab.Pane> },
//             { menuItem: 'Saved Car Values', render: () => <Tab.Pane attached={false}>ADD COMPONENTS HERE</Tab.Pane> }
//         ]

//         return (
//             <div>
//                 <Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>
//                     <Container textAlign='center' style={{ background: 'url(../../Images/vwBusDesert.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
//                         <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />
//                     </Container>
//                 </Segment>
//             </div>
//         );
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // landFavorites: (data) => landFavorites(data)(dispatch)
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleContainer);

// import React from 'react';
// import NavBar from '../../NavBar/NavBar';
// import FavCarsForSaleContainer from './FavCarsForSaleContainer';
// import { CarsReducer } from '../../Reducers/CarsReducer'

// import { landFavorites } from '../../Actions/FavoritesActions'
// // import { helperLandFunction } from '../../Actions/FavoritesActions'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// const MARKETCHECKAPIKEYY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
// const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/'
// const COORS = 'https://cors-anywhere.herokuapp.com/';
// const landFavs = (json) => ({ type: 'LANDING_FAVORITES', json});

// // import { } from 'semantic-ui-react';


// class Favorites extends React.Component {

//     mapFavs = async () => {
//         await Promise.all(this.props.api_urls.map(async api => {
//             const response = await fetch(`${COORS}${MARKETCHECK}listing/${api.api_id}?api_key=${MARKETCHECKAPIKEYY}`, {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json'
//                 }
//             });
//             const json = await response.json();
//             console.log(json)
//             this.props.landFavorites(json)
//         }))
//     }
    
//     render() {
//         return (
//             <div>
//                 <NavBar />
//                 <FavCarsForSaleContainer myFavs={this.mapFavs()} />
//             </div>
//         );
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         api_urls: state.favorites.api_urls
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         landFavorites: (json) => landFavorites(json)(dispatch)
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


// import React from 'react';
// import CarForSaleCard from './CarForSaleCard';
// // import ViewCarSaleModal from './ViewCarSaleModal';
// import { connect } from 'react-redux';

// import { Card } from 'semantic-ui-react';


// class CarsForSaleResultList extends React.Component {
//     // state = {
//     //  open: false
//     // };

//     mapCars = (props) => {
//         return this.props.cars.map((car) => {
//             return <CarForSaleCard key={car.id} car={car} />;
//         });
//     };

//     // mapCarModal = (props) => {
//     //  return this.props.cars.map((car) => {
//     //      return <ViewCarSaleModal key={car.id} car={car} toggleModal={this.toggleModal} />;
//     //  });
//     // };

//     // toggleModal = () => {
//     //  this.setState({
//     //      open: !this.state.open
//     //  });
//     // };

//     render() {
//         return (
//             <div>
//                 <Card.Group textAlign='center' itemsPerRow={2} style={{ display: 'flex', margin: '3.125em auto' }}>
//                     {this.props.cars ? this.mapCars() : null}
//                 </Card.Group>
//             </div>
//         );
//     }
// }
// /* <CarForSaleCard />; */
// // {this.state.open ? <ViewCarSaleModal key={car.id} car={car} toggleModal={this.toggleModal} /> : null}


// const mapStateToProps = (state) => {
//     return {
//         cars: state.cars.carsForSale.listings
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CarsForSaleResultList);

// import React from 'react';
// import { connect } from 'react-redux';
// import { carMakes } from '../../Data/CarModelData';
// import { carYear } from '../../Data/CarYearData';
// // import { fetchCarsForSale } from '../../Services/APIFetchs';
// import { fetchCarsForSale } from '../../Actions/CarsActions';
// // import { landCarsForSale } from '../../Actions/AllActions';

// import { Form } from 'semantic-ui-react';

// const distanceOptions = [
//     { key: '1', text: '50 Miles', value: '50' },
//     { key: '2', text: '100 Miles', value: '100' },
//     { key: '3', text: '200 Miles', value: '200' },
//     { key: '4', text: '500 Miles', value: '500' },
//     { key: '5', text: '1000 Miles', value: '1000' }
// ];
// const modelOptions = [{ key: '1', text: 'X1', value: 'X1' }, { key: '2', text: 'X2', value: 'X2' }];


// class CarsForSaleSearchForm extends React.Component {
//     state = {
//         year: '',
//         make: '',
//         model: '',
//         miles: '',
//         zip: ''
//     };

//     handleChangeYear = (e, { value }) => {
//         let str = value;
//         this.setState({ ...this.state, year: str });
//     };

//     handleChangeMake = (e, { value }) => {
//         let str = value;
//         this.setState({ ...this.state, make: str });
//     };

//     handleChangeModel = (e, { value }) => {
//         let str = value;
//         this.setState({ ...this.state, model: str });
//     };

//     handleChangeMiles = (e, { value }) => {
//         let str = value;
//         this.setState({ ...this.state, miles: str });
//     };

//     handleChangeZip = (e) => {
//         this.setState({ ...this.state, zip: e.target.value });
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.fetchCarsForSale(this.state)
//         e.target.reset();
//     };
    
//     // handleSubmit1 = (e) => {
//         // e.preventDefault();
//         // fetchCarsForSale(this.state).then((payload) => {
//             // console.log(payload)
//             // landCarsForSale(payload);
//         // });
//         // e.target.reset();
//     // };

//     handleReset = () => {
//         this.setState({
//             year: null,
//             make: '',
//             model: ''
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
//                     <Form.Group widths='equal'>
//                         <Form.Select onChange={this.handleChangeYear} options={carYear.years} label='Choose Year' placeholder='Choose Year' selection name='year' />
//                         <Form.Select onChange={this.handleChangeMake} options={carMakes.makes} label='Choose Make' placeholder='Choose Make' selection name='make' />
//                         <Form.Select onChange={this.handleChangeModel} options={modelOptions} label='Choose Model' placeholder='Choose Models' selection name='model' />
//                         <Form.Select onChange={this.handleChangeMiles} options={distanceOptions} label='Mile Radius' placeholder='Choose Mile Radius' selection name='radius' />
//                         <Form.Input onChange={this.handleChangeZip} fluid label='Zip Code' placeholder='Zip Code' name='zip' />
//                     </Form.Group>
//                     <Form.Button type='submit'>Submit</Form.Button>
//                 </Form>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchCarsForSale: (data) => fetchCarsForSale(data)(dispatch)
//         // openModal: (current) => dispatch(openModal(current))
//     };
// };

// export default connect(null, mapDispatchToProps)(CarsForSaleSearchForm);

// import React from 'react';
// import { connect } from 'react-redux';
// import { Carousel } from 'react-responsive-carousel';

// import { Button, Icon, Modal } from 'semantic-ui-react';
// import '../../Stylesheets/Carousel.min.css';
// import '../../Stylesheets/CarForSaleCard.css';


// const ViewCarSaleModal = (props) => {

//     console.log(props.car)
    
//     return (
//         <Modal open={props.open}>
//             <Modal.Header>{props.buildCarObj.heading}<span style={{ float: 'right' }}>${props.buildCarObj.price}.00</span></Modal.Header>
//             <Modal.Content>
//                 <Modal.Description>
//                     <Carousel showArrows={true} showIndicators={false} showThumbs={true} width='98%'>
//                         {props.mapImages()}
//                     </Carousel>
//                 </Modal.Description>
//             </Modal.Content>
//             <Modal.Actions>
//                 <Button inverted color='green' onClick={() => props.addFavorite(props.buildCarObj)} style={{ float: 'left' }}>Watch  <Icon name='like' /></Button>
//                 <Button color='red' onClick={() => props.toggleModal()} >Close  <Icon name='close' /></Button>
//             </Modal.Actions>
//         </Modal>
//     );
// }

// const mapStateToProps = (state) => {
//     return {
//         attr: state.attr
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ViewCarSaleModal);

// import React from 'react';
// import NavBar from '../../NavBar/NavBar';
// import SearcherContainer from './SearcherContainer';
// import ResultsContainer from './ResultsContainer';

// import { connect } from 'react-redux';
// import { fetchFavorites } from '../../Actions/FavoritesActions';
// // import { landFavorites } from '../../Actions/FavoritesActions';

// import { Container, Divider, Segment } from 'semantic-ui-react';

// class LandingSearchPage extends React.Component {

//     componentDidMount() {
//         if (localStorage.getItem('token')) {
//             return this.props.fetchFavorites().then(console.log);
//         } else {
//             return null
//         }
//     }

//     // componentDidUpdate() {
//     //  // if (localStorage.getItem('token') && nextProps.api_urls !== this.props.api_urls) {
//     //         // this.props.api_urls.map((url) => {
//     //         // }
//     //         //     }
//     //         //         let arr = this.props.api_urls
//     //         //         let arrLength = this.props.api_urls.length;
//     //         //         for (let i = 0; arrLength > i; i++) {
//     //         //             let level2 = arr[i]
//     //         //             console.log(level2)
//     //         //             return this.props.landFavorites(level2)
//     //         //         }
//     //     if (localStorage.getItem('token')) {
//     //         async function getUsers(userIds) {
//     //          const pArray = userIds.map(async (userId) => {
//     //              const response = await fetch(`/api/users/${userId}`);
//     //              return response.json();
//     //          });
//     //          const users = await Promise.all(pArray);
//     //          // ... do some stuff
//     //          return users;
//     //         }
//     //     } else {
//     //         console.log('nope didnt hit')
//     // }


//     render() {
//         return (
//             <div>
//                 <NavBar />
//                 <Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>
//                     <Container textAlign='center' style={{ background: 'url(../../Images/vwBusDesert.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
//                         <SearcherContainer />
//                         <Divider inverted section />
//                         <ResultsContainer />
//                     </Container>
//                 </Segment>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         // api_urls: state.favorites.api_urls,
//         // favorites: state.favorites.favorites
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchFavorites: (data) => fetchFavorites(data)(dispatch)
//         // landFavorites: (data) => landFavorites(data)(dispatch)
//     };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(LandingSearchPage);


// import React from 'react';
// import CarsForSaleSearchForm from '../Components/CarsForSaleSearchForm';
// // import CarValueSearchForm from '../Components/CarValueSearchForm';
// import { connect } from 'react-redux';

// import { Tab } from 'semantic-ui-react';


// class Searcher extends React.Component {

//     state = {
//         attr: null
//     }

//     funcName = (e) => {
//         console.log(e.target.value)
//     }
    
//     render() {

//         const panes = [
//             { menuItem: 'New Cars', render: () => <Tab.Pane attached={false}><CarsForSaleSearchForm /></Tab.Pane> },
//             { menuItem: 'Used Cars', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
//             { menuItem: 'Search Cars by VIN', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
//         ]

//         return (
//             <div>
//                 <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />
//             </div>
//         );
//     }
// }
// /* <CarValueSearchForm />; */
                
//                 // const TabExampleSecondaryPointing = () => (

// const mapStateToProps = (state) => {
//     return {
//         attr: state.attr
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Searcher);


// import React from 'react';
// import { getAuthToken } from '../Services/APIFetchs';
// import { setCurrentUser } from '../Actions/AllActions';

// import { Button, Form, Grid, Header, Image, Message } from 'semantic-ui-react';

// import { connect } from 'react-redux';



// class Login extends React.Component {
    
//     state = {
//         username: '',
//         password: '',
//         error: null
//     };

//     handleChange = (e) => {
//         console.log(e.target.value)
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     };
    
//     handleSubmit = (e) => {
//         e.preventDefault();

//         getAuthToken({ user: { username: this.state.username, password: this.state.password } })
//             .then((payload) => {
//                 console.log(payload)
//                 if (payload.user) {
//                     localStorage.setItem('token', payload.jwt);
//                     // localStorage.setItem('token', payload.jwt);
//                     this.props.history.push('/');
//                     this.props.setCurrentUser(payload.user.id);
//                     // getFavorites()
//                 } else {
//                     this.setState({ error: payload.error });
//                 }
//             })
//         e.target.reset();
//     }

//     handleReset = () => {
//         this.setState({
//             username: '',
//             password: '',
//             error: null
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
//                     <Grid.Column style={{ maxWidth: 450 }}>
//                         <Header as='h2' color='teal' textAlign='center'>
//                             <Image src='/logo.png' /> Log-in to your account
//                         </Header>

//                         <Form size='large' onSubmit={this.handleSubmit} onReset={this.handleReset} >
//                             <Form.Input fluid icon='user' iconPosition='left' autoComplete='off' placeholder='Username' type='text' name='username' onChange={this.handleChange} />
//                             <Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Password' type='password' name='password' onChange={this.handleChange} />
//                             <Button color='teal' fluid size='large' type='submit'>Login</Button>
//                         </Form>

//                         {this.state.error ? (<Message attached error header="There was an error with your submission:" list={this.state.error}/>) : null }

//                         <Message>Need An Account? <a href='/signup'>Sign Up</a></Message>


//                     </Grid.Column>
//                 </Grid>
//             </div>
//         );
//     }
// }

// export default connect(null, {setCurrentUser})(Login);


// import React from 'react';
// import { signUpNewUser } from '../Services/APIFetchs';
// import { setCurrentUser } from '../Actions/AllActions';
// import { connect } from 'react-redux';

// import { Button, Form, Grid, Header, Image, Message } from 'semantic-ui-react';


// // import { } from 'semantic-ui-react';


// class SignUp extends React.Component {
    
//     state = {
//         username: '',
//         password: '',
//         password_confirmation: '',
//         error: null
//     };

//     handleChange = (e) => {
//         console.log(e.target.value)
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();

//         signUpNewUser({ user: { username: this.state.username, password: this.state.password, password_confirmation: this.state.password_confirmation } })
//             .then((payload) => {
//                 console.log(payload)
//                 if (payload.user) {
//                     localStorage.setItem('token', payload.jwt);
//                     this.props.history.push('/');
//                     this.props.setCurrentUser(payload.user.id);
//                     // getFavorites()
//                 } else {
//                     this.setState({ error: payload.error });
//                 }
//             })
//         e.target.reset();
//     }

//     handleReset = () => {
//         this.setState({
//             username: '',
//             password: '',
//             password_confirmation: '',
//             error: null
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
//                     <Grid.Column style={{ maxWidth: 450 }}>
//                         <Header as='h2' color='teal' textAlign='center'>
//                             <Image src='/logo.png' /> Sign Up!
//                         </Header>

//                         <Form size='large' onSubmit={this.handleSubmit} onReset={this.handleReset}>
//                             <Form.Input fluid icon='user' iconPosition='left' autoComplete='off' placeholder='Username...' type='text' name='username' onChange={this.handleChange} />
//                             <Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Password...' type='password' name='password' onChange={this.handleChange} />
//                             <Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Confirm Password...' type='password' name='password_confirmation' onChange={this.handleChange} />
//                             <Button color='teal' fluid size='large' type='submit'>
//                                 Sign Up!
//                             </Button>
//                         </Form>

//                         {this.state.error ? <Message attached error header='There was an error with your submission:' list={this.state.error} /> : null}

//                     </Grid.Column>
//                 </Grid>
//             </div>
//         );
//     }
// }

// export default connect(null, {setCurrentUser})(SignUp);

// import React from 'react';

// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { Container, Image, Menu } from 'semantic-ui-react';
// class NavBar extends React.Component {
//     state = {
//         attr: null
//     };

//     funcName = (e) => {
//         console.log(e.target.value);
//     };

//     render() {
//         return (
//             <div>
//                 <Menu fixed='top' inverted>
//                     <Container>
//                         <Menu.Item as='' header>
//                             <Image size='tiny' src={require(`../Images/e34RearIconWhite.png`)} style={{ marginRight: '1.5em' }} />
//                             Auto Woke
//                         </Menu.Item>
//                         <Link to='/' style={{ display: 'flex' }}>
//                             <Menu.Item as=''>Search</Menu.Item>
//                         </Link>
//                         <Link to='/' style={{ display: 'flex' }}>
//                             <Menu.Item as=''>Values</Menu.Item>
//                         </Link>
//                         <Link to='/favorites' style={{ display: 'flex' }}>
//                             <Menu.Item as=''>Favorites</Menu.Item>
//                         </Link>

//                         <Menu.Menu position='right'>
//                             <Link to='/login' onClick={() => localStorage.clear()} style={{ display: 'flex' }}>
//                                 <Menu.Item as=''>Log Out</Menu.Item>
//                             </Link>
//                         </Menu.Menu>
//                     </Container>
//                 </Menu>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         attr: state.attr
//     };
// };

// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);




// export const CarsReducer = (

//     state = {
//         loading: false,
//         currentUser: null,
//         carsForSale: [],
//         carValueInfo: []
//     }, 
//     action
// ) => {

//     switch (action.type) {
//         case 'SET_CURRENT_USER':
//             return { ...state, currentUser: action.data };

//         case 'LOADING_CARS':
//             return { ...state, loading: true };

//         case 'DONE_LOADING_CARS':
//             return { ...state, loading: false };

//         case 'LAND_CARS_FOR_SALE':
//             return { ...state, carsForSale: [...state.carsForSale, action.payload], loading: false };

//         default:
//             return state;
//     }
// };


// export const FavoritesReducer = (state = {loading: false, api_urls: [], favorites: []}, action) => {

//         switch (action.type) {
//             case 'SAVING_FAVORITE':
//                 return { ...state, loading: true };

//             case 'LOADING_FAVORITES':
//                 return { ...state, loading: !state.loading };

//             case 'FETCH_FAVORITES':
//                 return { ...state, api_urls: action.payload.user.favorites};

//             case 'LANDING_FAVORITES':
//                 return { ...state, favorites: [...state.favorites, action.json]};

//             case 'LAND_FAVORITE_CAR':
//                 return { ...state, favorites: [...state.favorites, action.payload]};

//             default:
//                 return state;
//         }
// };

// // import $ from 'jquery';

// //=======LocalHost URL=======//
// const LOCALHOST = 'http://localhost:3000';

// //=======API KEYS FROM .ENV=======//
// const MARKETCHECKAPIKEY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
// // console.log('API KEY', MARKETCHECKAPIKEY);

// //=======Market Check EndPoints=======//
// // const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/sales?api_key='
// // const VINPARAMS = '&car_type=used&vin='

// export const getAuthToken = (loginData) => {
//     console.log(loginData);
//     return fetch(`${LOCALHOST}/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body: JSON.stringify(loginData)
//     }).then((res) => res.json());
// };

// export const signUpNewUser = (loginData) => {
//     console.log(loginData);
//     return fetch(`${LOCALHOST}/users`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginData)
//     }).then((res) => res.json());
// };

// // export const getCarValueByVIN = (VINData) => {
// //     console.log(VINData);
// //     let settings = {
// //         'url': 'https://marketcheck-prod.apigee.net/v1/history/1G4HP57228U166894?api_key={key}',
// //         'method': 'GET',
// //         'timeout': 0,
// //         'headers': {
// //             'Accept': 'application/json'
// //         }
// //     };

// //     $.ajax(settings).done(function(response) {
// //         console.log(response);
// //     });
// // };

// // return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}&latitude=33.7872303&longitude=-84.3826917&radius=200&car_type=used&start=0&rows=10`
// // https://marketcheck-prod.apigee.net/v1/history/1G4HP57228U166894?api_key=vppefiprYFtfGZV0M3vTxaIauROiVoVB

// export const getCarValueByVIN = (VINData) => {
//     console.log(VINData);
//     return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}`,
//         {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json'
//             }
//         }
//     ).then((res) => res.json())
// };

// import React, { Component } from "react";
// import SignUp from "./Login_SignupPages/SignUp";
// import Login from "./Login_SignupPages/Login";
// import LandingSearchPage from './LandingSearchPage/Containers/LandingSearchPage';
// import Favorites from './FavoritesPage/Containers/Favorites';


// import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


// class App extends Component {


//     render() {
//         return (
//             <div id='app-container'>
//                 <Router>
//                     <Switch>
//                         <Route exact path={'/'} component={LandingSearchPage} />
//                         <Route exact path={'/favorites'} render={(props) => (localStorage.getItem('token') ? <Favorites {...props} /> : <Redirect to='/login' {...props} />)} />
//                         <Route exact path={'/login'} render={(props) => (localStorage.getItem('token') ? <Redirect to='/' {...props} /> : <Login {...props} />)} />
//                         <Route exact path={'/signup'} render={(props) => (localStorage.getItem('token') ? <Redirect to='/' {...props} /> : <SignUp {...props} />)} />
//                     </Switch>
//                 </Router>
//             </div>
//         );
//     }
// }

// export default App;

// t.string :make
//       t.string :model
//       t.integer :year
//       t.string :api_id
//       t.string :url
//       t.string :vin

// import React from 'react';
// import NavBar from '../../NavBar/NavBar';
// import FavCarsForSaleContainer from './FavCarsForSaleContainer';
// import { CarsReducer } from '../../Reducers/CarsReducer'

// import { landFavorites } from '../../Actions/FavoritesActions'
// // import { helperLandFunction } from '../../Actions/FavoritesActions'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// const MARKETCHECKAPIKEYY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
// const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/'
// const COORS = 'https://cors-anywhere.herokuapp.com/';
// const landFavs = (json) => ({ type: 'LANDING_FAVORITES', json});

// // import { } from 'semantic-ui-react';


// class Favorites extends React.Component {

//     mapFavs = async () => {
//         await Promise.all(this.props.api_urls.map(async api => {
//             const response = await fetch(`${COORS}${MARKETCHECK}listing/${api.api_id}?api_key=${MARKETCHECKAPIKEYY}`, {
//                 method: 'GET',
//                 headers: {
//                     Accept: 'application/json'
//                 }
//             });
//             const json = await response.json();
//             console.log(json)
//             this.props.landFavorites(json)
//         }))
//     }
    
//     render() {
//         return (
//             <div>
//                 <NavBar />
//                 <FavCarsForSaleContainer myFavs={this.mapFavs()} />
//             </div>
//         );
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         api_urls: state.favorites.api_urls
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         landFavorites: (json) => landFavorites(json)(dispatch)
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
// open -a Google\ Chrome --args --disable-web-security --user-data-dir

