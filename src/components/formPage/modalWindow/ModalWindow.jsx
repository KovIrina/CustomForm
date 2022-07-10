import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Modal} from "react-bootstrap";

const ModalWindow = ({children}) => {
    const [lgShow, setLgShow] = useState(false);
    return (
        <div>
            <a href='#' onClick={() => setLgShow(true)} className='text-decoration-none'>Детали</a>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Детали
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalWindow;
