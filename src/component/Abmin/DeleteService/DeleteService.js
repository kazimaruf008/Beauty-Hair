// import React from 'react';
import React, { useEffect, useState } from 'react';

const DeleteService = () => {
    const [ProductEvents, setEvent] = useState([])
    useEffect(() => {
        fetch('https://obscure-caverns-87715.herokuapp.com/events')
            .then(response => response.json())
            .then(data => setEvent(data))
    }, [])
    const HandelDelete = id => {
        console.log(id)
        fetch(`https://obscure-caverns-87715.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                console.log('delete sussesfully')
            })
    }
    return (
        <div>
            <div id="manage-product">
                <li><h4 className="list-item-name">name</h4> <h4 className="list-item-price">price</h4> <h4 className="list-item-price">Total {ProductEvents.length}</h4></li>
                {

                    ProductEvents.map(event => <li key={event.name}><h4 className="list-item-name">{event.name}</h4> <h4 className="list-item-price">{event.price}</h4> <button onClick={() => HandelDelete(event._id)}>Delete</button></li>)

                }
            </div>
        </div>
    );
};

export default DeleteService;