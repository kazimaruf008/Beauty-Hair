import React from 'react';
import BookingList from '../../Abmin/BookingList/BookingList/BookingList';
import './Profile.css'

const Profile = ({ loginUser }) => {
    const myProfile = () => {
        const MyProfile =document.getElementById("MyProfile")
        const OrderList =document.getElementById("orderList")
        MyProfile.style.display="block"
        OrderList.style.display="none"
    }
    const OrderList = () => {
        const MyProfile =document.getElementById("MyProfile")
        const OrderList =document.getElementById("orderList")
        MyProfile.style.display="none"
        OrderList.style.display="block"
    }
    return (
        <div className=" container mt-top">

            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-primary btn-width" onClick={myProfile}>My Profile</button>
                    <button className="btn btn-primary btn-width" onClick={OrderList}>Order List</button>
                </div>
                <div className="col-md-8">
                    <div id="MyProfile">
                        <h1>Name: {loginUser.name, loginUser.displayName}</h1>
                        <h6>E-Mail: {loginUser.email}</h6>
                        <div className='profile-img'>
                            <img className="img-responsive" src={loginUser.photo, loginUser.photoURL} alt="your-photo" />
                        </div>
                    </div>
                    <div id="orderList">
                        <BookingList></BookingList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

