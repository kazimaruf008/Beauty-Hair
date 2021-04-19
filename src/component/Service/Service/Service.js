import React from 'react';
import { useEffect, useState } from 'react'
import AllService from '../AllService/AllService';

const Service = () => {
    const [ServiceEvents, setServiceEvent] = useState([])
    useEffect(() => {
        fetch('https://obscure-caverns-87715.herokuapp.com/events')
            .then(response => response.json())
            .then(data => setServiceEvent(data))
    }, [])
    return (
        <div className="container">
            <h1 className = "text-center mb-5"> Our Service</h1>
            <div className="row text-center">
            {
                ServiceEvents.map(ServiceEvents => <AllService key={ServiceEvents._id} ServiceEvents={ServiceEvents}></AllService>)
            }
            </div>
        </div>
    );
};

export default Service;