// Potential & necessary dependencies: react-bootstrap, redux, axios, yup, react-hook-form, react-sparklines

export default function Home() {
  return (
    <main>
    </main>
  )
}

// Components: SearchBar,

// Planning: Going to have to brainstorm components and reducers, try to set up a good flow, write readable code, leave comments at every step so I know whats going on since I'll be spending time in and out of this project. Avoid paralysis, work on one thing at a time and get it done, connect the pieces and once functional, tidy up and do good clean code.


// Daily Tasks:
// 1. Search Bar, styling, and component
// 2. Get SearchBar to work with api, utilize axios if necessary, don't think I have to for this one, but probably utilize axios for data coming from api and going into reducers/slices, still have to wrap my head around that a bit.


// Parsity requirments and extensions:

// You must be able to enter a city, click search and see 3 charts show up.
// There will be a chart for "temperature" (in F), Pressure and Humidity.
// Each of the charts will be populated with data from the 5 day forecast as well as a reference line which will show the average (of that particular data point).


// So here are the extensions:

// After a user has searched a city (and that city's weather information is currently displaying), the user should see a "Set as Default" button. When the user clicks this button, there should be some indication that the current city is set as their default city. If the user refreshes the page, instead of a blank screen and search bar, their default city's info should come up.
// Use TypeScript! Use sparingly... or go all in!
// Add a button to the interface that will allow the user to automatically look up their current location using the Geolocation API.
// Place a map on the page with the current location shown using the Google Maps Embed API.
// Add in nearby cities to the map with the current temperature and weather shown on the map "pin" and let them click a "pin" to switch to that city's weather.