import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="mt-5 serviceBg">
            <div className="container">
                <h1 className="text-center mb-3" style={{color: 'white', fontSize:'50px'}}> <strong>OUR SERVICES</strong> </h1>
                <div className="">
                    {
                        service.map(service => <ServiceCard service={service} ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
