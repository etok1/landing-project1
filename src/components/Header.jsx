import { useState } from "react";
function Header({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header container">
      <h2>Иван Иванович</h2>
      <nav className="desktop-nav">
        <p onClick={() => scrollToSection("about")}>Обо мне</p>
        <p onClick={() => scrollToSection("work")}>Направления</p>
        <p onClick={() => scrollToSection("therapy")}>Терапия</p>
        <p onClick={() => scrollToSection("appoinment")}>Важно</p>
        <p onClick={() => scrollToSection("contacts")}>Контакты</p>
      </nav>
      <button
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <nav className="mobile-nav">
          <p
            onClick={() => {
              scrollToSection("about");
              closeMenu();
            }}
          >
            Обо мне
          </p>
          <p
            onClick={() => {
              scrollToSection("work");
              closeMenu();
            }}
          >
            Направления
          </p>
          <p
            onClick={() => {
              scrollToSection("therapy");
              closeMenu();
            }}
          >
            Терапия
          </p>
          <p
            onClick={() => {
              scrollToSection("appoinment");
              closeMenu();
            }}
          >
            Важно
          </p>
          <p
            onClick={() => {
              scrollToSection("contacts");
              closeMenu();
            }}
          >
            Контакты
          </p>
        </nav>
      </div>
    </header>
  );
}

export default Header;
