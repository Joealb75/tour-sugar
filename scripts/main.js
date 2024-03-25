import { displayVenues } from "./venue.js";
import { displayBands } from "./bands.js";
import { displayBookings } from "./bookings.js";



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour-Sugar</h1>

<article class="bookings">
    <h2>Bookings</h2>
    ${displayBookings()}

</article>

<article class="">
    <section class="venues">
        <h2>Venues</h2>
         ${displayVenues()}
    </section>
    <section class="bands">
        <h2>Bands</h2>
        ${displayBands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML