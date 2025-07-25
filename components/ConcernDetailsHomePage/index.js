import ConcernCard from "../ConcernCardHome";
import PropTypes from "prop-types";
import styles from "./services1.module.css";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Services1 = (props) => {
  const { className = "", content } = props;
  console.log(content, "content");
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div style={{ flex: "100%" }}>
            <Slider {...settings}>
              {/* <div className="row g-2 gy-4 g-md-5"> */}
              {content?.map((details) => (
                <div>
                  {/* <div className="col col-12 col-md-4"> */}
                  <ConcernCard
                    details={details}
                    placeholderImage="/placeholder-image1@2x.png"
                  />
                  {/* </div> */}
                </div>
              ))}
              {/* </div>
               */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

Services1.propTypes = {
  className: PropTypes.string,
};

export default Services1;
