import React from 'react';
import AddService from '../AddService/AddService';
import BookingList from '../BookingList/BookingList/BookingList';
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import DeleteService from '../DeleteService/DeleteService';
import './Admin.css'


const Admin = () => {

    const AddMyService = () => {
        const AddService = document.getElementById('AddService')
        const DeleteService =document.getElementById("DeleteService")
        const CreateAdmin =document.getElementById("CreateAdmin")
        const BookingList =document.getElementById("BookingList")
        BookingList.style.display="none"
        AddService.style.display="block"
        DeleteService.style.display="none"
        CreateAdmin.style.display="none"
    }
    const DeleteMyService = () => {
        const AddService = document.getElementById('AddService')
        const DeleteService =document.getElementById("DeleteService")
        const CreateAdmin =document.getElementById("CreateAdmin")
        const BookingList =document.getElementById("BookingList")
        BookingList.style.display="none"
        AddService.style.display="none"
        DeleteService.style.display="block"
        CreateAdmin.style.display="none"
    }
    const CreateMyAdmin = () => {
        const AddService = document.getElementById('AddService')
        const DeleteService =document.getElementById("DeleteService")
        const CreateAdmin =document.getElementById("CreateAdmin")
        const BookingList =document.getElementById("BookingList")
        BookingList.style.display="none"
        AddService.style.display="none"
        DeleteService.style.display="none"
        CreateAdmin.style.display="block"
    }
    const BookingMyList = () => {
        const AddService = document.getElementById('AddService')
        const DeleteService =document.getElementById("DeleteService")
        const CreateAdmin =document.getElementById("CreateAdmin")
        const BookingList =document.getElementById("BookingList")
        BookingList.style.display="block"
        AddService.style.display="none"
        DeleteService.style.display="none"
        CreateAdmin.style.display="none"
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <button className="btn btn-primary btn-width" onClick={AddMyService}>Add Service</button>
                    <button className="btn btn-primary btn-width" onClick={BookingMyList}>Booking List</button>
                    <button className="btn btn-primary btn-width" onClick={DeleteMyService}>Delete Service</button>
                    <button className="btn btn-primary btn-width" onClick={CreateMyAdmin}>Create Admin</button>
                </div>
                <div className="col-md-8">
                    <div id="AddService">
                        <AddService></AddService>
                    </div>
                    <div id="DeleteService">
                        <DeleteService></DeleteService>
                    </div>
                    <div id="CreateAdmin">
                        <CreateAdmin></CreateAdmin>
                    </div>
                    <div id="BookingList">
                        <BookingList></BookingList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;