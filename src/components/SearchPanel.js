import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { AutoComplete, Button, DatePicker, TimePicker } from 'antd'
import moment from 'moment'
import './SearchPanel.css'

const dataSource = ['Antwerpen', 'Gent-Sint-Pieters']

class SearchPanel extends Component {
    state = {
        loading: false,
        redirect: false
    }

    componentWillMount = () => {
        document.title = 'Reliability Score - Prepare your delay'
    }

    handleFetchDirection = () => {
        this.setState({
            loading: true
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
        if (this.state.redirect)
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

                    <div className='time-form'>
                        <div className='item'>
                            <span className='title-form'>WHEN</span>
                            <DatePicker defaultValue={moment(new Date(), 'DD/MM/YYYY')} format='DD/MM/YYYY' />
                        </div>

                        <div className='item'>
                            <span className='title-form'>AT</span>
                            <TimePicker format='HH:mm' />
                        </div>
                    </div>

                    <Button onClick={this.handleFetchDirection} type="primary" loading={this.state.loading}>{this.state.loading ? 'Please wait' : 'Let\' plan !'}</Button>
                </form>
            </div>
        )
    }
}

export default SearchPanel