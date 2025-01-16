import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styles from "./nav.module.css";

const Nav = ({ className = "", navWidth, logo1 }) => {
  const [concerns, setConcerns] = useState([]);
  const [categories, setCategories] = useState([]);
  const [servicesByCategory, setServicesByCategory] = useState({});
  const [specialByCategory, setSpecialByCategory] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [special, setSpecial] = useState([]);

  const router = useRouter();
  const [dropdown, setDropdown] = useState({
    concerns: false,
    services: false,
    blog: false,
    special: false,
  });

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

  const fetchServicesByCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `https://grateful-authority-34f01c9d0d.strapiapp.com/api/services?filters[category][id][$eq]=${categoryId}`
      );
      const data = await response.json();
      setServicesByCategory((prev) => ({
        ...prev,
        [categoryId]: data.data || [],
      }));
    } catch (error) {
      console.error("Failed to fetch services by category:", error);
    }
  };

  const fetchSpecialByCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `https://grateful-authority-34f01c9d0d.strapiapp.com/api/Special-Promotions?filters[category][id][$eq]=${categoryId}`
      );
      const data = await response.json();
      setSpecialByCategory((prev) => ({
        ...prev,
        [categoryId]: data.data || [],
      }));
    } catch (error) {
      console.error("Failed to fetch special by category:", error);
    }
  };

  useEffect(() => {
    const fetchData = async (endpoint, setState) => {
      try {
        const response = await fetch(
          `https://grateful-authority-34f01c9d0d.strapiapp.com/api/${endpoint}?populate=*&pagination[limit]=1000`
        );
        const data = await response.json();
        setState(data.data || []);
      } catch (error) {
        console.error(`Failed to fetch ${endpoint}:`, error);
      }
    };

    fetchData("categories", setCategories);
    fetchData("categories", setConcerns); // Assuming the "concerns" are also categories
    fetchData("blog", setBlogs);
    fetchData("special", setSpecial);
  }, []);

  return (
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
            onMouseEnter={() => toggleDropdown("concerns")}
            onMouseLeave={closeDropdowns}
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
                {concerns.length > 0 ? (
                  concerns
                    .filter((category) =>
                      category.slug.toLowerCase().includes("category")
                    )
                    .map((concern) => (
                      <div
                        key={concern.id}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleNavigation(`/concerns/${concern.id}`);
                        }}
                        className={styles.dropdownItem}
                      >
                        {concern.Name || "Unknown Concern"}
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
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={closeDropdowns}
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
                {categories.length > 0 ? (
                  categories
                    .filter((category) =>
                      category.slug.toLowerCase().includes("service")
                    )
                    .map((category) => (
                      <div
                        key={category.id}
                        onMouseEnter={() =>
                          fetchServicesByCategory(category.id)
                        }
                        className={styles.dropdownItemWithSubmenu}
                      >
                        <div className={styles.categoryName}>
                          {category.Name || "Unknown Category"}
                        </div>
                        <div className={styles.submenu}>
                          {servicesByCategory[category.id]?.length > 0 ? (
                            servicesByCategory[category.id].map((service) => (
                              <div
                                key={service.id}
                                onClick={(event) => {
                                  const formattedName = service.Name.replace(/\s+/g, "-").toLowerCase();
                                  event.stopPropagation();
                                  setActiveItem(service.id);
                                  handleNavigation(
                                    `/services/${formattedName}/${service.documentId}`
                                  );
                                }}
                                className={`${styles.submenuItem} ${activeItem === service.id ? styles.active : ""}`}
                              >
                                {service.Name || "Unknown Service"}
                              </div>
                            ))
                          ) : (
                            <div className={styles.noSubcategory}>
                              No subcategory available
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                ) : (
                  <div className={styles.dropdownItem}>
                    No categories available
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Special Dropdown */}
          <div
            className={styles.menuItems}
            onMouseEnter={() => toggleDropdown("special")}
            onMouseLeave={closeDropdowns}
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
                {categories.length > 0 ? (
                  categories
                    .filter((category) =>
                      category.slug.toLowerCase().includes("trendy")
                    ) // Adjusted filter
                    .map((category) => (
                      <div
                        key={category.id}
                        onMouseEnter={() => fetchSpecialByCategory(category.id)} // Fetch subcategories
                        className={styles.dropdownItemWithSubmenu}
                      >
                        <div className={styles.categoryName}>
                          {category.Name || "Unknown Category"}
                        </div>
                        <div className={styles.submenu}>
                          {specialByCategory[category.id]?.length > 0 ? (
                            specialByCategory[category.id].map(
                              (subCategory) => (
                                <div
                                  key={subCategory.id}
                                  onClick={(event) => {
                                    const formattedName = subCategory.Name.replace(/\s+/g, "-").toLowerCase();
                                    event.stopPropagation();
                                    setActiveItem(subCategory.id);
                                    handleNavigation(
                                      `/specials/${formattedName}/${subCategory.documentId}`
                                    );
                                  }}
                                  className={`${styles.submenuItem} ${activeItem === subCategory.id
                                    ? styles.active
                                    : ""
                                    }`}
                                >
                                  {subCategory.Name}
                                </div>
                              )
                            )
                          ) : (
                            <div className={styles.submenuItem}>
                              No subcategories available
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                ) : (
                  <div className={styles.dropdownItem}>
                    No categories available
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Blog Dropdown */}
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
        </div>

        {/* <div className={styles.icons}>
          <Image
            className={styles.searchIcon}
            loading="lazy"
            width={44}
            height={44}
            alt=""
            src="/search.svg"
          />
          <div className={styles.iconsChild} />
          <div className={styles.language}>
            <div className={styles.en}>EN</div>
            <Image
              className={styles.iconamoonarrowUp2Light4}
              width={18}
              height={18}
              alt=""
              src="/iconamoonarrowup2light-4@2x.png"
            />
          </div>
        </div> */}
        <div
          className={styles.btnBook}
          onClick={() => handleNavigation("/contact")}
        >
          <div className={styles.bookAnAppointment}>Book An Appointment</div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string.isRequired,
  navWidth: PropTypes.string,
};

export default Nav;
