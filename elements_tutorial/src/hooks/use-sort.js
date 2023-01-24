import {useState} from "react";

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
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

    return {
        sortOrder,
        sortBy,
        setSortColumn,
        sortedData
    }
}

export default useSort;