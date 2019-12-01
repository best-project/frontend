import SelectOption from "./select-option";

type SelectProps = {
    options: SelectOption[];
    isFirstSelected: boolean;
    value: string;
    onChange: (value: string) => void;
};

export default SelectProps;
