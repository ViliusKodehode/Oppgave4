import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from '/src/components/Navbar.jsx'
import Footer from '/src/components/Footer.jsx'
import Maincontent from '/src/components/MainContent.jsx'
import Movies from '/src/pages/Movies.jsx'
import UpcomingMovies from "/src/pages/UpcomingMovies.jsx"
import AboutUs from "/src/pages/AboutUs.jsx"
import TicketBooking from "/src/pages/TicketBooking.jsx"
import ContactUs from '/src/pages/ContactUs.jsx';

function App() {

  return (
    <Router>
    <div className="Maincontainer">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Maincontent/>}/>
        <Route path = "/Movies" element={<Movies/>}/>
        <Route path = "/Upcoming" element={<UpcomingMovies/>}/>
        <Route path = "/About" element={<AboutUs/>}/>
        <Route path = "/Tickets" element={<TicketBooking/>}/>
        <Route path = "/Contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
