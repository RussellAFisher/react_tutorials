import Table from "./Table";
import {useState} from "react";
import {GoArrowUp, GoArrowDown} from "react-icons/go";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] =  useState(null);
    const {config, data} = props;

    const handleSort = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder(1);
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder(1);
            setSortBy(label);
        } else if (sortOrder === 1) {
            setSortOrder(-1);
            setSortBy(label);
        } else if (sortOrder === -1) {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
       if (!column.sortValue) {
           return column;
       }

       return {
           ...column,
           header: () => (
               <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleSort(column.label)}>
                   <div className="flex items-center">
                       {getIcons(column.label, sortBy, sortOrder)}
                       {column.label}
                   </div>
               </th>
           )
       }
    });

    let sortedData = data;

    if (sortOrder && sortBy) {
        const {sortValue} = config.find(column => column.label === sortBy);

        sortedData = [...data].sort((a, b) => {
           const valueA = sortValue(a);
           const valueB = sortValue(b);

           if (typeof valueA === 'string') {
               return valueA.localeCompare(valueB) * sortOrder;
           } else {
               return (valueA - valueB) * sortOrder;
           }
        });
    }

    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        );
    }

    if (sortOrder === 1) {
        return (
            <div>
                <GoArrowUp />
            </div>
        );
    } else if (sortOrder === -1) {
        return (
            <div>
                <GoArrowDown />
            </div>
        );
    }
}

export default SortableTable;