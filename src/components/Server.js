import React, { useState } from 'react'

const Server = () => {
    const [threadBar, setThreadBar] = useState(-65)
    const [threadCircle, setThreadCircle] = useState(-660)
    const [threadCount, setThreadCount] = useState(3)

    const [ramBar, setRamBar] = useState(-60)
    const [ramCircle, setRamCircle] = useState(-600)
    const [ramCount, setRamCount] = useState("10GB")

    const [totalBill, setTotalBill] = useState(47.50)

    const handleRam = (bar, circle, count, price) => {
        setRamBar(bar)
        setRamCircle(circle)
        setRamCount(count)
        setTotalBill(price)
    }

    const handleThread = (bar, circle, count, price) => {
        setThreadBar(bar)
        setThreadCircle(circle)
        setThreadCount(count)
        setTotalBill(price)
    }
    return (
        <>
            <section id="custom" className="sec-normal sec-bg3" style={{ paddingTop: '55px' }}>
                <div className="container">
                    <h4 className="section-heading mb-4 montserrat">ORDER A SERVER</h4>
                    <div className="wpc-cloud-range extreme">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="p-4">
                                    <div className="slider-ui" id="threads-slider" data-handle={1} style={{ padding: '40px' }}>
                                        <input className="slider-inp invisible" type="text" id="inputUI0" />
                                        <div className="slider-line noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr" id="sliderUI0">
                                            <div className="noUi-base">
                                                <div className="noUi-connects">
                                                    <div className="noUi-connect" style={{ transform: `translate(${threadBar}%, 0px) scale(1, 1)` }} />
                                                </div>
                                                <div className="noUi-origin" style={{ transform: `translate(${threadCircle}%, 0px)`, zIndex: 4 }}>
                                                    <div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={0.0} aria-valuemax={3.0} aria-valuenow={3.0} aria-valuetext="5 Threads">
                                                        <div className="noUi-touch-area" />
                                                        <div className="noUi-tooltip">{threadCount} Threads
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noUi-pips noUi-pips-horizontal">
                                                <div
                                                    className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '0%' }} />
                                                <span
                                                    onClick={() => handleThread(-100, -1000, 2, 28.00)}
                                                    style={{ left: "-5%", position: 'absolute', top: "-70px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div
                                                    onClick={() => handleThread(-100, -1000, 2, 28.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={0} style={{ left: '0%' }}>
                                                    2
                                                </div>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '4.7619%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '9.52381%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '14.2857%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '19.0476%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '23.8095%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '28.5714%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '33.3333%' }} />

                                                <div
                                                    onClick={() => handleThread(-65, -660, 3, 37.50)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={1} style={{ left: '33.3333%' }}>
                                                    3
                                                </div>
                                                <span
                                                    onClick={() => handleThread(-65, -660, 3, 37.50)}
                                                    style={{ left: "25%", position: 'absolute', top: "-70px", opacity: "0", fontSize: "5rem", padding: "0px" }}>
                                                    =</span>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '38.0952%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '42.8571%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '47.6191%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '52.3809%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '57.1429%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '61.9048%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '66.6667%' }} />
                                                <div
                                                    onClick={() => handleThread(-33, -330, 4, 48.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={2} style={{ left: '66.6667%' }}>
                                                    4
                                                </div>
                                                <span
                                                    onClick={() => handleThread(-33, -330, 4, 48.00)}
                                                    style={{ left: "58%", position: 'absolute', top: "-70px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '71.4286%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '76.1905%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '80.9524%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '85.7143%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '90.4762%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '95.2381%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '100%' }} />
                                                <div
                                                    onClick={() => handleThread(0, 0, 5, 63.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={3} style={{ left: '100%' }}>
                                                    5
                                                </div>
                                                <span
                                                    onClick={() => handleThread(0, 0, 5, 63.00)}
                                                    style={{ left: "95%", position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-ui" id="ram-slider" data-handle={1} style={{ padding: '40px' }}>
                                        <input className="slider-inp invisible" type="text" id="inputUI1" />
                                        <div className="slider-line noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr" id="sliderUI1">
                                            <div className="noUi-base">
                                                <div className="noUi-connects">
                                                    <div className="noUi-connect" style={{ transform: `translate(${ramBar}%, 0px) scale(1, 1)` }} />
                                                </div>
                                                <div className="noUi-origin" style={{ transform: `translate(${ramCircle}%, 0px)`, zIndex: 4 }}>
                                                    <div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={0.0} aria-valuemax={5.0} aria-valuenow={5.0} aria-valuetext="25GB">
                                                        <div className="noUi-touch-area" />
                                                        <div className="noUi-tooltip">
                                                            {ramCount}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noUi-pips noUi-pips-horizontal">
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '0%' }} />
                                                <span
                                                    onClick={() => handleRam(-100, -1000, "6GB", 40.00)}
                                                    style={{ left: "-5%", position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div
                                                    onClick={() => handleRam(-100, -1000, "6GB", 40.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={0} style={{ left: '0%' }}>
                                                    6GB
                                                </div>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '5%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '10%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '15%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '20%' }} />
                                                <span
                                                    onClick={() => handleRam(-80, -800, "8GB", 38.00)}
                                                    style={{ left: "15%", position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div
                                                    onClick={() => handleRam(-80, -800, "8GB", 38.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={1} style={{ left: '20%' }}>
                                                    8GB
                                                </div>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '25%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '30%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '35%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '40%' }} />
                                                <span
                                                    onClick={() => handleRam(-60, -600, "10GB", 45.00)}
                                                    style={{ left: "35%", position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div
                                                    onClick={() => handleRam(-60, -600, "10GB", 45.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={2} style={{ left: '40%' }}>
                                                    10GB
                                                </div>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '45%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '50%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '55%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '60%' }} />
                                                <span
                                                    onClick={() => handleRam(-40, -400, "12GB", 52.00)}
                                                    style={{ left: "55%", position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div
                                                    onClick={() => handleRam(-40, -400, "12GB", 52.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={3} style={{ left: '60%' }}>
                                                    12GB
                                                </div>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '65%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '70%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '75%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '80%' }} />
                                                <span
                                                    onClick={() => handleRam(-20, -200, "16GB", 65.00)}
                                                    style={{ left: "75%", position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div
                                                    onClick={() => handleRam(-20, -200, "16GB", 65.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={4} style={{ left: '80%' }}>
                                                    16GB
                                                </div>
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '85%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '90%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: '95%' }} />
                                                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: '100%' }} />
                                                <span
                                                    onClick={() => handleRam(0, 0, "25GB", 89.00)}
                                                    style={{ left: "95%", position: 'absolute', top: "-75px", opacity: "0", fontSize: "5rem" }}>
                                                    =</span>
                                                <div
                                                    onClick={() => handleRam(0, 0, "25GB", 89.00)}
                                                    className="noUi-value noUi-value-horizontal noUi-value-large" data-value={5} style={{ left: '100%' }}>
                                                    25GB
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="wpc-vps-info" style={{ height: '100%' }}>
                                    <div className="content-price price-container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <div className="price-content">
                                                <span id="plan-name">Extreme {ramCount}, {threadCount} Threads</span>
                                                <br />
                                                <ul className="list-style-icon text-light">
                                                    <li>
                                                        <i
                                                            style={{ color: "#51ae59" }}
                                                            className="fas fa-check-square text-green" />
                                                        Dedicated CPU threads
                                                    </li>
                                                    <li>
                                                        <i
                                                            style={{ color: "#51ae59" }}
                                                            className="fas fa-check-square text-green" />
                                                        Priority Discord support
                                                    </li>
                                                    <li>
                                                        <i
                                                            style={{ color: "#51ae59" }}
                                                            className="fas fa-check-square text-green" />
                                                        Control over your environment
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-addon" style={{ marginTop: "-10px" }}>
                                            <div className="price  d-flex flex-column">
                                                <div className="col-4 h3 row">
                                                    <del className="mr-4 text-danger"> ${Number(totalBill) + 8}
                                                        <span id="cycle-val">/month</span>
                                                    </del>
                                                </div>
                                                <div className="col-4 h3 row">
                                                    <span id="price-val">
                                                        ${totalBill}
                                                        <span id="cycle-val">/month</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <a id="orderlink" href="https://billing.pebblehost.com/cart.php?a=add&pid=269&configoption%5B98%5D=567&configoption%5B99%5D=580" className="btn btn-green">Configure Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Server
