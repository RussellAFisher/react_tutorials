import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            label: 'Label',
            content: 'Accordion content',
            id: 1
        },
        {
            label: 'Label2',
            content: 'Accordion content2',
            id: 2
        },
        {
            label: 'Label3',
            content: 'Accordion content3',
            id: 3
        }
    ];

    return <Accordion items={items}/>
}

export default AccordionPage;