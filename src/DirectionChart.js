import React, { Component } from 'react'
import { AreaChart } from 'react-chartkick';
import 'chart.js';
import './chart-options.js';

class DirectionChart extends Component {
    render() {
        return (
            <div class='graph-container'>
                <AreaChart class='graph' width='90%' suffix=' %' xtitle='Station' ytitle='Delay probability' data={[["Vilvoorde", 87], ["Brussel-Zuid", 59], ["Gent-Sint-Pieters", 68]]} />
            </div>
        ) 
    }
}

export default DirectionChart;
