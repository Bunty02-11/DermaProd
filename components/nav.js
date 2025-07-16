import { useState, useEffect, useMemo, useContext } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styles from "./nav.module.css";
import { LanguageContext } from "../pages/_app";
import Loader from "./loader";

const Nav = ({ className = "", navWidth, logo1 }) => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [specialProducts, setSpecialProducts] = useState([]);
  const [concerns, setConcerns] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const [dropdown, setDropdown] = useState({
    concerns: false,
    services: false,
    blog: false,
    special: false,
  });
  const [openServiceCategory, setOpenServiceCategory] = useState(null);
  const [openSpecialCategory, setOpenSpecialCategory] = useState(null);
  const [openConcernCategory, setOpenConcernCategory] = useState(null);

  const router = useRouter();

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Update language in context or state
    translatePageContent(lang); // Translate content
    setLanguageDropdown(false); // Close dropdown after selection
  };

  const translatePageContent = async (targetLanguage) => {
    if (targetLanguage === "en") {
      restoreOriginalContent();
      return;
    }

    const elements = document.querySelectorAll(
      "*:not(script):not(style):not(meta)"
    );
    const textsToTranslate = [];
    const elementMap = [];

    elements.forEach((el) => {
      if (
        el.childNodes.length === 1 &&
        el.childNodes[0].nodeType === Node.TEXT_NODE
      ) {
        const text = el.textContent.trim();
        if (text) {
          textsToTranslate.push(text);
          elementMap.push(el);
        }
      }
    });

    if (textsToTranslate.length === 0) return;

    try {
      const chunkSize = 128;
      const textChunks = [];
      for (let i = 0; i < textsToTranslate.length; i += chunkSize) {
        textChunks.push(textsToTranslate.slice(i, i + chunkSize));
      }

      const translations = [];

      for (const chunk of textChunks) {
        const response = await fetch(
          `https://translation.googleapis.com/language/translate/v2?key=AIzaSyBFPYrl8v_HRI1jm2nMHNtankZPdFGILPQ`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              q: chunk,
              target: targetLanguage,
            }),
          }
        );

        const data = await response.json();
        if (data?.data?.translations) {
          translations.push(...data.data.translations);
        }
      }

      translations.forEach((translation, index) => {
        elementMap[index].textContent = translation.translatedText;
      });
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  useEffect(() => {
    // Make sure the translation happens after the page reload (or path change)
    if (language !== "en") {
      translatePageContent(language);
    }
  }, [language]);

  const restoreOriginalContent = () => {
    window.location.reload(); // Reload the page to restore original content
  };

  const navStyle = useMemo(() => {
    return {
      width: navWidth,
    };
  }, [navWidth]);

  const handleNavigation = (path) => {
    router.push(path);
  };

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeDropdowns = () => {
    setDropdown({ concerns: false, services: false, blog: false });
  };

  // Fetch categories, services, special products, and concerns from new APIs
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/categories/");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    const fetchServices = async () => {
      try {
        const response = await fetch("https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/services/");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    const fetchSpecialProducts = async () => {
      try {
        const response = await fetch("https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/specialproducts/");
        const data = await response.json();
        setSpecialProducts(data);
      } catch (error) {
        console.error("Failed to fetch special products:", error);
      }
    };
    const fetchConcerns = async () => {
      try {
        const response = await fetch("https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/concerns");
        const data = await response.json();
        setConcerns(data);
      } catch (error) {
        console.error("Failed to fetch concerns:", error);
      }
    };
    fetchCategories();
    fetchServices();
    fetchSpecialProducts();
    fetchConcerns();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div
        className={[styles.nav, className].join(" ")}
        style={{ width: "100%" }}
      >
        <div className={styles.content}>
          <div
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          >
            <Image
              className={styles.logo1Icon}
              loading="lazy"
              width={270}
              height={48}
              alt=""
              src={logo1}
            />
          </div>
          <div className={styles.menu}>
            {/* Concerns Dropdown */}
            <div
              className={styles.menuItems}
              onMouseEnter={() => setDropdown((prev) => ({ ...prev, concerns: true }))}
              onMouseLeave={() => {
                setDropdown((prev) => ({ ...prev, concerns: false }));
                setOpenConcernCategory(null);
              }}
            >
              <div className={styles.concerns}>Concerns</div>
              <Image
                className={styles.iconamoonarrowUp2Light}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/iconamoonarrowup2light@2x.png"
              />
              {dropdown.concerns && (
                <div className={styles.dropdown}>
                  {categories.filter((cat) => cat.slug.startsWith("Concerns-")).length > 0 ? (
                    categories
                      .filter((cat) => cat.slug.startsWith("Concerns-"))
                      .map((category) => (
                        <div
                          key={category._id}
                          className={styles.dropdownItemWithSubmenu}
                          onMouseEnter={() => setOpenConcernCategory(category._id)}
                          onMouseLeave={() => setOpenConcernCategory(null)}
                        >
                          <div className={styles.categoryName}>
                            {category.name || "Unknown Category"}
                          </div>
                          {openConcernCategory === category._id && (
                            <div className={styles.submenu}>
                              {concerns.filter((c) => c.category && c.category._id === category._id).length > 0 ? (
                                concerns
                                  .filter((c) => c.category && c.category._id === category._id)
                                  .map((concern) => (
                                    <div
                                      key={concern._id}
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveItem(concern._id);
                                        handleNavigation(`/concern-details/${concern.slug}`);
                                      }}
                                      className={styles.submenuItem}
                                    >
                                      {concern.name || "Unknown Concern"}
                                    </div>
                                  ))
                              ) : (
                                <div className={styles.submenuItem}>
                                  No concerns available
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                  ) : (
                    <div className={styles.dropdownItem}>
                      No concerns available
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className={styles.menuItems}
              onMouseEnter={() => setDropdown((prev) => ({ ...prev, services: true }))}
              onMouseLeave={() => {
                setDropdown((prev) => ({ ...prev, services: false }));
                setOpenServiceCategory(null);
              }}
            >
              <div className={styles.services}>Services</div>
              <Image
                className={styles.iconamoonarrowUp2Light}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/iconamoonarrowup2light@2x.png"
              />
              {dropdown.services && (
                <div className={styles.dropdown}>
                  {categories.filter((cat) => cat.slug.startsWith("Services-")).length > 0 ? (
                    categories
                      .filter((cat) => cat.slug.startsWith("Services-"))
                      .map((category) => (
                        <div
                          key={category._id}
                          className={styles.dropdownItemWithSubmenu}
                          onMouseEnter={() => setOpenServiceCategory(category._id)}
                          onMouseLeave={() => setOpenServiceCategory(null)}
                        >
                          <div className={styles.categoryName}>
                            {category.name || "Unknown Category"}
                          </div>
                          {openServiceCategory === category._id && (
                            <div className={styles.submenu}>
                              {services.filter((srv) => srv.category && srv.category._id === category._id).length > 0 ? (
                                services
                                  .filter((srv) => srv.category && srv.category._id === category._id)
                                  .map((service) => (
                                    <div
                                      key={service._id}
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveItem(service._id);
                                        handleNavigation(`/services/${service.slug}`);
                                      }}
                                      className={styles.submenuItem}
                                    >
                                      {service.name || "Unknown Service"}
                                    </div>
                                  ))
                              ) : (
                                <div className={styles.submenuItem}>
                                  No services available
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                  ) : (
                    <div className={styles.dropdownItem}>
                      No services available
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Special Dropdown */}
            <div
              className={styles.menuItems}
              onMouseEnter={() => setDropdown((prev) => ({ ...prev, special: true }))}
              onMouseLeave={() => {
                setDropdown((prev) => ({ ...prev, special: false }));
                setOpenSpecialCategory(null);
              }}
            >
              <div className={styles.services}>Special</div>
              <Image
                className={styles.iconamoonarrowUp2Light}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/iconamoonarrowup2light@2x.png"
              />
              {dropdown.special && (
                <div className={styles.dropdown}>
                  {categories.filter((cat) => cat.slug.startsWith("Special-")).length > 0 ? (
                    categories
                      .filter((cat) => cat.slug.startsWith("Special-"))
                      .map((category) => (
                        <div
                          key={category._id}
                          className={styles.dropdownItemWithSubmenu}
                          onMouseEnter={() => setOpenSpecialCategory(category._id)}
                          onMouseLeave={() => setOpenSpecialCategory(null)}
                        >
                          <div className={styles.categoryName}>
                            {category.name || "Unknown Category"}
                          </div>
                          {openSpecialCategory === category._id && (
                            <div className={styles.submenu}>
                              {specialProducts.filter((sp) => sp.category && sp.category._id === category._id).length > 0 ? (
                                specialProducts
                                  .filter((sp) => sp.category && sp.category._id === category._id)
                                  .map((special) => (
                                    <div
                                      key={special._id}
                                      onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveItem(special._id);
                                        handleNavigation(`/specials/${special.slug}`);
                                      }}
                                      className={styles.submenuItem}
                                    >
                                      {special.name || "Unknown Special"}
                                    </div>
                                  ))
                              ) : (
                                <div className={styles.submenuItem}>
                                  No specials available
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                  ) : (
                    <div className={styles.dropdownItem}>
                      No specials available
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* Blog Dropdown */}
            <div className={styles.menuItems}>
              <div
                className={styles.blog}
                onClick={() => handleNavigation(`/blog`)}
              >
                Blog
              </div>
            </div>
            <div className={styles.menuItems}>
              <div
                className={styles.contact}
                onClick={() => handleNavigation(`/contact`)}
              >
                Contact
              </div>
            </div>
            {/* <div
              className={styles.languageDropdownWrapper}
              onMouseEnter={toggleLanguageDropdown}
              onMouseLeave={toggleLanguageDropdown}
            >
              <div className={styles.languageButton}>
                Language
                <Image
                  className={styles.dropdownIcon}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/iconamoonarrowup2light@2x.png"
                />
              </div>
              {languageDropdown && (
                <div className={styles.languageDropdown}>
                  <div
                    className={styles.languageOption}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </div>
                  <div
                    className={styles.languageOption}
                    onClick={() => handleLanguageChange("ar")}
                  >
                    Arabic
                  </div>
                </div>
              )}
            </div> */}
          </div>
          <div className={styles.btnBookWrapper}>
            <div
              className={styles.btnBook}
              onClick={() => handleNavigation("/contact")}
            >
              <div className={styles.bookAnAppointment}>
                Book An Appointment
              </div>
            </div>
          </div>
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string.isRequired,
  navWidth: PropTypes.string,
};

export default Nav;
