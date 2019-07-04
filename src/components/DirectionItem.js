import React, { Component } from 'react'
import { Timeline } from 'antd'
import OrangeWarningIcon from '../images/orange-warning.png'
import WhiteWarningIcon from '../images/white-warning.png'

class DirectionItem extends Component {
    render() {
        return (
            <div className='direction-item'>
                <h2>Vilvoorde → Gent-Sint-Pieters</h2>

                <div className='details'>
                    <div className='important-sign'>
                        <img src={WhiteWarningIcon} alt='important notice' />
                    </div>

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

                            <Timeline.Item color="orange">
                                <h3>Gent-Sint-Pieters</h3>
                                <div className='station-informations'>
                                    <div className='from'>
                                        <p>15:09</p>
                                        <p>Plateform <b>3</b></p>
                                    </div>
                                </div>
                            </Timeline.Item>
                            
                        </Timeline>

                        <div className='last-direction-notice'>
                            <img src={OrangeWarningIcon} alt='delay information' />
                            <p>You will probably arrive too late with approximately 16 - 20 min. delay</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DirectionItem