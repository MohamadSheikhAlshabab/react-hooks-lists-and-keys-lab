import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link = links.map(el => {
    return <a key={el} href={`#${el}`}>{el}</a>
  });
  return <nav>{link}</nav>;
}

export default NavBar;
