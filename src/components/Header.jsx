import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-dark text-light">
          <div className="container">
            <h1 className="display-1">Shopie</h1>
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
