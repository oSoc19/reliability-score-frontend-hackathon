import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchPanel.css'

class SearchPanel extends Component {
    render() {
        return (
            <div className='content'>
                <Link to='/planner/'><h1>Click here to go to the next page</h1></Link>
            </div>
        )
    }
}

export default SearchPanel