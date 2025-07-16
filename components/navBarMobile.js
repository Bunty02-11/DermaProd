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
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [specialProducts, setSpecialProducts] = useState([]);
  const [concerns, setConcerns] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  // Fetch categories, services, special products, and concerns from the same APIs as nav.js
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://kglynh11qd.execute-api.us-east-1.amazonaws.com/prod/api/categories/");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    const fetchServices = async () => {
      try {
        const response = await fetch("https://kglynh11qd.execute-api.us-east-1.amazonaws.com/prod/api/services/");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    const fetchSpecialProducts = async () => {
      try {
        const response = await fetch("https://kglynh11qd.execute-api.us-east-1.amazonaws.com/prod/api/specialproducts/");
        const data = await response.json();
        setSpecialProducts(data);
      } catch (error) {
        console.error("Failed to fetch special products:", error);
      }
    };
    const fetchConcerns = async () => {
      try {
        const response = await fetch("https://kglynh11qd.execute-api.us-east-1.amazonaws.com/prod/api/concerns");
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
              {/* Concerns Dropdown */}
              <NavDropdown
                title="Concerns"
                className={s.navLInk}
                id="basic-nav-dropdown"
              >
                {categories.filter(cat => cat.slug.startsWith("Concerns-")).length > 0 ? (
                  categories
                    .filter(cat => cat.slug.startsWith("Concerns-"))
                    .map((category) => (
                      <NavDropdown
                        key={category._id}
                        title={category.name || "Unknown Category"}
                        id={`nav-dropdown-${category._id}`}
                        className={s.subNav}
                      >
                        {concerns.filter(c => c.category && c.category._id === category._id).length > 0 ? (
                          concerns
                            .filter(c => c.category && c.category._id === category._id)
                            .map((concern) => (
                              <NavDropdown.Item
                                key={concern._id}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setActiveItem(concern._id);
                                  handleNavigation(`/concern-details/${concern.slug}`);
                                }}
                              >
                                {concern.name || "Unknown Concern"}
                              </NavDropdown.Item>
                            ))
                        ) : (
                          <NavDropdown.Item>No concerns available</NavDropdown.Item>
                        )}
                      </NavDropdown>
                    ))
                ) : (
                  <NavDropdown.Item>No concerns available</NavDropdown.Item>
                )}
              </NavDropdown>

              {/* Services Dropdown */}
              <NavDropdown
                title="Services"
                className={s.navLInk}
                id="basic-nav-dropdown"
              >
                {categories.filter(cat => cat.slug.startsWith("Services-")).length > 0 ? (
                  categories
                    .filter(cat => cat.slug.startsWith("Services-"))
                    .map((category) => (
                      <NavDropdown
                        key={category._id}
                        title={category.name || "Unknown Category"}
                        id={`nav-dropdown-${category._id}`}
                        className={s.subNav}
                      >
                        {services.filter(srv => srv.category && srv.category._id === category._id).length > 0 ? (
                          services
                            .filter(srv => srv.category && srv.category._id === category._id)
                            .map((service) => (
                              <NavDropdown.Item
                                key={service._id}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setActiveItem(service._id);
                                  handleNavigation(`/services/${service.slug}`);
                                }}
                              >
                                {service.name || "Unknown Service"}
                              </NavDropdown.Item>
                            ))
                        ) : (
                          <NavDropdown.Item>No services available</NavDropdown.Item>
                        )}
                      </NavDropdown>
                    ))
                ) : (
                  <NavDropdown.Item>No services available</NavDropdown.Item>
                )}
              </NavDropdown>

              {/* Special Dropdown */}
              <NavDropdown
                title="Special"
                className={s.navLInk}
                id="basic-nav-dropdown"
              >
                {categories.filter(cat => cat.slug.startsWith("Special-")).length > 0 ? (
                  categories
                    .filter(cat => cat.slug.startsWith("Special-"))
                    .map((category) => (
                      <NavDropdown
                        key={category._id}
                        title={category.name || "Unknown Category"}
                        id={`nav-dropdown-${category._id}`}
                        className={s.subNav}
                      >
                        {specialProducts.filter(sp => sp.category && sp.category._id === category._id).length > 0 ? (
                          specialProducts
                            .filter(sp => sp.category && sp.category._id === category._id)
                            .map((special) => (
                              <NavDropdown.Item
                                key={special._id}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setActiveItem(special._id);
                                  handleNavigation(`/specials/${special.slug}`);
                                }}
                              >
                                {special.name || "Unknown Special"}
                              </NavDropdown.Item>
                            ))
                        ) : (
                          <NavDropdown.Item>No specials available</NavDropdown.Item>
                        )}
                      </NavDropdown>
                    ))
                ) : (
                  <NavDropdown.Item>No specials available</NavDropdown.Item>
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
