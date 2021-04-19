import React from 'react';
import { Link } from 'react-router-dom';
import './AllService.css'

const AllService = (props) => {
    return (
        <div>
            <div className="col-md-4 text-center">
                <div>
                    <div className='img'>
                        <img className=".img-fluid" src={props.ServiceEvents.imageURL} alt="img" />
                    </div>
                    <div className="text-center">
                        <h4>{props.ServiceEvents.name}</h4>
                        <small className="p-width">{props.ServiceEvents.description}</small>
                        <h4>{props.ServiceEvents.price}</h4>
                        <Link to={`/events/${props.ServiceEvents._id}`} className="btn btn-primary">Explore</Link>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default AllService;