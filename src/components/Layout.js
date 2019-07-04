import React, { Component, Fragment } from 'react'
import Header from './Header'
import SearchPanel from './SearchPanel'
import PlannerPanel from './PlannerPanel'

class Layout extends Component {
    render() {
        const { destination } = this.props.match.params

        let currentComponent = null
        let withBackButton = false

        switch (destination) {
            case 'planner':
                currentComponent = <PlannerPanel />
                withBackButton = true
                break;
            default:
                currentComponent = <SearchPanel />
                withBackButton = false
                break;
        }

        return (
            <Fragment>
                <Header withBackButton={withBackButton} />

                
                {currentComponent}
            </Fragment>
        )
    }
}

export default Layout