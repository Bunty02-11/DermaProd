import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./accordion-item.module.css";

const AccordionItem = ({ className = "" }) => {
  return (
    <div className={[styles.accordionItem, className].join(" ")}>
      <div className={styles.question}>
        <div className={styles.question1}>Lorem ipsum dolor sit amet ?</div>
        <Image
          className={styles.icon}
          loading="lazy"
          width={32}
          height={32}
          alt=""
          src="/icon-1@2x.png"
        />
      </div>

      <div className={styles.answer}>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  className: PropTypes.string,
};

export default AccordionItem;
