import PropTypes from "prop-types";
import { memo } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const AppNavListCore = ({ navList, ...rest }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Nav
      {...rest}
      variant="tabs"
      style={{ border: "none" }}
      activeKey={pathname}
      onSelect={(e) => navigate(e)}
    >
      {navList.map(({ path, title }) => (
        <Nav.Link
          style={{ border: "none" }}
          disabled={pathname === path}
          eventKey={path}
          key={path}
        >
          {title}
        </Nav.Link>
      ))}
    </Nav>
  );
};

AppNavListCore.propTypes = {
  navList: PropTypes.array.isRequired,
};

export const AppNavList = memo(AppNavListCore);
