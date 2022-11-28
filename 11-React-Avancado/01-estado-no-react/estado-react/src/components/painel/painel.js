import { Component } from 'react'
import './painel.css'

class Painel extends Component{
    constructor(){
        super()
        this.state = {
            title: 'Título do painel'
        }
    }

    render(){        
        return(
            <section className="painel" onClick={
               () => {              
                    this.setState(
                        {title: 'Título novo'}
                    )
                }
            }>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Painel