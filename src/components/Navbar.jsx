import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocation } from "../redux/store";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import AuthPage from "../pages/LoginPage";
import SecondHeader from "./searchBar/SecondHeader";
import "./Navbar.css";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { location } = useSelector((state) => state.header);
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  const changeLocation = () => {
    const newLoc = prompt("Enter new location:", location);
    if (newLoc) dispatch(setLocation(newLoc));
  };

  const goToCart = () => navigate("/cart"); // Updated: Navigate to /cart

  return (
    <>
      <Navbar className="navbar-custom sticky-top" expand="lg">
        <div className="navbar-header-row">
          <span className="nav-icon d-block d-lg-none" style={{ marginLeft: '-8px' }}>&#9776;</span>

          <Navbar.Brand href="/" className="navbar-brand-custom">
            <span className="brand-white">E-commerce</span>
            <span className="brand-orange">.in</span>
          </Navbar.Brand>

          <div
            className="text-white ms-3 location d-none d-lg-block"
            style={{ cursor: "pointer" }}
            onClick={changeLocation}
          >
            Delivering to <strong>{location}</strong>
          </div>

          <div className="d-flex align-items-center d-lg-none ms-auto">
            <span className="nav-icon" style={{ fontSize: '1.2rem' }}>📱</span>
            <span className="nav-icon" onClick={openAuthModal} style={{ fontSize: '1.2rem', margin: '0 10px' }}>👤</span>
            <span className="nav-icon" onClick={goToCart} style={{ fontSize: '1.2rem' }}>🛒</span>
          </div>
        </div>

        <div className="search-bar-container flex-grow-1">
          <span className="search-icon d-block">🔍</span>
          <input
            type="text"
            placeholder="Search for Products"
            className="search-input"
          />
        </div>

        <div className="location-wrapper d-block d-lg-none">
          <div className="location-container">
            <span className="location-icon">📍</span>
            <span className="location">Location not set</span>
            <span className="location-link" onClick={changeLocation}>Select delivery location</span>
            <span className="location-arrow"> &gt; </span>
          </div>
        </div>

        <Nav className="align-items-center d-none d-lg-flex ms-3">
          <Button
            variant="outline-light"
            className="me-3 account-button"
            onClick={openAuthModal}
          >
            Account
          </Button>
          <Nav.Link className="nav-link text-white returns-orders">Returns & Orders</Nav.Link>
          <Nav.Link
            className="nav-link text-white cart-info"
            onClick={goToCart}
            style={{ cursor: "pointer" }}
          >
            🛒 Cart <span className="cart-count">{cartCount}</span>
          </Nav.Link>
        </Nav>
      </Navbar>

      <SecondHeader />

      <Modal show={showAuthModal} onHide={closeAuthModal} centered>
        <Modal.Body>
          <AuthPage onClose={closeAuthModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}
