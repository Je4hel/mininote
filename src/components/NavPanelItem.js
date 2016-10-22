import React, { Component } from "react";
import "../resources/NavPanelItem.css";

class NavPanelItem extends Component {
    render () {
        let image = null;
        if (this.props.img) {
            image = <img className="navpanel-img" src={this.props.img} />
        }

        return (
            <div className={this.props.separator ? "navpanel-separator" : "navpanel-item"}
                onClick={this.props.onClick}>
                {image}
                <div>
                    <h2 className="navpanel-title">{this.props.title}</h2>
                    <p className="navpanel-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

NavPanelItem.defaultProps = {
    separator: false
};

export default NavPanelItem;
