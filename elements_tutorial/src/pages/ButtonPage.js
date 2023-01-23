import Button from "../components/Button";
import {GoBeaker, GoCircuitBoard, GoMegaphone} from "react-icons/go";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button primary rounded><GoBeaker/>Primary</Button>
            </div>
            <div>
                <Button secondary outline><GoCircuitBoard/>Secondary</Button>
            </div>
            <div>
                <Button success><GoMegaphone/>Success</Button>
            </div>
            <div>
                <Button warning outline rounded>Warning</Button>
            </div>
            <div>
                <Button danger>Danger</Button>
            </div>
        </div>
    );
}

export default ButtonPage;