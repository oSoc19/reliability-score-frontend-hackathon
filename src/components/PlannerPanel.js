import React, { Component } from 'react'
import './PlannerPanel.css'
import DirectionCollection from './DirectionCollection';

class PlannerPanel extends Component {
    render() {
        return (
            <div className='content'>
                <DirectionCollection />
            </div>
        )
    }
}

export default PlannerPanel