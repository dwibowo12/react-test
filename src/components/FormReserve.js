import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import '../FormReserve.css';

export function FormReserve() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [modal, setModal] = useState(false);
    const [error, setError] = useState("");
    
    function handleChangeName(e){
        setFullname(e.target.value);
    }

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function validateEmail(){
        const regex = /^[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/;

        return regex.test(email);
    }

    function submitForm(e){
        e.preventDefault();
        if(fullname === "" || email === ""){
            setError("Please fill all form first");
        } else if(!validateEmail()){
            setError("Please enter a valid email");
        } else {
            setError("");
            setModal(true);
            window.addEventListener('keydown', onKeyPressed);
        }
        
    }

    function onKeyPressed(e){
        if(e.keyCode === 27){
            setModal(false);
            window.removeEventListener('keydown', onKeyPressed);
        }
    }

    function handleCloseModal(){
        setModal(false);
        window.removeEventListener('keydown', onKeyPressed);
    }

    return (
        <div className="Form-wrapper">
            
            <div className="Form-header">
                <Link className="Link-to" to="/reserve">
                    <p className="Body-text2"><FontAwesomeIcon icon={faArrowLeft} /> &nbsp;Back</p>
                </Link>
                <div className="Form-header-title">
                    <h1>Pre-paid parking reservation</h1>
                </div>
                <div className="Body-text1">
                    <b>Fill up form below to pre-paid parking reserve &nbsp;<FontAwesomeIcon icon={faQuestionCircle} /></b>
                </div>
            </div>
            <div className="Form-content">
                <div className="Content-explanation Body-text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum iaculis arcu sed facilisis. Vestibulum a risus ac lacus vulputate congue. Morbi ullamcorper tristique mauris eget posuere. Aenean convallis dapibus nibh, consequat mollis ex finibus vitae. Ut sed massa vel felis malesuada laoreet sit amet nec lectus. Etiam ut varius nisl. Donec vestibulum leo eget dolor placerat facilisis. Phasellus eleifend vitae erat porttitor venenatis. Pellentesque quis tortor quis eros fringilla viverra. Vestibulum condimentum risus quis urna sollicitudin hendrerit. Maecenas ultricies rutrum mauris id facilisis. Donec ex ante, venenatis eleifend finibus ut, congue sit amet ante. Curabitur et vulputate elit. Aenean lectus mauris, ullamcorper et enim rhoncus, tempor rutrum augue.
                </div>
                <form onSubmit={submitForm}>
                    <div className="Input-group">
                        <div className="Input-label-div">
                            <label className="Input-label Body-text1">Fullname </label>
                        </div>
                        <div className="Input-text-div">
                            <input className="Input-text" type="text" name="fullname" onChange={handleChangeName} value={fullname}></input>
                        </div>
                    </div>
                    <div className="Input-group">
                        <div className="Input-label-div">
                            <label className="Input-label Body-text1">Email Address </label>
                        </div>
                        <div className="Input-text-div">
                            <input className="Input-text" type="text" name="email" onChange={handleChangeEmail} value={email}></input>
                        </div>
                    </div>
                    <span className="Input-error-text Body-text2">
                        {error}
                    </span><br/>
                    <button className="Button-submit" type="submit">Submit</button>
                </form>
            </div>
            <div id="myModal" className={ modal ? 'modal-form-showed' : 'modal-form-closed'} >
                <div className="modal-form-content" >
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <div className="Modal-form-desc-text">
                        <div className="Modal-form-desc-title">
                            <h3>Thank you {fullname} for reserving pre-paid parking service.</h3>
                        </div>
                        <div className="Modal-form-desc-subtitle Body-text1">
                            Please check your email inbox ({email}) to set up the payment.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}