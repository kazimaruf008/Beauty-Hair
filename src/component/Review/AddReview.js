import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import "./Review.css"


const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://obscure-caverns-87715.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                // alert('Appointment created successfully.');
            }
        })
    }
    const [Review, setReview] = useState([])
    useEffect(() => {
        fetch('https://obscure-caverns-87715.herokuapp.com/Review')
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="container mt-5">
            
            <div className="row mt-top">
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
            <h1 className="mt-5">Add Your Review</h1>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group row">
                    <div className="col-4">
                        <input {...register("company", { required: true })} className="form-control" name="company" placeholder="company's name.Designation" type="text" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4">
                        <input {...register("description", { required: true })} className="form-control" name="description" placeholder="Description" type="text" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                </div>

                <div className="form-group text-right">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;