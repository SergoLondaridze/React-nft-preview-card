import React, { Component } from 'react'

export default class Test extends Component {
    componentDidMount() {
        console.log('Did Mount გაეშვა')
        setTimeout(() => {
            this.setState({
                color: 'green'
            })
        }, 2000)
    }
    shouldComponentUpdate(){
        return true;
    }
    componentDidUpdate(){
        console.log('კომპონენტი დააბდეითდა')
    }
    componentWillUnmount(){
        alert('კომპონენტი წაიშლება')
    }
    constructor() {
        super();
        console.log('Constructor გაეშვა')
        this.state = {
            color: 'red'
        }
    }
    render() {
        console.log('Render გაეშვა')
        return (
            <div style={{ color: this.state.color }}>Test</div>
        )
    }
}
