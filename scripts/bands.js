import { getBands } from "./database.js";
import { getVenue } from "./database.js";
import { getBookings } from "./database.js";

const bands = getBands()
const venues = getVenue()
const bookings = getBookings()


//When a band name is clicked, a window alert should be presented to the user that displays all of the venue at which the band is playing.
document.addEventListener(
    "click",
    (clickEvent) =>{
        const userClicked = clickEvent.target 
        let bandid = userClicked.dataset.id

        if (userClicked.dataset.target === "bands"){
                let curentVenue = []
                for (const booking of bookings) {
                    if(booking.bandID_FK === parseInt(bandid)){
                        for (const venue of venues) {
                            if(venue.id === booking.venueID_FK){
                                curentVenue.push(venue.name) 
                            }
                        }
                    }
                }
                window.alert(`${curentVenue.join(", ")}`)
            }
        }
    )
        
    



export const displayBands = () =>{
    let html = "<ul>"
    for (const band of bands) {
        html += `
            <li
            data-target = "bands"
            data-name = "${band.name}"
            data-id = "${band.id}"
            >
            ${band.name} has ${band.members} members and was formed in ${band.yearFormed}, they play ${band.musicGenre} music.</li>
        `
    }
    html += "</ul>"
    return html
    }
