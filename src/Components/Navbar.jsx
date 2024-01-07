import React, { useEffect, useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

function Navbar() {
  const [isHeaderBlurred, setHeaderBlurred] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleToggleClick = () => setMenuVisible(!isMenuVisible);
  const handleCloseClick = () => setMenuVisible(false);

  const handleNavLinkClick = (link) => {
    setHeaderBlurred(false);
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.scrollY;

      document.querySelectorAll('.nav--menu a').forEach((link) => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 58;
          const sectionHeight = section.offsetHeight;

          if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            setActiveLink(sectionId);
          }
        }
      });

      setHeaderBlurred(scrollDown >= window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isHeaderBlurred ? 'blur-header' : ''}`} id="header">
      <nav className="nav--container">
        <h4 className="nav--logo">SkullCandy</h4>
        <div className={`nav--menu ${isMenuVisible ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav--list">
            {['home', 'about', 'new', 'model'].map((link) => (
              <li className="nav--item" key={link}>
                <a
                  href={`#${link}`}
                  className={`nav--link ${activeLink === link ? 'active-link' : ''}`}
                  onClick={() => handleNavLinkClick(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav--close" id="nav-close" onClick={handleCloseClick}>
            <RiCloseLine />
          </div>
        </div>

        <div className="nav--toggle" id="nav-toggle" onClick={handleToggleClick}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;








