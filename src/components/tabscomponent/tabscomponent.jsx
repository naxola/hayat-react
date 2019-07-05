import React, { Component } from "react";
import PropTypes from "prop-types";
import TabComponent from "./tabcomponent";

import "./tabscomponent.css";

class TabsComponent extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = TabComponent => {
    this.setState({ activeTab: TabComponent });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map(child => {
            const { label, imgSource } = child.props;

            return (
              <TabComponent
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                imgSource={imgSource}
              />
            );
          })}
        </ol>
        <div className="tab-content container-50">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
export default TabsComponent;
