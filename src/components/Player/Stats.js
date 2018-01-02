import React from 'react';

const Stats = props => {
    return (
        <div className="statsContainer">
            <h3 style={props.divStyle}>{props.totalTime} hours</h3>
            <h3 style={props.divStyle}>{props.numberOfTrips} trips</h3>
            <p>Speed: {props.speed} KM/H</p>
            <p>Cargo: {props.cargo} KG</p>
        </div>
    );
};

export default Stats;