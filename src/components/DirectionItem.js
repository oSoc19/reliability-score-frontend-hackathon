import React, { Component } from 'react'
import { Timeline } from 'antd'
import WhiteWarningIcon from '../images/white-warning.png'
import DirectionChart from './DirectionChart.js'
import { CSSTransition } from 'react-transition-group'

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
            <CSSTransition in={true} appear={true} timeout={300} classNames='fade'>
                <div className='direction-item'>
                    <h2>Vilvoorde → Gent-Sint-Pieters</h2>

                    <div className='details'>
                        {
                            this.props.delay_probability > 20 ?
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
                                            <p>Platform <b>5</b></p>
                                        </div>

                                        <div className='to'>
                                            <p>15:12</p>
                                            <p>Platform <b>11</b></p>
                                        </div>
                                    </div>
                                </Timeline.Item>

                                <Timeline.Item color="blue">
                                    <h3>Brussel-Zuid</h3>
                                    <div className='station-informations'>
                                        <div className='from'>
                                            <p>15:09</p>
                                            <p>Platform <b>14</b></p>
                                        </div>
                                    </div>
                                </Timeline.Item>

                                <Timeline.Item color={this.props.delay_probability > 20 ? "orange" : "blue"}>
                                    <h3>Gent-Sint-Pieters</h3>
                                    <div className='station-informations'>
                                        <div className='from'>
                                            <p>15:09</p>
                                            <p>Platform <b>3</b></p>
                                        </div>
                                    </div>
                                </Timeline.Item>

                            </Timeline>

                            {
                                this.props.delay_probability > 20 ?
                                    <div>
                                        <div className='last-direction-notice' onClick={() => this.toggleChart()} >
                                            <div className='last-direction-notice-icon' />
                                            <p>You <b>{this.props.delay_probability > 50 ? 'will probably' : 'might'}</b> arrive too late with approximately <b>{this.props.average_delay} min.</b> delay.</p>
                                        </div>

                                        {
                                            this.state.chartVisible ? <DirectionChart /> : null
                                        }
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default DirectionItem;
