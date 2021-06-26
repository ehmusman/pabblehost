import React, { useState, useEffect } from 'react'

const Plan = ({ title, former, button, disabled, services, onClick, price }) => {
    const [show, setShow] = useState(true)
    useEffect(() => {
        if (window.innerWidth <= 575) {
            setShow(false)
        }
        if (window.innerWidth > 575) {
            setShow(true)
        }
        // eslint-disable-next-line
    }, [window.innerWidth])
    return (
        <>
            <div className=" col-md-4 col-sm-12 col-lg-4">
                <div className="wrapper first text-left">
                    <div className="top-content">
                        <div className="title">{title}</div>
                        <div className="fromer">{former}</div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    onClick={() => onClick(title)}
                                    className={`btn mt-4 ${disabled ? "btn-gray" : "btn-green"}`}>{button}</button>

                            </div>
                            <div className="col-12 mt-1">
                                <span className="h4 text-light mt-2 d-block">
                                    Price: &euro; {price} EUR</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="d-block d-sm-none list-info mobile-specopts"
                        style={{ padding: "20px 20px 20px 20px", cursor: "pointer" }}>
                        <i onClick={() => setShow(!show)} className="fas fa-chevron-down">
                            <span className="pl-3">View Specs</span>
                        </i>
                    </div>
                    {show && <ul className="d-sm-block list-info specsinfo">
                        {services && services.map(service => (
                            <li key={service.class}>
                                <i className={service.class}></i> <span>{service.item}</span>
                            </li>
                        ))}
                    </ul>}
                </div>
            </div>
        </>
    )
}

export default Plan
