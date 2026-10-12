
import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import "./Navbar.css";

const primaryLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Conditions", path: "/conditions" },
  { name: "Online Physio", path: "/online-physiotherapy" },
  { name: "About Us", path: "/about" },
];

const moreLinks = [
  { name: "Our Team", path: "/team" },
  { name: "Resources", path: "/resources" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const location = useLocation();
  const moreRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!moreOpen && !menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    }

    function handleOutsideClick(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [moreOpen, menuOpen]);

  const isMoreActive = moreLinks.some(
    (link) => location.pathname === link.path
  );

  const closeMenus = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link
          to="/"
          className="brand"
          aria-label="Rehabics home"
          onClick={closeMenus}
        >
          <span className="brand-icon">
            <Activity size={25} strokeWidth={1.8} />
          </span>

          <span className="brand-copy">
            <strong>
              rehabics<span>.</span>
            </strong>
            <small>MOVE BETTER. LIVE BETTER.</small>
          </span>
        </Link>

        <div className="desktop-nav">
          <div className="nav-links">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="nav-more" ref={moreRef}>
              <button
                type="button"
                className={`nav-link nav-more-trigger${
                  isMoreActive ? " active" : ""
                }`}
                onClick={() => setMoreOpen((previous) => !previous)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown
                  size={14}
                  className={moreOpen ? "chevron-open" : ""}
                />
              </button>

              <div
                className={`nav-dropdown${moreOpen ? " nav-dropdown-open" : ""}`}
                aria-hidden={!moreOpen}
                inert={!moreOpen}
              >
                <span className="nav-dropdown-label">Explore more</span>

                {moreLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-dropdown-link${isActive ? " active" : ""}`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={15} />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <Link to="/appointment" className="nav-cta">
            <span>Book Appointment</span>
            <ArrowUpRight size={17} strokeWidth={2} />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " mobile-nav-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-nav-inner">
          <span className="mobile-nav-label">EXPLORE REHABICS</span>

          {[...primaryLinks, ...moreLinks.slice(0, 3), {
            name: "Contact",
            path: "/contact",
          }].map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? " active" : ""}`
              }
              style={{ "--item-index": index }}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={17} />
            </NavLink>
          ))}

          <Link
            to="/appointment"
            className="mobile-nav-cta"
            tabIndex={menuOpen ? 0 : -1}
          >
            Book Appointment
            <ArrowUpRight size={18} />
          </Link>

          <p className="mobile-nav-note">
            Your journey to better movement starts here.
          </p>
        </div>
      </div>
    </header>
  );
}
