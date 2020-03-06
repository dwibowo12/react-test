import React from 'react';

export function BarMeter({carbonMeter, isWithTooltip, routeName}) {

    var className = 'Bar';
    if(carbonMeter <= 15){
        className = 'Bar b15';
    } else if(carbonMeter <= 30){
        className = 'Bar b30';
    } else if(carbonMeter <= 50) {
        className = 'Bar b50';
    } else if(carbonMeter <= 65) {
        className = 'Bar b65';
    } else if(carbonMeter <= 85) {
        className = 'Bar b85';
    } else {
        className = 'Bar b100';
    }

    var leafClass = '';
    if(carbonMeter <= 15){
        leafClass = 'b15';
    } else if(carbonMeter <= 30){
        leafClass = 'b30';
    } else if(carbonMeter <= 50) {
        leafClass = 'b50';
    } else if(carbonMeter <= 65) {
        leafClass = 'b65';
    } else if(carbonMeter <= 85) {
        leafClass = 'b85';
    } else {
        leafClass = 'b100';
    }

    const isTooltip = isWithTooltip ? 'tooltip ' : '';

    function Tooltip(){
        if({isWithTooltip}){
            return (
                <span className="tooltiptext">
                    {routeName} is the greenest option for travelling to and from the airport!
                </span>
            );
        } else {
            return null;
        }
    }

    return(
        <div className="Card-normal-bar">    
            <div className="Bar-container">
                <div className={className} style={{width: `${carbonMeter}%`}}></div>
                <span className={isTooltip + "icon-leaf bar-icon " + leafClass} >
                    <Tooltip />
                </span>    
            </div>
        </div>
    );
}