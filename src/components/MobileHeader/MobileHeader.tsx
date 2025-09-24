import { useState } from "react";
import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";
import "./MobileHeader.css";

import Logo from "../Logo/Logo";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="own-css-logo__mobile">
        <Logo label="Yasmin Cardoso"/>
      </div>

      <button className="menu-btn" onClick={() => setOpen(true)}>
        <img src={menuIcon} alt="Open menu" />
      </button>
      <nav className={`mobile-drawer ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <img src={closeIcon} alt="Close menu" />
        </button>
        <ul>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="mailto:yasmincardoso05@gmail.com" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </nav>
      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
};

export default MobileHeader;
