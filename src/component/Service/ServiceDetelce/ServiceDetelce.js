import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetelce.css'
import fast4 from '../../images/fast4.PNG'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import BookNow from '../BookNow/BookNow';

const ServiceDetelce = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }



    
    const [selectDate, setSelectDate] = useState(new Date());
    const handelDate = date =>{
        setSelectDate(date)
    }

    let { _id } = useParams();
    const [ServiceDetelce, setServiceDetelce] = useState([])
    useEffect(() => {
        fetch(`https://obscure-caverns-87715.herokuapp.com/events/${_id}`)
            .then(response => response.json())
            .then(data => setServiceDetelce(data[0]))
    }, [])
    const { name, imageURL, price, description } = ServiceDetelce
    const myDate = selectDate.toDateString()
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1>{name}</h1>
                <p>
                    This improvement upon the original usage was introduced by no less a man than Stubb, in order to afford. <br />
                    the imperilled harpooneer the strongest possible guarantee for the faithfulness and vigilance of his <br />
                    monkey-rope holder.
                </p>
            </div>
            <h1 className="service-title">Overview</h1>
            <div className="row d-flex align-items-center"> 
                <div className="col-md-8">  
                    <div className="mt-5">
                        <p>
                            <span className="big-a">A</span>
                        there is no staying in any one place; for at one and the same time everything has to be done
                        everywhere.It is much the same with him who endeavors the description of the scene. <br /><br />
                        We must now retrace our way a little. It was mentioned that upon first breaking ground
                        in the whale’s back, the blubber-hook was inserted into the original hole there cut 
                        by the spades of the mates. <br/> <br/>

                        But how did so clumsy and weighty a mass as that same hook get fixed in that hole?
                        It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer,<br/> <br/>

                        to descend upon the monster’s back for the special purpose referred to. This is Photoshop’s 
                        version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, 
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                        sed odio sit amet nibh vulputate cursus a sit amet mauris. <br/> <br/>

                        Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed non mauris vitae erat consequat auctor eu in elit.
                        </p>
                    </div>

                </div>
                <div className="col-md-4 text-center">
                    <div className="fast-img ml-5">
                        <img className="fast4" src={fast4} alt=""/>
                    </div>
                    <div className="">
                    <h3>Ashley Fletcher</h3>
                    <p>
                        MAKEUP <br/>
                        800-700-6200<br/>
                        support@vamtam.com<br/>
                        This is Photoshop’s version of Lorem Ipsum<br/>
                    </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 d-flex align-items-center" >
                <div className="col-md-6 text-center">
                    <h1>{name}</h1><br/>
                    <h4 className="text-info">Your Date: {myDate}</h4><br/>
                    <h6>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi quibusdam officia accusantium assumenda suscipit incidunt.</h6><br/>
                    <h4>Price: ${price}</h4><br/>
                    <button className = "btn btn-primary"  onClick={openModal}>Book Now</button>
                    <BookNow closeModal={closeModal} modalIsOpen={modalIsOpen} myDate={myDate} name={name}></BookNow>
                </div>
                <div className="col-md-6 text-right">
                    <Calendar
                        onChange={handelDate}
                        value={new Date()}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetelce;