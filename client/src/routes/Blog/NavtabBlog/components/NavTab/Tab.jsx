import React from "react";
import PropTypes from "prop-types";

// The Tab component displays the name of the tab and adds an additional class
// if the tab is active. When clicked, the component will fire a handler, onClick,
// that will let the Tabs component know which tab should be active.

export default function Tab({ activeTab, label, onClick }) {
    Tab.propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    const handleClick = () => {
        onClick(label);
    };
    let className = "tab-list-item";
    return (
        <>
        <li
            className={`${className} 
            ${activeTab === label ? "tab-list-active" : ""}`}
            onClick={handleClick}
        >
            {label}
        </li>
        </>
    );
}
