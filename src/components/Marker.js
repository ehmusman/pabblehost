import React from 'react'

const Marker = ({ mL, mS, value, cValue, bValue, onClick, time, price }) => {
    return (
        <>
            <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: `${mL}%` }}>
            </div>
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
