import React, { useState, useEffect } from 'react'
import Plan from './Plan'
import "./pricing.css"
const Pricing = ({ selection }) => {

    const [select, setSelect] = useState("Premium")

    const data = [
        {
            id: 1, title: "Budget", former: "Great for users on a tight budget - starting at $1/GB, the Budget hosting plans are great for running a private/community server", button: select === "Budget" ? "Currently Viewing" : "View Plans", disabled: select === "Budget" ? true : false, services: [
                { class: "fas fa-microchip", item: "Intel Xeon E5-1630v3 @ 3.7Ghz" },
                { class: "fas fa-memory", item: "DDR4 2133MHz ECC Memory" },
                { class: "fas fa-hdd", item: "Unmetered Enterprise Grade SSDs" },
                { class: "fas fa-shield-alt", item: "160Gbps DDoS Protection" },
                { class: "fas fa-user", item: "Unlimited Slots" },
                { class: "fas fa-globe-europe", item: "North America & Europe" },
            ]
        },
        {
            id: 2, title: "Premium", former: "Perfect for large servers, modpacks, and public servers, who need the power of the i9-9900K CPU for best-in-class performance.", button: select === "Premium" ? "Currently Viewing" : "View Plans", disabled: select === "Premium" ? true : false,
            services: [
                { class: "fas fa-microchip", item: "Intel i9-9900K / Xeon E-2288G @ 5Ghz" },
                { class: "fas fa-memory", item: "DDR4 2666MHz Memory" },
                { class: "fas fa-hdd", item: "Unmetered Enterprise Grade NVMe SSDs" },
                { class: "fas fa-shield-alt", item: "480Gbps DDoS Protection" },
                { class: "fas fa-user", item: "Unlimited Slots" },
                { class: "fas fa-globe-europe", item: "North America, Europe & Australia" },
                { class: "fas fa-sync", item: "Free Automatic Backups" },
                { class: "fas fa-wrench", item: "One-click Modpack Installer" }
            ]
        },
        {
            id: 3, title: "Extreme", former: "Unrivalled performance dedicated just to your server, for a no-compromises hosting experience.", button: select === "Extreme" ? "Currently Viewing" : "View Plans", disabled: select === "Extreme" ? true : false, services: [
                { class: "fas fa-microchip", item: "Intel i9-9900K / Xeon E-2288G @ 5Ghz" },
                { class: "fas fa-memory", item: "DDR4 2666MHz Memory" },
                { class: "fas fa-hdd", item: "Unmetered Enterprise Grade NVMe SSDs" },
                { class: "fas fa-shield-alt", item: "480Gbps DDoS Protection" },
                { class: "fas fa-user", item: "Unlimited Slots" },
                { class: "fas fa-globe-europe", item: "North America & Europe" },
                { class: "fas fa-sync", item: "Free Automatic Backups" },
                { class: "fas fa-wrench", item: "One-click Modpack Installer" },
                { class: "fas fa-server", item: "Dedicated CPU Threads" },
            ]
        }
    ]
    const handleSelection = (text) => {
        setSelect(text)
    }
    useEffect(() => {
        selection(select)
    }, [select, selection])

    return (
        <section className="pricing special homepage-pricing pt-4 pb-4" id="tiers" style={{ backgroundColor: "#191516" }}>
            <div className="container pb-2">
                <div className="row wow fadeInUp fast animated">
                    <div className="col-md-12 mt-4">
                        <div className="text-center mb-2 ">
                            <h4 className="montserrat">THREE TIERS OF PERFORMANCE</h4>
                        </div>
                    </div>
                    {data && data.map(item => (
                        <Plan
                            key={item.id}
                            title={item.title}
                            former={item.former}
                            button={item.button}
                            disabled={item.disabled}
                            services={item.services}
                            onClick={handleSelection}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
