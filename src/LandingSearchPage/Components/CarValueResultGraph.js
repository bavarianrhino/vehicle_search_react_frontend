import React from 'react';
import { ScatterChart, Scatter, Legend, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';

class CarValueResultGraph extends React.Component {
    
    
    mapOverCarsPlot = () => {
        let skatplot = this.props.listings[0].map((car => {return {"x": car.miles, "y": car.price, "z": car.id}}))
        console.log(skatplot)
        return skatplot;
    }

    mapOverCarsMed = () => {
        let medPrice = this.props.price.map((x) => x.median)
        let medMiles = this.props.miles.map((x) => x.median)
        let carsMed = [{ "x": medMiles[0], "y": medPrice[0]}]
        console.log(carsMed);
        return carsMed
    }

    mapOverCarsMean = () => {
        let meanPrice = this.props.price.map((x) => x.mean);
        let meanMiles = this.props.miles.map((x) => x.mean);
        let carsMean = [{ "x": meanMiles[0], "y": meanPrice[0] }]
        console.log(carsMean);
        return carsMean
    }

    mapOverCarsMin = () => {
        let minPrice = this.props.price.map((x) => x.min);
        let minMiles = this.props.miles.map((x) => x.min);
        let carsMin = [{ "x": minMiles[0], "y": minPrice[0] }]
        console.log(carsMin);
        return carsMin
    }

    mapOverCarsMax = () => {
        let maxPrice = this.props.price.map((x) => x.max);
        let maxMiles = this.props.miles.map((x) => x.max);
        let carsMax = [{ "x": maxMiles[0], "y": maxPrice[0] }]
        console.log(carsMax);
        return carsMax
    }



    render() {
        // const data1 = mapOverCarsPlot()
        // const data01 = [{ "x": 100, "y": 200, "z": 200 },{ "x": 120, "y": 100, "z": 260 }];
        // const data02 = [{"x": 200, "y": 260, "z": 240},{"x": 240, "y": 290, "z": 220}];
        // {if(this.props.active_tab !== 3) {
        //     return null 
        // } else {
        return (
            <div>
                {(this.props.active_tab === 3) ? <ScatterChart width={930} height={450} margin={{ top: 20, right: 50, bottom: 20, left: 50 }}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis type='number' dataKey='x' name='miles' unit='m' />
                    <YAxis type='number' dataKey='y' name='cost' unit='$' />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name='Similar Cars' data={this.mapOverCarsPlot()} fill='#04e7ba' />
                    <Scatter name='National Average' data={this.mapOverCarsMed()} fill='#0439e7' />
                    <Scatter name='National Mean' data={this.mapOverCarsMean()} fill='#d404e7' />
                    <Scatter name='Min' data={this.mapOverCarsMin()} fill='#ef2d06' />
                    <Scatter name='Max' data={this.mapOverCarsMax()} fill='#e70462' />
                </ScatterChart> : null }
            </div>
            )
        }
    }



const mapStateToProps = (state) => {
    return {
		listings: state.values.listings,
		stats: state.values.stats,
		begin_plot: state.values.begin_plot,
		price: state.values.price,
        miles: state.values.miles,
        active_tab: state.user.activeTab
	};
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarValueResultGraph);
