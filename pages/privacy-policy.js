import React from "react";
import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="title">Privacy Policy</h1>
        <div className="content">
          <p>Last updated: [Date]</p>
          
          <h2>Introduction</h2>
          <p>
            Welcome to our Privacy Policy. This document explains how we collect, use, and protect your personal information when you use our services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and other details when you use our website or services.
          </p>
          
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
          </p>
          
          <h2>Information Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services that collect, monitor, and analyze data to improve our services.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          .title {
            font-size: 36px;
            margin-bottom: 30px;
            text-align: center;
          }
          .content {
            line-height: 1.6;
          }
          h2 {
            margin-top: 30px;
            margin-bottom: 15px;
          }
          p {
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
