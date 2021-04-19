import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Review.css"

const Review = () => {
    const [Review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/Review')
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1>Review</h1>
            </div>
            <div className="row mt-5 mb-3">
                {
                    Review.map((Review, index)=>
                    <div key={Review._id} className="col-md-4 text-center my-card">
                        <h1>{Review.name}</h1><br/>
                        <h6>{Review.email}</h6><br/>
                        <p>{Review.description}</p>
                    </div>
                    )
                }
            </div>
           <div className="mt-5 text-center">
                <Link className="btn btn-success" to='/review'>More Review</Link>
           </div>
        </div>
    );
};

export default Review;