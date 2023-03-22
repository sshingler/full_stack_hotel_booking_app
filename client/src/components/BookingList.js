import React from "react";
import Booking from "./Booking";
import styled from 'styled-components';

const BookingList = ({ bookings, removeBooking, toggleCheckIn }) => {

    const bookingNodes = bookings.map((booking) => {
        return <Booking key={booking._id} booking={booking} removeBooking={removeBooking} toggleCheckIn={toggleCheckIn} />
    })

    return (<StyledList>{bookingNodes}</StyledList>);
}

const StyledList = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    width:80%;
    max-width:800px;
    margin:auto;
    box-sizing: border-box;
`;

export default BookingList;