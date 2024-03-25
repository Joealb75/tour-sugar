/*
MAIN.JS

<------------------- BOOKINGS.JS ------------------->
Goals: 
    1. Above the venue list and band name list, you should display all of the bookings EX("Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023")
    2. When the booking is clicked a window.alert will display the all of the bands information. 
                let html = ""

                    html += `<ul><pre>
                        Name: ${band.name}
                        Number Of Members: ${band.members}
                        Music Genre: ${band.musicGenre}
                        Year Formed: ${band.yearFormed}
                            
                        </pre></ul>`
-------------------
Responsibility of Module:
    1. Create and export function that displays all of the bookings 
        export const displayBookings = () => {

        }
    2. Create a document.addEventListener() function that iterates through the bands[{band}] A-o-O and dynamically generates HTML 
    
        document.addEventListener(
            "click",
            (clickEvent) =>{
                userClicked = clickEvent.target 
            }
        )
        

<------------------- BANDS.JS ------------------->
Goals:
    1. At the bottom of the page, to the right of the venue list, the name of each band should be displayed in a bulleted list. <ul><li>${band.name}</li></ul>
    2. When the band is clicked a window.alert will display all of the venues that the band is playing at 
-------------------
Responsibility of Module:
    1. Create and export a function that dynamically generates HTML of each of the bands in a <ul><li>${band.name}</li></ul>
            
                export const displayBands = () => {
                    <ul><li>${band.name}</li></ul>
                }
            
    2. Create a document.addEventListener() function that displays a window.alert with the venue that the clicked band is playing at 
    
                document.addEventListener(
                    "click",
                    (clickEvent) =>{
                        userClicked = clickEvent.target 
                    }
                )

<------------------- VENUE.JS ------------------->
Goals:
    1. Display each venue at the bottom of the page in a <ul><li>${venue.name}</li></ul>
    2. When the venue is clicked a window.alert will display all the bands that are booked there 
-------------------
Responsibility of Module:
    1. Create and export a function that dynamically generates HTML of each of the venues and displays them in a <ul><li>${venue.name}</li></ul>
                    
                export const displayVenues = () => {
                        <ul><li>${venue.name}</li></ul>
                }

    2. Create a document.addEventListener() function that displays a window.alert with the bands that are playing at the venue 
        
                document.addEventListener(
                    "click",
                    (clickEvent) =>{
                        userClicked = clickEvent.target 
                    }
                )

DATABASE.JS --- Complete






*/