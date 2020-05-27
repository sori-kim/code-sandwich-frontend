import React, {Component} from "react";
import "./Test.scss";

class Test extends Component {
    state = {
        sandwich: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/data/data.json', {
            method: "GET",
            headers: {
                'Content-type': 'appliaction/json'
            }
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }
    

    render(){
        return(
            <div>
                <div className='ani'>
                    <p>늘어나나?</p>
                </div>
            </div>
        )
    }
}

export default Test;