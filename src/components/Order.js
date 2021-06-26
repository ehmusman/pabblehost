import React, { useState, useEffect } from 'react'
import Marker from './Marker'
import "./order.css"
const Order = ({ planType }) => {
    const [circle, setCircle] = useState(-630)
    const [barLength, setBarLength] = useState(-63)
    const [selectedPlan, setSelectedPlan] = useState("5GB")
    const [price, setPrice] = useState("11.25")
    const [time, setTime] = useState("month")
    const [version, setVersion] = useState("1.17")
    const [server, setServer] = useState("spigot")

    const versions = ["1.17", "1.13-to-1.16", "1.9-to-1.13", "1.8.8-below", "I'm not sure"]
    const servers = ["spigot", "vanilla", "bedrock", "forge", "not-sure"]

    const markers = [
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "3.00" : "2.25",
            cValue: -1000, bValue: -100, value: "1GB", mL: 0, mS: 0
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "6.00" : "4.50",
            cValue: -900, bValue: -90, value: "2GB", mL: 9.09091, mS: 5
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "9.00" : "6.75",
            cValue: -821, bValue: -81, value: "3GB", mL: 18.1818, mS: 13.6364
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "4.00" : "9.00",
            cValue: -721, bValue: -72, value: "4GB", mL: 27.2727, mS: 22.7273
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "5.00" : "11.25",
            cValue: -630, bValue: -63, value: "5GB", mL: 36.3636, mS: 31.8182
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "6.00" : "13.50",
            cValue: -535, bValue: -54, value: "6GB", mL: 45.4545, mS: 40.9091
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "7.00" : "15.75",
            cValue: -450, bValue: -45, value: "7GB", mL: 54.5455, mS: 50
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "8.00" : "18.00",
            cValue: -360, bValue: -36, value: "8GB", mL: 63.6363, mS: 59.0909
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "10.00" : "22.50",
            cValue: -270, bValue: -27, value: "10GB", mL: 72.7273, mS: 68.1898
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "12.00" : "27.00",
            cValue: -180, bValue: -18, value: "12GB", mL: 81.8182, mS: 77.2727
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "16.00" : "36.00",
            cValue: -90, bValue: -9, value: "16GB", mL: 90.9091, mS: 86.3636
        },
        {
            time: planType === "Budget" && (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") ? "quarter" : "month",
            price: planType === "Budget" ? "25.00" : "56.25",
            cValue: -0, bValue: -0, value: "25GB", mL: 100, mS: 95.4545
        }
    ]

    const handleOnClick = (value, cValue, bValue, time, price) => {
        if (planType === "Budget" && (value === "1GB" || value === "2GB" || value === "3GB")) {
            setTime("quarter")
        }
        setSelectedPlan(value)
        setCircle(cValue)
        setBarLength(bValue)
        setTime(time)
        setPrice(price)
    }

    useEffect(() => {
        if (planType === "Budget") {
            if (selectedPlan === "1GB" || selectedPlan === "2GB" || selectedPlan === "3GB") {
                setTime("quarter")
            }
        }
    }, [planType, selectedPlan])
    useEffect(() => {
        if (planType === "Budget") {
            setPrice("5.00")
        }
    }, [planType])
    useEffect(() => {
        if (planType === "Premium") {
            setPrice("11.25")
            setCircle(-630)
            setBarLength(-63)
            setSelectedPlan("5GB")
        }
    }, [planType])
    const handleServer = (e) => {
        setServer(e.target.value)
        if (e.target.value === "spigot" || e.target.value.trim() === "vanilla") {
            console.log(e.target.value)
            setSelectedPlan("3G")
            setCircle(-821)
            setBarLength(-81)
            setPrice("5.00")
        }
        if (e.target.value === "bedrock") {
            setSelectedPlan("2GB")
            setCircle(-900)
            setBarLength(-90)
            setPrice("4.00")
        }

        if (e.target.value === "forge") {
            setSelectedPlan("6GB")
            setCircle(-535)
            setBarLength(-54)
            setPrice("6.00")
        }

    }
    const handleVersions = (e) => {
        setVersion(e.target.value)
        if (e.target.value === "1.17") {
            setSelectedPlan("5G")
            setCircle(-630)
            setBarLength(-63)
            setPrice("5.00")
        }
        if (e.target.value === "1.13-to-1.16") {
            setSelectedPlan("5G")
            setCircle(-821)
            setBarLength(-81)
            setPrice("9.00")
        }

        if (e.target.value === "1.9-to-1.13" || e.target.value === "1.8.8-below" || e.target.value === "I'm not sure") {
            setSelectedPlan("2GB")
            setCircle(-900)
            setBarLength(-90)
            setPrice("6.00")
        }
    }

    return (
        <section id="order" className="sec-normal sec-bg3" style={{ paddingTop: "55px" }}>
            <div className="container">
                <h4 className="section-heading mb-4 montserrat">ORDER A SERVER</h4>
                <div className="wpc-cloud-range">
                    <div className="row">
                        <div className="col-md-8 mb-2 mt-2">
                            <div className="wpc-vps-info" style={{ height: "100%" }}>
                                <div className="content-price price-container" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <div className="price-content">
                                            <span id="plan-name">{selectedPlan} Premium Minecraft</span>
                                            <div className="slider-ui" id="plan-slider" data-handle="1">
                                                <input className="slider-inp invisible" type="range"
                                                    id="inputUI1" />
                                                <div className="slider-line noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr" id="sliderUI1">
                                                    <div className="noUi-base">
                                                        <div
                                                            className="noUi-connects">
                                                            <div
                                                                className="noUi-connect" style={{ transform: `translate(${barLength}%, 0px) scale(1, 1)` }}>
                                                            </div>
                                                        </div>
                                                        <div className="noUi-origin" style={{
                                                            transform: `translate(${circle}%, 0px)`,
                                                            zIndex: "4"
                                                        }}>
                                                            <div className="noUi-handle noUi-handle-lower" data-handle="0" tabIndex="0" role="slider" aria-orientation="horizontal" aria-valuemin="1.0" aria-valuemax="12.0" aria-valuenow="3.0" aria-valuetext="5GB Premium Minecraft">
                                                                <div className="noUi-touch-area">
                                                                </div>
                                                                <div className="noUi-tooltip">{selectedPlan} Premium Minecraft
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="noUi-pips noUi-pips-horizontal">
                                                        {markers.map(marker => (
                                                            <Marker
                                                                key={marker.value}
                                                                mL={marker.mL}
                                                                mS={marker.mS}
                                                                value={marker.value}
                                                                cValue={marker.cValue}
                                                                bValue={marker.bValue}
                                                                onClick={handleOnClick}
                                                                time={marker.time}
                                                                price={marker.price}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-addon">
                                        <div>
                                            <div className="price">
                                                <del className="mr-4 text-danger"> $ {Number(price) + 8}
                                                    <span id="cycle-val">/{time}</span>
                                                </del>
                                                <span className="symbol coin">$</span>
                                                <span id="price-val">{price}</span>
                                                <span id="cycle-val">/{time}</span>
                                            </div>
                                        </div>
                                        <a id="orderlink" href="https://billing.pebblehost.com/order.php?pid=211" className="btn btn-green btn-lg">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2 mt-2" style={{ color: "#fff" }}>
                            <div className="plan-picker">
                                <h3 className="mb-0">Not sure which plan to pick?</h3>
                                <p>Let us know a few details about what you'll be running on the server and we can help you to pick out a plan.</p>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        Which version do you plan to run?
                                        <select
                                            value={version}
                                            onChange={handleVersions}
                                            className="form-control form-control-dark" style={{ height: "46px" }} id="choose-version">
                                            {versions.map(field => (
                                                <option
                                                    key={field}
                                                    value={field}>
                                                    {field}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-sm-12">
                                        <br />
                                        What type of server will you run?
                                        <select
                                            className="form-control form-control-dark"
                                            value={server}
                                            onChange={handleServer}
                                            style={{ height: "46px" }} id="choose-jar">
                                            {servers.map(field => (
                                                <option
                                                    key={field} value={field}>{field} / Paper</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <p className="mb-0">For a <span style={{ color: "#51ae59" }} id="chosen-jar">{server} / Paper</span> server running version <span id="chosen-version" style={{ color: "#51ae59" }}>{version}</span> we'd recommend a minimum of <span id="chosen-ram" style={{ color: "#51ae59" }}>{selectedPlan}</span> of RAM.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Order
