import React  from 'react';

export function RouteDescLocation({locationName, locationDesc, isHaveDrivingDirection, phoneNumber}){

    function DrivingDirection(){
        if(isHaveDrivingDirection) {
            return (
                <div>
                    <div className="Location-item-title">
                        <h3>Get driving directions</h3>
                    </div>
                    <div className="Location-item-phone Body-text1">
                        Phone: {phoneNumber}
                    </div>
                </div>
            );
        } else {
            return null;
        }

    }

    return (
        <div className="Routedesc-location-item">
            <div className="Location-item-title">
                <h3>{locationName}</h3>
            </div>
            <div className="Location-item-subtitle Body-text1">
                {locationDesc}
            </div>
            <DrivingDirection />
        </div>
    );
}