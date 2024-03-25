import { getBookings } from "./database.js";
import { getBands } from "./database.js";
import { getVenue } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenue()

let currentBand = ""
const findBand = (booking, allBands) =>{
    for (const band of allBands) {
        if (band.id === booking.bandID_FK){
            currentBand = band
        }
    }
    return currentBand
}

let currentVenue = ""
const findVenue = (booking, allVenues) => {
    for (const venue of allVenues) {
        if(venue.id === booking.venueID_FK){
            currentVenue = venue
        }
    }
    return currentVenue
}

document.addEventListener(
    "click",
    (clickEvent) =>{
        const userClicked = clickEvent.target 
        let venueid = userClicked.dataset.venueid

        if (userClicked.dataset.target === "booking"){
            for (const band of bands) {
                if (band.id === parseInt(venueid)){
                    window.alert(`
                        Name: ${userClicked.dataset.bandname}
                        Number Of Members: ${userClicked.dataset.bandmembers}
                        Music Genre: ${userClicked.dataset.genre}
                        Year Formed: ${userClicked.dataset.formed}
                    `)}
            }
        }
    }
)


export const displayBookings = () =>{
    let html = "<ul>"
    for (const booking of bookings) {
            const band = findBand(booking, bands)
            const venue = findVenue(booking, venues)
            
            html += `
            <li
            data-target = "booking"
            data-bandname = "${band.name}"
            data-bandmembers = "${band.members}"
            data-genre = "${band.musicGenre}"
            data-formed = "${band.yearFormed}"
            data-bandid = "${booking.bandID_FK}"
            data-venueid = "${booking.venueID_FK}"
            >${band.name} are playing at ${venue.name} on ${booking.dateBooked}</li>
        `  
    }
    html += "</ul>"
    return html
    } 
