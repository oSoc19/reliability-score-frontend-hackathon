import React, { Component } from 'react'
import propTypes from 'prop-types'
import DirectionItem from './DirectionItem';

class DirectionCollection extends Component {
    render() {
        return (
            <div className='direction-collection'>
                <DirectionItem />
                <DirectionItem />
            </div>
        )
    }
}

export default DirectionCollection