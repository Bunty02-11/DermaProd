import PropTypes from "prop-types";
import styles from "./comment1.module.css";

const Comment1 = ({ className = "" }) => {
  return (
    <section className={[styles.comment, className].join(" ")}>
      <h1 className={styles.postYourComment}>Post Your Comment!</h1>
      <form className={styles.commentForm}>
        <div className={styles.form}>
          <div className={styles.nameEmail}>
            <div className={styles.nameEmailFields}>
              <div className={styles.name}>Name</div>
            </div>
            <div className={styles.nameEmailFields}>
              <div className={styles.name}>Email</div>
            </div>
          </div>
          <div className={styles.commentInput}>
            <div className={styles.name}>Comment</div>
          </div>
        </div>
        <div className={styles.btns}>
          <div className={styles.btnDiscover}>
            <div className={styles.postComment}>Post Comment</div>
          </div>
        </div>
      </form>
    </section>
  );
};

Comment1.propTypes = {
  className: PropTypes.string,
};

export default Comment1;
