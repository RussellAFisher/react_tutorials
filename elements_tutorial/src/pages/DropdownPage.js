import Dropdown from "../components/Dropdown";
import {useState} from "react";

function DropdownPage() {
    const [dropdownSelection, setDropdownSelection] = useState(null);

    const handleDropdownSelect = (option) => {
        setDropdownSelection(option);
    }

    const options = [
        {
            label: 'Purple',
            value: 'purple'
        },
        {
            label: 'Red',
            value: 'red'
        },
        {
            label: 'Blue',
            value: 'blue'
        },
        {
            label: 'Green',
            value: 'green'
        }
    ];

    return (
        <div className="flex">
            <Dropdown options={options} value={dropdownSelection} onChange={handleDropdownSelect}/>
        </div>
    );
}

export default DropdownPage;