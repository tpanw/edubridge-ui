import React, {Component} from "react";
import ScrollSpy from "react-scrollspy";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems : [{text:"Home", id:"home"},
                        {text:"About", id:"about"},
                        {text:"Team", id:"team"},
                        {text:"Connect", id:"connect"}]
        }
    }
    render(){
        return(
            <div className="collapse navbar-collapse" id="menu">
                <ScrollSpy className="navbar-nav ml-auto" 
                    items={ this.state.menuItems.map(item => item.id) } 
                    currentClassName="active">
                        {this.state.menuItems.map(item => 
                            <li className="nav-item">
                                <a className="nav-link" href={`#${item.id}`}>{item.text}</a>
                            </li>
                        )}
                </ScrollSpy>
            </div>    
        )
    }
}

export default Menu;