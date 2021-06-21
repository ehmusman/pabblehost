import React from 'react'

const Marker = ({ mL, mS, value, cValue, bValue, onClick, time, price }) => {
    return (
        <>
            <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: `${mL}%` }}>
            </div>
            <span
                onClick={() => onClick(value, cValue, bValue, time, price)}
                style={{ left: `${mL - 2.5}%`, position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                =</span>
            <div
                onClick={() => onClick(value, cValue, bValue, time, price)}
                className="noUi-value noUi-value-horizontal noUi-value-large" data-value="1" style={{ left: `${mL}%` }}>
                {value}

            </div>
            <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: `${mS}%` }}>
            </div>
        </>
    )
}

export default Marker
