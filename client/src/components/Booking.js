import React from "react";
import { deleteBooking, updateBooking } from "../services/BookingService";
import styled from "styled-components";

const Booking = ({ booking, removeBooking, toggleCheckIn }) => {
    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(() => {
                removeBooking(booking._id);
            })
    }
    const handleCheckIn = () => {
        updateBooking({ "checked_in_status": !booking.checked_in_status }, booking._id)
            .then(() => {
                toggleCheckIn(booking._id);
            })
    }
    return (<BookingCard>
        <BookingDetails>
            <p>{booking.name}</p>
            <p>{booking.email_address}</p>
        </BookingDetails>

        <BookingButtons>
            <button onClick={handleDelete}>Delete 🗑 </button>
            <button onClick={handleCheckIn}>{booking.checked_in_status ? "Checked In ✅" : "Checked Out ❌"}</button>
        </BookingButtons>
    </BookingCard>);
}

const BookingCard = styled.div`
    background-color: #DED6D6;
    padding: 1rem;
    width: 100%;
    display:grid;
    grid-template-columns: 5fr 1fr;
    border:  1px solid black;  
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const BookingDetails = styled.div`
    display: grid; 
`

const BookingButtons = styled.div`
    display: grid;
`

export default Booking;

