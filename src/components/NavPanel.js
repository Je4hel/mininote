import React, { Component } from "react";
import NavPanelItem from "./NavPanelItem";
import "../resources/NavPanel.css";

class NavPanel extends Component {
    render() {
        return (
            <div className="navpanel">
                {this.props.items.map((item) => {
                    return <NavPanelItem key={item.key} onClick={item.onClick} {...item} />
                })}
            </div>
        )
    }
}

NavPanel.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        key: React.PropTypes.any.isRequired,
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string,
        img: React.PropTypes.string,
        separator: React.PropTypes.bool
    }))
}

export default NavPanel;
