import React, { Component } from 'react'
import { Timeline } from 'antd'
import WhiteWarningIcon from './images/white-warning.png'
import DirectionChart from './DirectionChart.js'


class DirectionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartVisible: false,
        };
    }

    toggleChart() {
        this.setState(prevState => ({ chartVisible: !prevState.chartVisible }));
    }

    render() {
        return (
            <div className='direction-item'>
                <h2>Vilvoorde → Gent-Sint-Pieters</h2>

                <div className='details'>
                    {
                        this.props.delay_probability > 20?
                        <div className='important-sign'>
                            <img src={WhiteWarningIcon} alt='important notice' />
                        </div>
                        : null
                    }

                    <div className='inside-content'>
                        <Timeline>
                            <Timeline.Item color="blue">
                                <h3>Vilvoorde</h3>
                                <div className='station-informations'>
                                    <div className='from'>
                                        <p>15:09</p>
                                        <p>Plateform <b>5</b></p>
                                    </div>

                                    <div className='to'>
                                        <p>15:12</p>
                                        <p>Plateform <b>11</b></p>
                                    </div>
                                </div>
                            </Timeline.Item>

                            <Timeline.Item color="blue">
                                <h3>Brussel-Zuid</h3>
                                <div className='station-informations'>
                                    <div className='from'>
                                        <p>15:09</p>
                                        <p>Plateform <b>14</b></p>
                                    </div>
                                </div>
                            </Timeline.Item>

                            <Timeline.Item color={this.props.delay_probability > 20? "orange": "blue"}>
                                <h3>Gent-Sint-Pieters</h3>
                                <div className='station-informations'>
                                    <div className='from'>
                                        <p>15:09</p>
                                        <p>Plateform <b>3</b></p>
                                    </div>
                                </div>
                            </Timeline.Item>
                            
                        </Timeline>

                        {
                            this.props.delay_probability > 20? 
                            <div>
                                <div className='last-direction-notice' onClick={() => this.toggleChart()} >
		                                <div className='last-direction-notice-icon'  />
                                    <p>You will probably ({this.props.delay_probability} %) arrive too late with approximately {this.props.average_delay} min. delay</p>
                                </div>

                                {
                                    this.state.chartVisible? <DirectionChart />: null
                                }
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DirectionItem;
