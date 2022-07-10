import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {CloseButton} from "react-bootstrap";
import './Categories.css'

const Categories = ({children}) => {
    const [close, setClose] = useState('open')
    const [img, setImg] = useState('img-close')
    const closeCategory = () => {
        setClose('close')
        setImg('img')
    }
    const addCategory = () => {
        setClose('open')
        setImg('img-close')
    }

    return (
        <div>
            <div className={close}>
                <div className='bg-secondary bg-opacity-25 d-flex justify-content-between align-items-center px-2 py-1 mb-2 categoryMargin'>
                    <p className='mb-0'>{children}</p>
                    <CloseButton onClick={closeCategory}/>
                </div>
            </div>
            <div>
                <img src={require('../../../images/plus.png')} alt='' className={img} onClick={addCategory}/>
            </div>
        </div>
    );
};

export default Categories;
