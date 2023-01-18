import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ContactPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact page</title>
        </Helmet>
      </HelmetProvider>
      <p>Contact page</p>
    </>
  );
}

export default ContactPage;
