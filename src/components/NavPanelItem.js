import React, { Component } from "react";
import "../resources/NavPanelItem.css";

class NavPanelItem extends Component {
    render () {
        let image = null;
        if (this.props.img) {
            image = <img className="img" src={this.props.img} />
        }

        return (
            <div className="NavPanelItem">
                <div className={this.props.separator ? "separator" : "item"}
                    onClick={this.props.onClick}>
                    {image}
                    <div>
                        <h2 className="title">{this.props.title}</h2>
                        <p className="text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

NavPanelItem.defaultProps = {
    separator: false
};

export default NavPanelItem;
