import React from "react";
import SelectProps from "./select.props";

const SelectComponent = (props: SelectProps) => {
    return (
        <select
            className="custom-select custom-select-sm"
            value={props.value}
            onChange={e => props.onChange(e.currentTarget.value)}
        >
            {props.options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

SelectComponent.defaultProps = {
    isFirstSelected: true,
};

export default SelectComponent;
