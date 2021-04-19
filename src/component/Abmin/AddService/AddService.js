import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './add.css'


const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImgUrl] = useState(null);



    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL,
            description: data.description
        };
        console.log(eventData)
        const url = `https://obscure-caverns-87715.herokuapp.com/addEvent`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImgUpdate = event => {
        console.log(event.target.files[0])
        const imgData = new FormData();
        imgData.set('key', '38163154d03ef2d92987b208e5835e38')
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Service Name</p>
                <input name="name" defaultValue="Service" {...register("name")} /><br /><br />

                <p>Service Description</p>
                <input name="description" defaultValue="Service Description" {...register("description")} /><br /><br />

                <p>Product Price</p>
                <input name="price" defaultValue="10" {...register("price")} /><br /><br />
                <p>Product Image</p>

                <input name="exampleRequired" type="file" onChange={handleImgUpdate} /><br /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;

