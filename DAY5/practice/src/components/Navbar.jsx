import React from 'react'
const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Services", href: "/services" },
  { id: 4, name: "Contact", href: "/contact" },
  { id: 5, name: "Login", href: "/login" }
];
const Navbar = () => {
  return (
        <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
