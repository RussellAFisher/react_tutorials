import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar/>
            <div className="col-span-5">
                <Route path="/">
                    <ButtonPage/>
                </Route>
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>
                <Route path="/dropdown">
                    <DropdownPage/>
                </Route>
                <Route path="/modal">
                    <ModalPage/>
                </Route>
                <Route path="/table">
                    <TablePage/>
                </Route>
                <Route path="/counter">
                    <CounterPage initialCount={1}/>
                </Route>
            </div>
        </div>
    )
}

export default App;