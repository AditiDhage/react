import React, { Component } from "react"

class MyTown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tempValC: "",
            tempValF: "",
            bShowTempF: false
        };

        this.fetchData = this.fetchData.bind(this);

    }

    fetchData(){
        fetch( 

        
        "https://api.openweathermap.org/data/2.5/weather?lat=18&lon=76&appid=9442d4638d93db07a5be341c838571b2&units=metric"
        
      ).then(response => {
        return response.json()
    })
    .then(response => {
        this.setState({
            tempValC: Math.floor(response.main.temp),
            tempValF: Math.floor ((response.main.temp * 9/5) + 32) 
        })
    });  
    }
    
    componentDidMount() {
        this.fetchData()
    }


    render() {
        return (
            <div>

            Latur is my hometown. 
            It is a 16th largest city in Marathwada region of Maharashtra. 
            The major population of district is primarily agricultural. 
            Urban population comprises 25.47% of the total population. 
                <h1>
                    Latur 
                </h1>
                
               
                <img alt={`Latur`} width={350} 
                src= "Latur.jpg"                
                />

                <div className="rows">
                    <p className="rows-item" >

                    {
                        this.state.tempValC < 10 ? 
                        <img alt={`cold`} height={100} 
                        src= "cold.png"                
                        />
                        :
                        (this.state.tempValC >= 10 && this.state.tempValC < 20) ? 
                        
                        <img alt={`mild`} height={100} 
                        src= "mild.png"                
                        />
                        :
                        <img alt={`sunny`} height={100} 
                        src= "sunny.png"                
                        />
                        
                    }
                    </p>
      
                    <p className="rows-item" >
                        <button height={55}
                            onClick={() => this.setState({ bShowTempF: !this.state.bShowTempF })}
                            className={this.state.bShowTempF ? "button" : "button-toggled"}
                            >
                            {
                                this.state.bShowTempF ? this.state.tempValF + "℉" 
                                : 
                                this.state.tempValC + "℃"
                            }
                        </button>

                    </p>
          </div>
            </div>

        )
    }
}


export default MyTown;