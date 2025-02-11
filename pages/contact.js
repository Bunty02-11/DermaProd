import FrameComponent7 from "../components/frame-component7";
import Contact1 from "../components/contact1";
import Footer from "../components/footer";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <FrameComponent7 />
      <section className={styles.contactParent}>
        <section className={styles.contactForm}>
          <Contact1 placeholderImage="/contact.jpg" />
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14433.281384816779!2d55.320927!3d25.259807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dfc9507fd9f%3A0xa675f90b00cbeeff!2sDermaTech%20Polyclinic!5e0!3m2!1sen!2sus!4v1736756901275!5m2!1sen!2sus"
          style={{ width: "100%", height: "600px", border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default Contact;
