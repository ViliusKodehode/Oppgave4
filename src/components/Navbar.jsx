import styles from "/src/components/Navbar.module.css"
import { Link } from "react-router-dom";
import Switcher from "/src/components/Switcher.jsx"

function Navbar() {

  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.switchercontainer}>
        <Switcher/>
      </div>
      <div className={styles.linkscontainer}>
        <Link to="/movies"><button>Movies</button></Link>
        <Link to ="/Upcoming"><button>Upcoming Movies</button></Link>
        <Link to ="/About"><button>About Us</button></Link>
        <Link to ="/Tickets"><button>Ticket booking</button></Link>
      </div>
    </div>
  )
}

export default Navbar