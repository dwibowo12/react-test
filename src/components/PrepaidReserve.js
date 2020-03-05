import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import '../Reserve.css';
import { ModalPrepaidDescSection } from './ModalPrepaidDescSection';

export function PrepaidReserve(){
    const ModalPrepaidData = [
        {
            title: "Secure spot with maximum protection",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut nunc eu purus lacinia luctus ac nec leo. Donec ornare consequat bibendum. Aenean sed augue at velit tempus faucibus vitae non metus. Aliquam erat volutpat."
        },
        {
            title: "24 hours flexible service",
            subtitle: "Duis a vehicula nisl, quis tempor mi. Fusce pellentesque dolor orci,    sit amet condimentum dui porttitor a. Suspendisse faucibus risus sed magna pretium pulvinar. Donec vitae convallis elit. "
        },
        {
            title: "Fast response and handling",
            subtitle: "Quisque vitae tellus aliquet quam hendrerit dignissim ut sit amet orci. Donec ullamcorper in nunc id tempus. Mauris sodales turpis ultrices ullamcorper pellentesque."
        },
    ]

    const [showModal, setShowModal] = React.useState(false);
    function handleOpenModal(e){
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        setShowModal(true);
        window.addEventListener('keydown', onKeyPressed);
    }

    function onKeyPressed(e){
        if(e.keyCode === 27){
            setShowModal(false);
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', onKeyPressed);
        }
        
    }

    function handleCloseModal(){
        setShowModal(false);
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', onKeyPressed);
    }


    return (
        <div className="Prepaid-content">
            <div className="Prepaid-header">
                <div className="Prepaid-header-back">
                    <Link className="Link-to" to="/">
                        <span className="Body-text2"><FontAwesomeIcon icon={faArrowLeft} /> &nbsp;Back</span>
                    </Link>
                </div>
                <h1>Get a pre-paid parking reservation!</h1>
                <p className="Header-text Body-text1">
                    <b>Book your parking spot here and save time on your travel day! Your arrival and departure time may be an estimate.</b>
                </p>
            </div>
            <div className="Prepaid-body">
                <div className="Prepaid-body-left">
                    <div className="Prepaid-body-desc-title">
                        <h3>About Pre-Paid Parking</h3>
                    </div>
                    <div className="Prepaid-body-desc Body-text1">
                        Take a pre-paid parking reservation and you will get :

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut nunc eu purus lacinia luctus ac nec leo. Donec ornare consequat bibendum. Aenean sed augue at velit tempus faucibus vitae non metus. Aliquam erat volutpat. Etiam non elit vulputate est molestie placerat in id nisi. Donec a mauris scelerisque lorem tempor pellentesque nec sit amet orci. Aliquam ac facilisis ex. Morbi ornare non est sit amet dignissim. Cras non risus a elit hendrerit dictum a eu diam:
                        </p>
                        <ul>
                            <li>
                                Quisque vitae tellus aliquet quam hendrerit dignissim ut sit amet orci.
                            </li>
                            <li>
                                Donec ullamcorper in nunc id tempus. Mauris sodales turpis ultrices ullamcorper pellentesque.
                            </li>
                            <li>
                                Fusce sed laoreet massa.
                            </li>
                            <li>
                                Praesent sit amet felis aliquam, iaculis magna vitae, vulputate arcu.
                            </li>
                        </ul>
                        <p>
                            Duis a vehicula nisl, quis tempor mi. Fusce pellentesque dolor orci, sit amet condimentum dui porttitor a. Suspendisse faucibus risus sed magna pretium pulvinar. Donec vitae convallis elit. Quisque eget erat in neque dictum lacinia. Phasellus at enim sed ipsum aliquet pharetra a vitae arcu. Nunc turpis velit, porttitor in magna a, volutpat fermentum ligula. Curabitur sed metus odio. Proin interdum, nunc vel tincidunt ultrices, massa ipsum consequat nulla, eu ultrices mauris dui vel dui. Etiam elit lacus, tristique nec pretium vel, mollis mattis.
                        </p>
                        <div className="Prepaid-body-reserve-button">
                            <Link to="/reserve/form">
                                <button className="Prepaid-body-button-content">Reserve Now!</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Prepaid-body-right">
                    <div className="Card-prepaid">
                        <div className="Card-prepaid-image">
                            <img className="Card-prepaid-image-source" src={process.env.PUBLIC_URL + '/parklot.jpg' } />
                        </div>
                        <div className="Card-prepaid-text Body-text2">
                            <div className="Card-prepaid-text-desc"><b>Get the best service to save time for parking reservation.</b></div>
                            <div className="Card-prepaid-text-checklist">
                                <b>
                                <FontAwesomeIcon className="Blue-icon" icon={faCheck} /> &nbsp;Secure<br/>
                                <FontAwesomeIcon className="Blue-icon" icon={faCheck} /> &nbsp;Flexibility<br/>
                                <FontAwesomeIcon className="Blue-icon" icon={faCheck} /> &nbsp;Fast<br/>
                                </b>
                            </div>
                        </div>
                        <div className="Card-prepaid-footer">
                            <div className="Card-prepaid-footer-text Body-text3">
                                <a className="Link-to" href="#" onClick={handleOpenModal}>More info ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myModal" className={ showModal ? 'modal-prepaid-showed' : 'modal-prepaid-closed'} >
                <div className="modal-prepaid-content" >
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <div className="Modal-prepaid-desc-text">
                        <div className="Modal-prepaid-desc-title">
                            <h3>What you get for pre-paid parking reservation:</h3>
                            {ModalPrepaidData.map(descData => <ModalPrepaidDescSection {...descData} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
