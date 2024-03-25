import { getVenue } from "./database.js";
import { getBookings } from "./database.js";
import { getBands } from "./database.js";

const venues = getVenue()
const bookings = getBookings()
const bands = getBands()

// When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.
document.addEventListener(
    "click",
    (clickEvent) =>{
        const userClicked = clickEvent.target 
        let venueid = userClicked.dataset.id

        if (userClicked.dataset.target === "venue"){
            let curentBand = []
            for (const booking of bookings) {
                if(booking.venueID_FK === parseInt(venueid)){
                    for (const band of bands) {
                        if(band.id === booking.bandID_FK){
                            curentBand.push(band.name) 
                        }
                    }
                }
            }
            window.alert(`${curentBand.join(", ")}`)
        }
    }
)


 export const displayVenues = () =>{
    let html = "<ul>"
    for (const venue of venues) {
        html += `
            <li
            data-target = "venue"
            data-name = "${venue.name}"
            data-id = "${venue.id}"
            >
            ${venue.name} is ${venue.SqFt} SqFt and has a Maximum occupancy of ${venue.maxOccupancy}.</li>
        
        `
    }
    html += "</ul>"
    return html
} 