import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";
import Tab from "./Tab";
// This component keeps track of which tab is active,
// displays a list of tabs, and the content for the active tab.

export default function Tabs({ children }) {
    Tabs.propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    };
    // React’s props.children
    // console.log(children[0].props.label);
    // first tab label
    const label = children[0].props.label;
    //  active tab will start at 0 in the array of tabs
    const [activeTab, setActiveTab] = React.useState(label);

    function onClickTabItem(tab) {
        setActiveTab(tab);
    }
    return (
        <div className="tabs">
        <ol className="tab-list">
            {children.map((child) => {
            // Tab label
            const { label } = child.props;

            return (
                <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                />
            );
            })}
        </ol>
        <SearchBar/>
        <div className="tab-content">
            {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
            })}
        </div>
        </div>
    );
}
