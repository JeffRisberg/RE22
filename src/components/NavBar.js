import * as React from "react";
import {Link, useMatch, useResolvedPath,} from "react-router-dom";
import type {LinkProps} from "react-router-dom";

function CustomLink({children, to, ...props}: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({path: resolved.pathname, end: true});

  return (
    <Link
      style={{textDecoration: match ? "underline" : "none"}}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

function NavBar(props) {
  let title = 'RE22'

  return (
    <div>
      <div style={{backgroundColor: 'gray', paddingTop: '8px'}}>
        <h3 style={{color: 'white', paddingLeft: '8px'}}>
          {title}
        </h3>
      </div>
      <div>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <CustomLink to="/">Home</CustomLink> |{" "}
          <CustomLink to="/events">Events</CustomLink> |{" "}
          <CustomLink to="/items">Items</CustomLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
