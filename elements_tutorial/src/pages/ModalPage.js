import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button danger outline rounded onClick={handleClose}>Close modal</Button>
        </div>
    );

    const modal = (
        <Modal handleClose={handleClose} actionBar={actionBar}>
            <p>
                Modal content goes here, woop woop
            </p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;