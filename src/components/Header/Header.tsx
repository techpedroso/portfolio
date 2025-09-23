import "./Header.css";

import Logo from "../Logo/Logo";
import Anchor from "../Anchor/Anchor";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className="own-css-header">
      <div className="own-css-logo">
        <Logo label="Yasmin Cardoso"/>
      </div>

      <nav className="own-css-nav">
        <Anchor label="About" href="#"/>
        <Anchor label="Experience" href="#"/>
        <Anchor label="Projects" href="#"/>
        <Button label="Resume" className="white" href="/YasminCardosoResume.pdf" download/>
      </nav>
    </header>
  );
}
