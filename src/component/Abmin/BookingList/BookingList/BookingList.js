import React, { useEffect, useState } from 'react';

const BookingList = () => {
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        fetch('https://obscure-caverns-87715.herokuapp.com/appointment')
            .then(response => response.json())
            .then(data => setAppointment(data))
    }, [])
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">service</th>
                <th className="text-secondary" scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointment.map((appointment, index) => 
                        
                    <tr key={appointment._id}>
                        <td>{appointment.yourName}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.service}</td>
                        <td>{appointment.myDate}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookingList;