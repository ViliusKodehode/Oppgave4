import styles from "/src/components/Navbar.module.css"
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className={styles.navbarcontainer}>
        <Link to="/movies"><button>Movies</button></Link>
        <Link to ="/Upcoming"><button>Upcoming Movies</button></Link>
        <Link to ="/About"><button>About Us</button></Link>
        <Link to ="/Tickets"><button>Ticket booking</button></Link>
    </div>
  )
}

export default Navbar