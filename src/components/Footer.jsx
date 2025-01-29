import styles from "/src/components/Footer.module.css"
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className={styles.footercontainer}>
      <Link to="/contact"><button>Contact Us</button></Link>
    </div>
  )
}

export default Footer
