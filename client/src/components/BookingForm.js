import { useState } from "react";
import { postBooking } from "../services/BookingService";
import styled from "styled-components";

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({ name: "", email_address: "", checked_in_status: false })

    const handleChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.id] = e.target.value;
        setFormData(newFormData);
    }

    const submitForm = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
        e.target.reset()
    }

    return (
        <StyledBookingForm id="bookingsForm" onSubmit={submitForm}>
            <label htmlFor="name">Name: <input onChange={handleChange} type="text" id="name" value={formData.name} required /></label>

            <label htmlFor="email">Email: <input onChange={handleChange} type="email" id="email_address" value={formData.email} required /> </label>
            <input type="submit" value="Add Booking" />
        </StyledBookingForm>
    )
};

const StyledBookingForm = styled.form`
    padding: 1.5rem;
    display: flex;
    justify-content:center;
    gap: 1rem;
    background-color: #DED6D6;
    border:  1px solid black;  
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
`

export default BookingForm; 