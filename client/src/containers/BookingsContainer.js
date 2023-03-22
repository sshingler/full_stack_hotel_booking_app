import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import { getBookings } from "../services/BookingService";
import styled from "styled-components";

const BookingsContainer = () => {
    const [bookings, setBookings] = useState([]);
    const [showBookingForm, setShowBookingForm] = useState(false);

    useEffect(() => {
        getBookings()
            .then((allBookings) => {
                setBookings(allBookings);
            })
    }, []);

    const addBooking = (booking) => {
        const temp = [...bookings];
        temp.push(booking);
        setBookings(temp);
    }

    const toggleCheckIn = (id) => {
        const temp = [...bookings];
        const indexToUpdate = temp.findIndex((e) => e._id === id)
        temp[indexToUpdate].checked_in_status = !temp[indexToUpdate].checked_in_status
        setBookings(temp);
    }

    const removeBooking = (id) => {
        const temp = [...bookings];
        const indexToRemove = temp.findIndex((e) => e._id === id)
        temp.splice(indexToRemove, 1);
        setBookings(temp);
    }

    return (
        <>
            <StyledHeader>
                <div>
                    <h1>Hotel Booking System</h1>
                    <button onClick={() => setShowBookingForm(!showBookingForm)}>{showBookingForm ? "Hide Booking Form" : "Show Booking Form"}</button>
                </div>
                {showBookingForm && <BookingForm addBooking={addBooking} />}
            </StyledHeader>

            <BookingList bookings={bookings} removeBooking={removeBooking} toggleCheckIn={toggleCheckIn} />
        </>
    );
}

const StyledHeader = styled.header`
    position:sticky;
    top:0;
    left:0;
    div{margin:0;
        background-color:#495159;
        color:white;
        padding:1rem;
        border: 1px solid black;  
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
    h1{
        margin:0;
        margin-bottom: 1rem;
    }
`
export default BookingsContainer;