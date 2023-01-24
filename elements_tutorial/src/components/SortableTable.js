import Table from "./Table";
import {GoArrowUp, GoArrowDown} from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const {config, data} = props;
    const {setSortColumn, sortBy, sortOrder, sortedData} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    });

    return <Table {...props} data={sortedData} config={updatedConfig}/>;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowUp/>
                <GoArrowDown/>
            </div>
        );
    }

    if (sortOrder === 1) {
        return (
            <div>
                <GoArrowUp/>
            </div>
        );
    } else if (sortOrder === -1) {
        return (
            <div>
                <GoArrowDown/>
            </div>
        );
    }
}

export default SortableTable;