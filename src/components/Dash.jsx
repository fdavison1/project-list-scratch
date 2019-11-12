import React from 'react'
import Projects from './Projects'

export default class Dash extends React.Component{
    constructor(){
        super()

        this.state = {

        }
    }
    render(){
        return(
            <div className="dash">

                Dash.jsx
                <Projects/>

            </div>
        )
    }
}