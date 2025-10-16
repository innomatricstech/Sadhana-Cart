// src/components/ShippingPolicy.jsx
import React from 'react';
import './ShippingPolicy.css'; // ✅ Import your external CSS file
import {
  MdAccessTime,
  MdLocalShipping,
  MdCalendarToday,
  MdAttachMoney,
  MdPublic,
  MdWatchLater,
  MdWarning,
  MdHelpOutline
} from 'react-icons/md';

// --- Reusable Component for Policy Sections ---
const PolicySection = ({ number, title, icon: Icon, children, colorClass = '' }) => (
  <div className={`policy-card ${colorClass}`}>
    <div className="policy-title">
      <Icon />
      <h3>{number}. {title}</h3>
    </div>
    <ul>{children}</ul>
  </div>
);

// --- ShippingPolicy Main Component ---
const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-page">
      {/* Header Section */}
      <div className="shipping-header">
        <h1>Shipping Policy</h1>
        <p>Fast & Reliable Delivery</p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Intro */}
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Shipping Policy</h2>
        <p className="mb-6 text-gray-700">
          At <strong>SadhanaCart</strong>, we are committed to delivering your orders quickly and efficiently. This Shipping Policy outlines how and when your items will be shipped.
        </p>

        {/* Sections */}
        <PolicySection number={1} title="Processing Time" icon={MdAccessTime}>
          <li>Orders are typically processed within <strong>1–3 business days</strong>.</li>
          <li>Vendors may require extra time during high-demand periods.</li>
        </PolicySection>

        <PolicySection number={2} title="Shipping Methods" icon={MdLocalShipping}>
          <li>We offer standard and express shipping options.</li>
          <li>Shipping carriers may vary depending on location and vendor.</li>
        </PolicySection>

        <PolicySection number={3} title="Estimated Delivery Times" icon={MdCalendarToday}>
          <li><strong>Standard:</strong> 4–7 business days</li>
          <li><strong>Express:</strong> 1–3 business days</li>
          <li>Delivery times may vary by vendor and region.</li>
        </PolicySection>

        <PolicySection number={4} title="Shipping Charges" icon={MdAttachMoney}>
          <li>Shipping charges are calculated at checkout.</li>
          <li>Free shipping may be available on select products or orders above ₹500.</li>
        </PolicySection>

        <PolicySection number={5} title="International Shipping" icon={MdPublic} colorClass="red-highlight">
          <li>Currently, we only ship within <strong>India</strong>.</li>
          <li>International shipping options will be added in future updates.</li>
        </PolicySection>

        <PolicySection number={6} title="Delays and Tracking" icon={MdWatchLater} colorClass="red-highlight">
          <li>We’ll notify you via email in case of delays due to weather, holidays, or vendor issues.</li>
          <li>A tracking number will be provided once your order ships.</li>
        </PolicySection>

        <PolicySection number={7} title="Undeliverable Packages" icon={MdWarning} colorClass="red-highlight">
          <li>If a package is returned due to an incorrect address or failed delivery, we’ll contact you to resolve it.</li>
        </PolicySection>

        {/* Help Section */}
        <div className="help-card">
          <h4><MdHelpOutline /> Need Help With Shipping?</h4>
          <p>Contact our customer support team for any shipping-related questions or issues.</p>
          <button className="contact-btn">Contact Support</button>
        </div>
        {/* Animated Scroll to Top Button (Not visible in the ReturnPolicy component path unless scrolled) */}
                <a href="#" className="scroll-to-top-btn animate__bounceInRight">
                    <i className="fas fa-arrow-up"></i>
                </a>

      </div>
    </div>
  );
};

export default ShippingPolicy;
