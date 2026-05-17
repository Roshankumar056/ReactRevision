// import  { useState } from "react";
// import { ShoppingCart, Search, ShoppingBag, Menu, X } from "lucide-react";
// import { Link, NavLink } from "react-router-dom";

// type NavLinkItem = {
//   label: string;
//   href: string;
// };

// const navLinks: NavLinkItem[] = [
//   { label: "Home", href: "/" },
//   { label: "Products", href: "/products" },
//   { label: "About", href: "/about" },
// ];

// type NavbarProps = {
//   cartCount?: number;
// };

// const Navbar = ({ cartCount = 0 }: NavbarProps) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16">

//           {/* 1. Logo Section */}
//           <Link to="/" className="flex items-center gap-2 group no-underline">
//             <div className="w-9 h-9 bg-gray-800 group-hover:bg-gray-900 rounded-xl flex items-center justify-center transition-colors shadow-sm">
//               <ShoppingBag size={18} color="white" strokeWidth={2.5} />
//             </div>
//             <span className="text-xl font-extrabold tracking-tight text-gray-900">
//               Shopiq<span className="text-indigo-600">.</span>
//             </span>
//           </Link>

//           {/* 2. Desktop Nav Links (Mapped with Active State) */}
//           <div className="hidden md:flex items-center gap-1">
//             {navLinks.map(({ label, href }) => (
//               <NavLink
//                 key={label}
//                 to={href}
//                 className={({ isActive }) => `
//                   text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 no-underline
//                   ${isActive
//                     ? "bg-indigo-50 text-indigo-700"
//                     : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
//                   }
//                 `}
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>

//           {/* 3. Right Side Actions */}
//           <div className="flex items-center gap-2 sm:gap-4">

//             {/* Search - Hidden on small mobile to save space */}
//             <div className="hidden sm:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-full px-4 py-2 text-sm text-gray-400 cursor-pointer transition-all">
//               <Search size={15} />
//               <span className="hidden lg:inline">Search products...</span>
//             </div>

//             {/* Cart Button */}
//             <Link
//               to="/cart"
//               className="relative flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-md shadow-gray-200 no-underline"
//             >
//               <ShoppingCart size={18} strokeWidth={2.5} />
//               <span className="hidden sm:inline">Cart</span>

//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 4. Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-2 animate-in slide-in-from-top duration-300">
//           {navLinks.map(({ label, href }) => (
//             <NavLink
//               key={label}
//               to={href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className={({ isActive }) => `
//                 block px-4 py-3 rounded-xl font-bold no-underline
//                 ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-600 hover:bg-gray-50"}
//               `}
//             >
//               {label}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { Menu, Search, ShoppingBag, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store";

type NavLinkType = {
  label: string;
  href: string;
};

// type NavbarProps = {
//   cartCount: number;
// };

const navLinks: NavLinkType[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

const Navbar = (): React.JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems, "navbar");

  return (
    <>
      <div className="bg-gray-900 text-white text-center text-xs font-medium py-2 tracking-widest">
        🎉 MEGA SALE — Up to 50% off sitewide &nbsp;·&nbsp;
        <span className="text-yellow-400">Use code SAVE50</span>
      </div>

      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <ShoppingBag size={16} color="white" strokeWidth={2.2} />
            </div>

            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Shopiq
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-150 no-underline"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 hover:bg-white hover:border-gray-300 border border-transparent rounded-lg px-3 py-2 text-sm text-gray-400 cursor-text transition-all">
              <Search size={14} />
              <span>Search...</span>
            </div>

            <div className="w-px h-6 bg-gray-200 hidden sm:block" />

            <Link
              to="/cart"
              className="relative flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all active:scale-95"
            >
              <ShoppingCart size={16} />

              <span className="hidden sm:inline">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
                  {cartItems.length}
                </span>
              )}
              {/* {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )} */}
            </Link>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
