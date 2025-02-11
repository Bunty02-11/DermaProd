import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";
import s from "./navBarMobile.module.css";

function navBarMobile(props) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [concerns, setConcerns] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [special, setSpecial] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const [servicesByCategory, setServicesByCategory] = useState({});
  const [specialByCategory, setSpecialByCategory] = useState({});

  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const fetchServicesByCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/services?filters[category][id][$eq]=${categoryId}`
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
        `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/promotions?filters[category][id][$eq]=${categoryId}`
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
          `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/${endpoint}`
        );
        const data = await response.json();
        setState(data.data || []);
      } catch (error) {
        console.error(`Failed to fetch ${endpoint}:`, error);
      }
    };
    fetchData("categories", setCategories);
    fetchData("categories", setConcerns);
    fetchData("services", setServices);
    fetchData("blog", setBlogs);
    fetchData("special", setSpecial);
  }, []);

  return (
    <div className={s.navMob}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              className={s.logo1Icon}
              loading="lazy"
              width={220}
              height={48}
              alt=""
              src={props?.logo1}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-left">
              <NavDropdown
                title="Concerns"
                className={s.navLInk}
                id="basic-nav-dropdown"
              >
                {concerns.length > 0 ? (
                  concerns
                    .filter((category) =>
                      category.slug.toLowerCase().includes("category")
                    )
                    .map((concern) => (
                      <NavDropdown.Item
                        className={s.subNav}
                        href={`/concerns/${concern.id}`}
                      >
                        {concern.Name || "Unknown Concern"}
                      </NavDropdown.Item>
                    ))
                ) : (
                  <NavDropdown.Item>Nothing Found</NavDropdown.Item>
                )}
              </NavDropdown>
              {/* Services */}
              <NavDropdown
                title="Services"
                className={s.navLInk}
                id="basic-nav-dropdown"
              >
                {categories.length > 0 ? (
                  categories
                    .filter((category) =>
                      category.slug.toLowerCase().includes("service")
                    )
                    .map((Mainservice) => (
                      <NavDropdown
                        title={`${Mainservice.Name}`}
                        id="nav-dropdown2"
                        onClick={() => {
                          fetchServicesByCategory(Mainservice.id);
                        }}
                      >
                        {servicesByCategory[Mainservice.id]?.length ? (
                          servicesByCategory[Mainservice.id]?.map((service) => (
                            <NavDropdown.Item
                              className={s.navLInk2}
                              key={service.id}
                              onClick={(event) => {
                                // const formattedName = service.Name.replace(/\s+/g, "-").toLowerCase();
                                event.stopPropagation();
                                setActiveItem(service.id);
                                handleNavigation(
                                  `/services/${service.slug}`
                                );
                              }}
                            >
                              {service.Name || "Unknown Service"}
                            </NavDropdown.Item>
                          ))
                        ) : (
                          <NavDropdown.Item>
                            No Service Available
                          </NavDropdown.Item>
                        )}
                      </NavDropdown>
                    ))
                ) : (
                  <NavDropdown.Item>Nothing Found</NavDropdown.Item>
                )}
              </NavDropdown>
              {/* Special */}
              <NavDropdown
                title="Special"
                className={s.navLInk}
                id="basic-nav-dropdown32"
              >
                {categories.length > 0 ? (
                  categories
                    .filter((category) =>
                      category.slug.toLowerCase().includes("trendy")
                    )
                    .map((Mainservice) => (
                      <NavDropdown
                        title={`${Mainservice.Name}`}
                        id="nav-dropdown2"
                        onClick={() => {
                          fetchSpecialByCategory(Mainservice.id);
                        }}
                      >
                        {specialByCategory[Mainservice.id]?.length ? (
                          specialByCategory[Mainservice.id]?.map((service) => (
                            <NavDropdown.Item
                              className={s.navLInk2}
                              key={service.id}
                              onClick={(event) => {
                                // const formattedName = service.Name.replace(/\s+/g, "-").toLowerCase();
                                event.stopPropagation();
                                setActiveItem(service.id);
                                handleNavigation(
                                  `/specials/${service.slug}`
                                );
                              }}
                            >
                              {service.Name || "Unknown Special"}
                            </NavDropdown.Item>
                          ))
                        ) : (
                          <NavDropdown.Item>
                            No Special Available
                          </NavDropdown.Item>
                        )}
                      </NavDropdown>
                    ))
                ) : (
                  <NavDropdown.Item>Nothing Found</NavDropdown.Item>
                )}
              </NavDropdown>

              <Nav.Link href="/blog" className={s.navLInk}>
                Blog
              </Nav.Link>

              <Nav.Link href="/contact" className={s.navLInk}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navBarMobile;
