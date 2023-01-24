import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Cherry', color: 'bg-red-700', score: 1},
        {name: 'Pear', color: 'bg-green-500', score: 2},
        {name: 'Banana', color: 'bg-yellow-500', score: 4},
        {name: 'Blueberry', color: 'bg-blue-500', score: 3}
    ];

    const config = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}/>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TablePage;