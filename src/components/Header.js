import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../images/logo.png'

class Header extends Component {
    render() {
        return (
            <header className='shadow'>
                <div className='content'>
                    {this.props.withBackButton ? <Link to='/'><div className='header-back-btn' onClick={this.handleGoToBack}><span className="icon-arrow-left"></span></div></Link> : null}

                    <div className='logo' onClick={this.handleGoBack}>
                        <img src={Logo} alt='Reliability Score logo' />
                        <h1>Reliability Score</h1>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    withBackButton: propTypes.bool.isRequired
}

export default Header