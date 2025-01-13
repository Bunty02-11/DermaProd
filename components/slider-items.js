import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./slider-items.module.css";

const SliderItems = ({
  className = "",
  materialSymbolsLightmailOutline,
  perfumes,
  perfumes1,
  perfumesAlignSelf,
}) => {
  const perfumesStyle = useMemo(() => {
    return {
      alignSelf: perfumesAlignSelf,
    };
  }, [perfumesAlignSelf]);

  return (
    <div className={[styles.sliderItems, className].join(" ")}>
      <Image
        className={styles.materialSymbolsLightmailOuIcon}
        loading="lazy"
        width={80}
        height={80}
        alt=""
        src={materialSymbolsLightmailOutline}
      />
      <div className={styles.perfumesParent}>
        <h2 className={styles.perfumes}>{perfumes}</h2>
        <div className={styles.perfumes1} style={perfumesStyle}>
          {perfumes1}
        </div>
      </div>
    </div>
  );
};

SliderItems.propTypes = {
  className: PropTypes.string,
  materialSymbolsLightmailOutline: PropTypes.string.isRequired,
  perfumes: PropTypes.string,
  perfumes1: PropTypes.string,

  /** Style props */
  perfumesAlignSelf: PropTypes.string,
};

export default SliderItems;
