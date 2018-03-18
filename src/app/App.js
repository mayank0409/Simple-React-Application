import React, {Component} from "react";
import Header from "./components/Header";
 
export class App extends Component {
    
    render() {
        return(
            <div>
                 <Header appName="React Assignment by Mayank Mahajan (XI-543)"/>
                 <div>
                    {this.props.children}
                </div>
            </div>
        )
    } 
    
}