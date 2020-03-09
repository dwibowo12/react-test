import React from 'react';
import {Link} from 'react-router-dom';
import { BarMeter } from './BarMeter';

export function CardNormal({ title, subtitle, logo, price, duration, barmeter, footerText }) {

    const [outlined, setOutlined] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);



    function handleOpenModal(){
        setShowModal(true);
        setOutlined(true);
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyPressed);
    }

    function onKeyPressed(e){
        if(e.keyCode === 27){
            setShowModal(false);
            setOutlined(false);
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', onKeyPressed);
        }
        
    }

    function handleCloseModal(){
        setShowModal(false);
        setOutlined(false);
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', onKeyPressed);
    }

  return (
    <div>
        <div className={outlined ? 'Card-normal outlined' : 'Card-normal'}>
            <div className="Card-normal-image" onClick={handleOpenModal}>
                <img className="Card-image-source" src={process.env.PUBLIC_URL + logo } />
            </div>
            <div className="Card-normal-desc" onClick={handleOpenModal}>
                <div className="Card-normal-title">{title}</div>
                <div className="Card-normal-subtitle">{subtitle}</div>
                <div className="Card-normal-text">
                    <div className="Card-normal-text-content"><span className="icon-dollar card-normal-desc-icon"/>{price}</div>
                    <div className="Card-normal-text-content"><span className="icon-clock card-normal-desc-icon"/>{duration}</div>
                </div>
                <BarMeter carbonMeter={barmeter} isWithTooltip={true} routeName={title} onClick={handleOpenModal} />
            </div>
            <Link className="Footer-link" to={{ 
                pathname: '/route', 
                state: { 
                    routeName: title,
                    pictureFile: logo,
                    routeList: [
                        {
                            key: "loc1",
                            locationName: "Back Bay",
                            locationDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis, urna vitae accumsan ultrices, arcu metus fermentum purus, semper ullamcorper eros mauris et sapien.",
                            isHaveDrivingDirection: false,
                            phoneNumber: "123-456-7890"
                        },
                        {
                            key: "loc2",
                            locationName: "Braintree",
                            locationDesc: "Nam quis ante a lectus ullamcorper vestibulum id ut eros. Suspendisse potenti.",
                            isHaveDrivingDirection: true,
                            phoneNumber: "123-456-7890"
                        },
                        {
                            key: "loc3",
                            locationName: "Mayroad",
                            locationDesc: "Nam quis ante a lectus ullamcorper vestibulum id ut eros. Suspendisse potenti.",
                            isHaveDrivingDirection: true,
                            phoneNumber: "098-765-4321"
                        },
                    ],
                    carbonMeter: barmeter
                } 
            }}>
            <div className="Card-normal-footer">
                <div className="Body-text3">
                    {footerText} <span className="icon-chevron-right-open chevron-card-footer" />
                </div>
            </div>
            </Link>
        </div>
        <div id="myModal" className={showModal ? 'modal-showed' : 'modal-closed'} >
            <div className="modal-content" >
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <div className="Modal-image-container">
                    <img className="Card-image-source" src={process.env.PUBLIC_URL + logo } />
                </div>
                <div className="Modal-desc-text">
                    <h3>{title}</h3>&nbsp;&nbsp;
                    <div className="modal-text-content Body-text3">
                        <div className="modal-text-content-price">
                            <span className="icon-dollar card-normal-desc-icon"/>{price} &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="modal-text-content-duration">
                            <span className="icon-clock card-normal-desc-icon"/>{duration}
                        </div>
                    </div>
                    <div className="modal-showed Body-text2">{subtitle}</div>
                </div>
            </div>
        </div>
    </div>
  );
}