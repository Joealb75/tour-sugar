const database = {
    bands: [
        { id: 1, name: "The Nashville Cats", members: 5, musicGenre: "Country", yearFormed: "2005" },
        { id: 2, name: "Southern Harmony", members: 4, musicGenre: "Country", yearFormed: "2010" },
        { id: 3, name: "Twangtown Troubadours", members: 3, musicGenre: "Country", yearFormed: "2015" },
        { id: 4, name: "Backwoods Balladeers", members: 6, musicGenre: "Country", yearFormed: "2008" },
        { id: 6, name: "Honky Tonk Heroes", members: 4, musicGenre: "Country", yearFormed: "2003" },
    ],

    // band.id = FK for bandSlot_1_ID & 2    
    venue: [
        { id: 1, name: "The Grand Hall", address: "123 Main Street", SqFt: 5000, maxOccupancy: 200 },
        { id: 2, name: "Rustic Barn", address: "456 Oak Avenue", SqFt: 3000, maxOccupancy: 150 },
        { id: 3, name: "City Lights Theater", address: "789 Broadway Blvd", SqFt: 7000, maxOccupancy: 300 },
        { id: 4, name: "Lakeside Pavilion", address: "101 Lakeview Drive", SqFt: 4000, maxOccupancy: 180 }
    ], 

    // venue.id = FK for venueNameFK
    bookings: [
        { id: 1, bandID_FK: 1, venueID_FK: 1, dateBooked: "3/21/24" },
        { id: 2, bandID_FK: 2, venueID_FK: 2, dateBooked: "3/22/24" },
        { id: 3, bandID_FK: 3, venueID_FK: 3, dateBooked: "3/23/24" },
        { id: 4, bandID_FK: 4, venueID_FK: 4, dateBooked: "3/24/24" },
        { id: 5, bandID_FK: 6, venueID_FK: 1, dateBooked: "3/25/24" },
        { id: 6, bandID_FK: 1, venueID_FK: 2, dateBooked: "3/26/24" },
        { id: 7, bandID_FK: 2, venueID_FK: 3, dateBooked: "3/27/24" },
        { id: 8, bandID_FK: 3, venueID_FK: 4, dateBooked: "3/28/24" },
        { id: 9, bandID_FK: 4, venueID_FK: 2, dateBooked: "3/29/24" },
        { id: 10, bandID_FK: 6, venueID_FK: 2, dateBooked: "3/30/24" },
        { id: 11, bandID_FK: 1, venueID_FK: 3, dateBooked: "3/31/24" },
        { id: 12, bandID_FK: 2, venueID_FK: 4, dateBooked: "4/1/24" },
    ],
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}))
}

export const getVenue = () => {
    return database.venue.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}



