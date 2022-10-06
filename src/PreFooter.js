import React, { Component } from 'react'
import cristal from './img/icon-ethereum.svg'
import clock from './img/icon-clock.svg'
export default class PreFooter extends Component {
    constructor() {
        super();
        this.state = {
            hour: 9,
            min: 31,
            sec: 59,
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.sec == 0) {
                this.state.sec = 59
            }
            this.setState({
                sec: this.state.sec - 1,
            })

        }, 1000)
        setInterval(() => {
            if (this.state.min == 0) {
                this.state.min = 59
            }
            this.setState({
                min: this.state.min - 1,
            })
        }, 60000)
        setInterval(() => {
            if (this.state.hour == 0) {
                this.state.hour = 12
            }
            this.setState({
                hour: this.state.hour - 1,
            })
        }, 3600000)
    }

    render() {
        return (
            <div className='prefoter'>
                <div>
                    <img src={cristal} alt="" />
                    <span className='eth'>0.041 ETH</span>
                </div>
                <div>
                    <img src={clock} alt="" />
                    <span className='spanclock'>{this.state.hour}:{this.state.min}:{this.state.sec} hour left</span>
                </div>
            </div>
        )
    }
}

