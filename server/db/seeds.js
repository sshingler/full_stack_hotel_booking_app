use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "John Jones",
        email_address: "john123@outlook.com",
        checked_in_status: true
    },
    {
        name: "Ralph Little",
        email_address: "ralph@outlook.com",
        checked_in_status: true
    },
    {
        name: "Jim Jimson",
        email_address: "jim@email.com",
        checked_in_status: false
    },

]);

