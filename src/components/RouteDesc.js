import React, { useState, useEffect } from 'react';
import '../RouteDesc.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { RouteDescLocation } from './RouteDescLocation';
import {Link} from 'react-router-dom';
import { BarMeter } from './BarMeter';


export function RouteDesc(props){
    const carbonMeter = props.location.state.carbonMeter;
    const rowLen = props.location.state.routeList.length;

    const [showModal, setShowModal] = useState(false);
    const [showModalResult, setShowModalResult] = useState(false);

    const [globalName, setGlobalName] = useState("");
    const [globalEmail, setGlobalEmail] = useState("");
    

    function handleCloseModal(){
        setShowModal(false);
        if(showModalResult) {
            setShowModalResult(false);
        }
        document.body.style.overflow = 'unset';
    }


    function handleOpenModal(e){
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        setShowModal(true);
        window.addEventListener('keydown', onKeyPressed);
    }

    function onKeyPressed(e){
        if(e.keyCode === 27){
            setShowModal(false);
            window.removeEventListener('keydown', onKeyPressed);
            document.body.style.overflow = 'unset';
        }
    }

    function onKeyPressedResult(e) {
        if(e.keyCode === 27){
            setShowModalResult(false);
            window.removeEventListener('keydown', onKeyPressedResult);
            document.body.style.overflow = 'unset';
        }
    }

    
    const locationRef = React.createRef();
    function handleLocationClick(){
        locationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    function ModalForm(){

        return (
            <div className='modal-form'>
                <div className="modal-form-content" >
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <div className="Modal-form-desc-text">
                        <div className="Modal-form-desc-title">
                            <h2>{props.location.state.routeName} Pre-paid Parking</h2>
                            <h3>Fill up form below for pre-paid parking reservation.</h3>
                        </div>
                        <div className="Modal-form-desc-subtitle Body-text1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed convallis est. Nam quis tincidunt ex, quis tempus dui. Proin in sodales purus.<br /><br />
                            <FormPrepaid key="formprepaid1" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function FormPrepaid() {

        const [fullname, setFullname] = useState("");
        const [email, setEmail] = useState("");
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
                setGlobalName(fullname);
                setGlobalEmail(email);
                setShowModalResult(true);
                setShowModal(false);
                window.addEventListener('keydown', onKeyPressedResult);
            }
            
        }
    
    
        return (
            <div>
            <form onSubmit={submitForm}>
                <div className="Input-group">
                    <div className="Input-label-div">
                        <label className="Input-label Body-text1">Fullname </label>
                    </div>
                    <div className="Input-text-div" >
                        <input className="Input-text" id="fullname" type="text" name="fullname" onChange={handleChangeName} value={fullname}></input>
                    </div>
                </div>
                <div className="Input-group">
                    <div className="Input-label-div">
                        <label className="Input-label Body-text1">Email Address </label>
                    </div>
                    <div className="Input-text-div">
                        <input className="Input-text" id="email" type="text" name="email" onChange={handleChangeEmail} value={email}></input>
                    </div>
                </div>
                <span className="Input-error-text Body-text2">{error}</span><br/>
                <button className="Button-submit" type="submit">Submit</button>
            </form>
            
            </div>
    
        );
    }

    function ModalResult(){
        return (
            <div className='modal-form'>
                <div className="modal-form-content" >
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <div className="Modal-form-desc-text">
                        <div className="Modal-form-desc-title">
                            <h3>Thank you {globalName} for reserving pre-paid parking service.</h3>
                        </div>
                        <div className="Modal-form-desc-subtitle Body-text1">
                            Please check your email inbox ({globalEmail}) to set up the payment.
                        </div>
                    </div>
                </div>
            </div>
        );
    
    }

   
    return (
        <div className="Routedesc-wrapper">
            <div className="Routedesc-header">
                <div className="Routedesc-header-back">
                    <Link className="Link-to" to="/">
                        <span className="Back-navigation Body-text1">
                            <FontAwesomeIcon icon={faArrowLeft} /> &nbsp;Back
                        </span>
                    </Link>
                </div>
                <div className="Routedesc-header-title">
                    <h1>{props.location.state.routeName}</h1>
                </div>
                <div className="Routedesc-header-subtitle Body-text1">
                    <b>Enjoy a comfortable and convenient ride to and from the airport with {props.location.state.routeName} service in: {props.location.state.routeList.map((rank, i) => {
                        if(rowLen === i + 1) {
                            return <span key="lastLoc" className="Header-subtitle-location">and <a className="Link-to" onClick={handleLocationClick}>{rank.locationName}</a></span>;
                        } else {
                            return <span key={"loc"+i} className="Header-subtitle-location"><a className="Link-to" onClick={handleLocationClick}>{rank.locationName}</a>, </span>;
                        }
                    })}</b>
                </div>
                <div className="Routedesc-button-park-reserve">
                    <button className="Button-blue" onClick={handleOpenModal}>
                        Reserve Your Parking Spot Now &nbsp;<FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>
            </div>
            <div className="Routedesc-body">
                <div className="Routedesc-body-left">
                    <div className="Routedesc-body-about">
                        <h2>About {props.location.state.routeName}</h2>
                        <div className="Body-text1">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed convallis est. Nam quis tincidunt ex, quis tempus dui. Proin in sodales purus. Suspendisse in efficitur arcu, non egestas velit. Cras viverra ultricies accumsan. 
                            </p>
                            <p>
                                Donec aliquam ornare erat, id scelerisque justo placerat in. Sed consectetur nibh iaculis ex consequat, ac posuere nulla vestibulum.    
                            </p>
                            <p>
                                Etiam fringilla arcu ac libero gravida, non pellentesque velit commodo.
                            </p>
                                In erat mi, laoreet nec ipsum sit amet, finibus pretium ex. In semper, quam sed tincidunt convallis, felis mauris pretium justo, et pretium purus nulla in libero. Vivamus rhoncus in erat ut euismod. Suspendisse at rutrum purus. Proin varius magna non ante dapibus egestas ac quis ante. Phasellus in semper erat.
                        </div>
                    </div>
                    <div className="Routedesc-body-location">
                        <h3>{props.location.state.routeName} Locations:</h3>
                        <div className="Routedesc-body-location-list" ref={locationRef}>
                            {props.location.state.routeList.map(routeDesc => <RouteDescLocation key={routeDesc.key} {...routeDesc}/>)}
                        </div>
                    </div>
                </div>
                <div className="Routedesc-body-right">
                    <div className="Routedesc-body-card">
                        <div className="Routedesc-body-card-image">
                            <img className="Routedesc-body-card-image-source" src={process.env.PUBLIC_URL + props.location.state.pictureFile}/>
                        </div>
                        <div className="Routedesc-body-card-subtitle Body-text3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed convallis est. Nam quis tincidunt ex, quis tempus dui. Proin in sodales purus.
                        </div>
                        <BarMeter carbonMeter={carbonMeter} isWithTooltip={false} />
                    </div>                
                </div>
            </div>
            { showModal && <ModalForm key="modalform1" /> }
            { showModalResult && <ModalResult />}
        </div>
    );
}