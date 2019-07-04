import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { AutoComplete, Button } from 'antd'
import './SearchPanel.css'

const dataSource = ['Antwerpen', 'Gent-Sint-Pieters']

class SearchPanel extends Component {
    state = {
        loading: false,
        redirect: false
    }

    handleFetchDirection = () => {
        this.setState({
            loading : true
        })

        // Do something

        // Simulate loading
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 2000)
    }

    render() {
        if(this.state.redirect)
            return <Redirect to='/planner/'></Redirect>

        return (
            <div className='content global search-panel'>
                <h2>Find your journey</h2>

                <form>
                    <span className='title-form'>FROM</span>
                    <AutoComplete
                        dataSource={dataSource}
                        placeholder='Departure'
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />

                    <span className='title-form'>TO</span>
                    <AutoComplete
                        dataSource={dataSource}
                        placeholder='Arrival'
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />

                    <Button onClick={this.handleFetchDirection} type="primary" loading={this.state.loading}>{this.state.loading ? 'Please wait' : 'Let\' plan !'}</Button>
                </form>
            </div>
        )
    }
}

export default SearchPanel