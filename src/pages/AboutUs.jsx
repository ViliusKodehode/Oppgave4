import styles from "/src/components/AboutUs.module.css"

function AboutUs() {

  return (
    <div className={styles.maincontentcontainer}>
      <h1>Fjell Kino AS</h1>
      <h2> Fjellavegen 5357, FJELL</h2>
      <h2>kontakt@fjellkino.no</h2>
      <h1>ABOUT US</h1>
      <p>Fjell Kino er din lokale kino, plassert midt i hjertet av Fjell.</p>
      <p>Vi tilbyr de nyeste filmene i moderne saler med topp lyd og bilde.</p>
      <p>Med et fokus på fellesskap og kvalitet, er vi stedet for både store filmopplevelser og hyggelige stunder.</p>
    </div>
  )
}

export default AboutUs