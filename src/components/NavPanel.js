import React, { Component } from "react";

class NavPanel extends Component {
    render() {
        console.log(this.props.items);
        return (
            <div className="navpanel-wrapper">
                <ul>
                    {this.props.items.map((item) => {
                        return <li>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default NavPanel;
