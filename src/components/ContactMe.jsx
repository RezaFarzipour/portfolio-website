import React from 'react'
import styles from './contact.module.css'
const ContactMe = () => {
  return (
    <section className={styles.contact_section}>
    <h1 className={`${styles.contact_section_h1} section-title autodisplay`}>Lets talk😊</h1>
    <div className={`${styles.social_box} autoBlur`}>
      <a href="#"><i class="bx bxs-phone-call"></i>+989190978042</a>
      <a href="#"><i class="bx bxl-telegram"></i>Contactexample.com</a>
      <a href="#"
        ><i class="bx bxl-linkedin-square"></i>Contactexample.com</a
      >

      <div class="social-icons">
        <a href="#"><i class="bx bxl-youtube"></i></a>
        <a href="#"><i class="bx bxl-twitter"></i></a>
        <a href="#"><i class="bx bxl-facebook-circle"></i></a>
      </div>
    </div>

    <div class="contact-box autoBlur">
      <p>
        whter you're looking to build a new website,improve your existing
        platform,or bring a unique project to file.i'm here to help
      </p>
      <p>Full Name</p>
      <input type="text" placeholder="Full Name" />
      <p>Email Address</p>
      <input type="text" placeholder="email" />

      <p>your message</p>
      <input
        class="input-message"
        type="text"
        placeholder="share your thoughts..."
      />

      <button><i class="bx bx-send"></i>Send Message</button>
    </div>
  </section>
  )
}

export default ContactMe