import styles from "/src/components/ContactUs.module.css"

function ContactUs() {

  const handleOpen = () => {
    alert("Thank you, we get in touch as soon as possible")
  }

  return (
    <div className={styles.maincontentcontainer}>
      <h2 className={styles.contacth2}>Contact US</h2>
      <p className={styles.contactp}>If you have any questions, feel free to contact us by filling form below.</p>
      <div>
       <form className={styles.formcontainer}>
         <label>
           <input type="text" className={styles.label} placeholder="Your name" />
         </label>
         <label>
           <input type="email" className={styles.label} placeholder="Your email" />
         </label>
         <label>
           <input type="text" className={styles.labelquestion} placeholder="Your question" />
         </label>
         <label>
           <input type="submit" className={styles.sumbitlabel} onClick={handleOpen} placeholder="Send" />
         </label>
       </form>
      </div>
    </div>
  )
}

export default ContactUs