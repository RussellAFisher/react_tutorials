import {useState, useEffect, useRef} from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        // Cleanup event listener, happens on every state change but most useful for disabling if dropdown no longer on screen
        return () => {
            document.removeEventListener('click', handler);
        };
    }, [])

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const dropdownOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleDropdownClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-xl"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full">{dropdownOptions}</Panel>}
        </div>
    );
}

export default Dropdown;