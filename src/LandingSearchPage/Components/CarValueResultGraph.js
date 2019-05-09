import React from 'react';
import { ScatterChart, Scatter, Legend, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip } from 'recharts';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';

class CarValueResultGraph extends React.Component {
    
    
    mapOverCarsPlot = () => {
        let skatplot = this.props.listings[0].map((car => {return {"x": car.miles, "y": car.price, "z": car.id}}))
        console.log(skatplot)
        return skatplot;
    }

    mapOverCarsMed = () => {
        console.log(this.props.price)
        console.log(this.props.miles);
        let medPrice = this.props.price.median
        let medMiles = this.props.miles.median
        let carsMed = { "x": medMiles, "y": medPrice }
        return carsMed
    }

    mapOverCarsMean = () => {
        let meanPrice = this.props.price.mean
        let meanMiles = this.props.miles.mean
        let carsMean = { "x": meanMiles, "y": meanPrice }
        return carsMean
    }

    mapOverCarsMin = () => {
        let minPrice = this.props.price.min
        let minMiles = this.props.miles.min
        let carsMin = { "x": minMiles, "y": minPrice }
        return carsMin
    }

    mapOverCarsMax = () => {
        let maxPrice = this.props.price.max
        let maxMiles = this.props.miles.max
        let carsMax = { "x": maxMiles, "y": maxPrice }
        return carsMax
    }



    render() {
        // const data01 = [{ "x": 100, "y": 200, "z": 200 },{ "x": 120, "y": 100, "z": 260 }];
        // const data02 = [{"x": 200, "y": 260, "z": 240},{"x": 240, "y": 290, "z": 220}];
        return (
			<ScatterChart width={930} height={450} margin={{ top: 20, right: 'auto', bottom: 20, left: 'auto' }}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='x' name='miles' unit='mile' />
				<YAxis dataKey='y' name='cost' unit='$1.00' />
				<ZAxis dataKey='z' range={[64, 144]} name='id' unit='' />
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
				<Legend />
				<Scatter name='Similar Cars' data={this.mapOverCarsPlot()} fill='#C0BDA5' />
				<Scatter name='National Average' data={this.mapOverCarsMed()} fill='#CC978E' />
				<Scatter name='National Mean' data={this.mapOverCarsMean()} fill='#F39C6B' />
				<Scatter name='Min' data={this.mapOverCarsMin()} fill='#FF3864' />
				<Scatter name='Max' data={this.mapOverCarsMax()} fill='#261447' />
			</ScatterChart>
		);
    }
}



const mapStateToProps = (state) => {
    return {
		listings: state.values.listings,
		stats: state.values.stats,
		begin_plot: state.values.begin_plot
	};
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarValueResultGraph);