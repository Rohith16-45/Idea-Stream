"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navigation() {
  const pathName = usePathname();
  useEffect(() => {
    // ✅ Only loads in browser, never in SSR
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("✅ Bootstrap JS loaded"))
      .catch((err) => console.error("Bootstrap load error:", err));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">
          IDEA STREAM <i className="bi bi-lightbulb"></i>
        </Link>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${
                  pathName === "/" ? "active fw-bold" : ""
                }`}
              >
                HOME <i className="bi bi-house"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/posts"
                className={`nav-link ${
                  pathName === "/posts" ? "active fw-bold" : ""
                }`}
              >
                POSTS <i className="bi bi-file-earmark-post"></i>
              </Link>
            </li>

            {/* Dropdown Menu */}

            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${
                  pathName === "/about" ? "active fw-bold" : ""
                }`}
              >
                ABOUT <i className="bi bi-info-circle"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link ${
                  pathName === "/contact" ? "active fw-bold" : ""
                }`}
              >
                CONTACT <i className="bi bi-envelope-at"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
