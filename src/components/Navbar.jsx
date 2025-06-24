import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/pulse-smartwatch-logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [ mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    // Desktop Horizontal Nav Items
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b
    border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Pulse</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, ind) => (
              <li key={ind}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
            <a href="#" className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md">Create an Account</a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              { mobileDrawerOpen ? <X /> : <Menu /> }
            </button>
          </div>
        </div> 
        {/* Horizontal Nav Items */}
        { mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 
          flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, ind) => (
              <li key={ind} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            </ul>
            <div className="flex space-x-6 ml-10">
              <a href="#" className="py-2 px-6 w-25 border rounded-md ">Sign In</a>
              <a href="#" className="py-2 px-4 w-37 bg-gradient-to-r from-purple-500 to-purple-800 border rounded-md ">Create Account</a>
            </div>
          </div>
        )}
      </div>
    </nav>

  )
}

export default Navbar;