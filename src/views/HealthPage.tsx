import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Recommended from "components/health/Recommended";
import Post from "components/health/Post";

function ContactPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Health page</title>
        </Helmet>
      </HelmetProvider>
      <div className="health-page">
        <Recommended />
        <Post />
      </div>
    </>
  );
}

export default ContactPage;
