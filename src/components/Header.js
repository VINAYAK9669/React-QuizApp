import ReactLogo from "./React_logo1.png"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={ReactLogo} alt="Reactlogo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
