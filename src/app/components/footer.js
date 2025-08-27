import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d6efd",
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        marginTop:"15px"
      }}
    >
      © {new Date().getFullYear()} My Website. All rights reserved.
    </footer>
  );
};

export default Footer;
