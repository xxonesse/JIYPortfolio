import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;