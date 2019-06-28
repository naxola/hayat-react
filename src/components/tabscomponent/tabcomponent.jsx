import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TabComponent extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    imgSource: PropTypes.func.isRequired
  };

  onClick = () => {
    const { label, imgSource, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, imgSource }
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        <img className="tab-item-image" src={imgSource} />
        {label}
      </li>
    );
  }
}
