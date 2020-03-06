import React from 'react';
import '../RouteDesc.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { RouteDescLocation } from './RouteDescLocation';
import {Link} from 'react-router-dom';
import { BarMeter } from './BarMeter';


export function RouteDesc(props){
    const carbonMeter = props.location.state.carbonMeter;
    const rowLen = props.location.state.routeList.length;
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
                            return <span className="Header-subtitle-location">and <a className="Link-to">{rank.locationName}</a></span>;
                        } else {
                            return <span className="Header-subtitle-location"><a className="Link-to">{rank.locationName}</a>, </span>;
                        }
                    })}</b>
                </div>
                <div className="Routedesc-button-park-reserve">
                    <button className="Button-blue">
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
                        <div className="Routedesc-body-location-list">
                            {props.location.state.routeList.map(routeDesc => <RouteDescLocation {...routeDesc} />)}
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
        </div>
    );
}