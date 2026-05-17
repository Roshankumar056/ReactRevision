
// import { useState } from "react";
// import {
//   ShoppingCart,
//   ShoppingBag,
//   Star,
//   Heart,
//   ArrowRight,
//   Truck,
//   RotateCcw,
//   ShieldCheck,
//   Headphones,
//   X,
//   Zap
// } from "lucide-react";

// import {
//   FaInstagram,
//   FaTwitter,
//   FaFacebook,
//   FaYoutube
// } from "react-icons/fa";

// // ─── DATA ────────────────────────────────────────────────────────────────────


// const categories = [
//   { name: "Men's Fashion", items: "320+ items", emoji: "👔", bg: "bg-blue-50",   accent: "text-blue-600"  },
//   { name: "Women's Fashion", items: "540+ items", emoji: "👗", bg: "bg-pink-50",  accent: "text-pink-600"  },
//   { name: "Electronics",   items: "180+ items", emoji: "⚡", bg: "bg-amber-50", accent: "text-amber-600" },
//   { name: "Home & Living", items: "260+ items", emoji: "🏠", bg: "bg-green-50", accent: "text-green-600" },
//   { name: "Beauty",        items: "410+ items", emoji: "✨", bg: "bg-purple-50",accent: "text-purple-600"},
//   { name: "Sports",        items: "150+ items", emoji: "🏃", bg: "bg-red-50",   accent: "text-red-600"   },
// ];

// const products = [
//   { id: 1, name: "Classic White Sneakers", price: 2499, originalPrice: 3999, rating: 4.8, reviews: 2341, badge: "Bestseller", color: "#f5f5f0" },
//   { id: 2, name: "Slim Fit Chino Pants",   price: 1799, originalPrice: 2799, rating: 4.6, reviews: 987,  badge: "New",        color: "#e8d5b7" },
//   { id: 3, name: "Oversized Cotton Tee",   price:  799, originalPrice: 1299, rating: 4.7, reviews: 4102, badge: "38% off",    color: "#d4e8d4" },
//   { id: 4, name: "Leather Crossbody Bag",  price: 3299, originalPrice: 4999, rating: 4.9, reviews: 1563, badge: "Trending",   color: "#c8b8a8" },
//   { id: 5, name: "Floral Midi Dress",      price: 2199, originalPrice: 3499, rating: 4.5, reviews: 782,  badge: "New",        color: "#f0d4e8" },
//   { id: 6, name: "Sports Running Shoes",   price: 3999, originalPrice: 5999, rating: 4.8, reviews: 3204, badge: "Hot",        color: "#b8d4f0" },
//   { id: 7, name: "Structured Blazer",      price: 4499, originalPrice: 6999, rating: 4.7, reviews: 621,  badge: "Premium",    color: "#f1f5f9" }, // Fixed: Lightened color for icon visibility
//   { id: 8, name: "Denim Jacket",           price: 2899, originalPrice: 4499, rating: 4.6, reviews: 1890, badge: "35% off",    color: "#e0e7ff" },
// ];

// const trustBadges = [
//   { icon: Truck,        title: "Free Delivery",    sub: "On orders above ₹999"      },
//   { icon: RotateCcw,    title: "Easy Returns",     sub: "30-day hassle-free return" },
//   { icon: ShieldCheck,  title: "Secure Payments",  sub: "100% protected checkout"   },
//   { icon: Headphones,   title: "24/7 Support",     sub: "Dedicated customer care"   },
// ];

// const footerLinks = {
//   Company:  ["About Us", "Careers", "Press", "Blog"],
//   Support:  ["Help Center", "Track Order", "Returns", "Contact Us"],
//   Legal:    ["Privacy Policy", "Terms of Service", "Cookie Policy"],
// };

// // ─── HELPERS ─────────────────────────────────────────────────────────────────
// const badgeColor = (badge: string) => {
//   if (["Bestseller", "Hot", "Trending"].includes(badge)) return "bg-red-500 text-white";
//   if (badge === "New") return "bg-emerald-500 text-white";
//   if (badge === "Premium") return "bg-gray-900 text-white";
//   return "bg-orange-500 text-white";
// };

// const Stars = ({ rating }: { rating: number }) => (
//   <div className="flex items-center gap-0.5">
//     {[1, 2, 3, 4, 5].map((s) => (
//       <Star
//         key={s}
//         size={12}
//         className={s <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
//       />
//     ))}
//   </div>
// );

// // ─── COMPONENTS ──────────────────────────────────────────────────────────────



// const Hero = () => (
//   <section className="bg-gray-900 text-white pt-10 pb-20 md:pt-20 md:pb-32 relative overflow-hidden">
//     {/* Decorative background circle */}
//     <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4" />
    
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
//       <div className="flex-1 space-y-8 text-center md:text-left">
//         <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
//           <Zap size={14} className="text-yellow-400 fill-yellow-400" />
//           <span className="text-xs font-bold tracking-widest uppercase">New Drop 2026</span>
//         </div>
//         <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
//           STYLE IS <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ETERNAL.</span>
//         </h1>
//         <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
//           Premium essentials designed for the modern individual. Quality you can feel, style you can't ignore.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-500 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-white/5 flex items-center justify-center gap-2 group">
//             Shop Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 relative w-full max-w-md">
//         <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3rem] rotate-6 absolute inset-0 blur-2xl opacity-20 animate-pulse" />
//         <div className="aspect-square bg-gray-800 rounded-[3rem] relative flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden group">
//             <span className="text-9xl transition-transform duration-700 group-hover:scale-110">👔</span>
//             <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
//                 <p className="text-xs font-bold text-indigo-400 uppercase mb-1">Flash Deal</p>
//                 <div className="flex justify-between items-end">
//                     <p className="font-bold text-xl">Luxe Fit Blazer</p>
//                     <p className="font-black text-xl text-yellow-400">₹4,499</p>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const TrustBar = () => (
//   <div className="bg-white border-b border-gray-100">
//     <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
//       {trustBadges.map(({ icon: Icon, title, sub }) => (
//         <div key={title} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
//           <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
//             <Icon size={24} className="text-indigo-600" />
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">{title}</h4>
//             <p className="text-xs text-gray-500 mt-1">{sub}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );


// const Footer = () => (
//   <footer className="bg-gray-900 text-gray-400">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
//       {/* Brand */}
//       <div className="col-span-2 space-y-4">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
//             <ShoppingBag size={16} className="text-gray-900" />
//           </div>
//           <span className="text-xl font-bold text-white">Shopiq</span>
//         </div>
//         <p className="text-sm leading-relaxed max-w-xs">
//           Your one-stop destination for trendy fashion, electronics, and lifestyle products. Delivered fast, priced right.
//         </p>
//         <div className="flex items-center gap-3">
//           {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, i) => (
//             <button key={i} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
//               <Icon size={16} className="text-gray-300" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Links */}
//       {Object.entries(footerLinks).map(([section, links]) => (
//         <div key={section} className="space-y-4">
//           <p className="text-white text-sm font-semibold">{section}</p>
//           <ul className="space-y-2">
//             {links.map((link) => (
//               <li key={link}>
//                 <a href="#" className="text-sm hover:text-white transition-colors no-underline">{link}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>

//     <div className="border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
//         <p>© 2025 Shopiq. All rights reserved.</p>
//         <div className="flex items-center gap-4">
//           {["Visa", "Mastercard", "UPI", "PayTM"].map((p) => (
//             <span key={p} className="bg-white/10 px-2 py-1 rounded text-xs font-medium text-gray-300">{p}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   originalPrice: number;
//   rating: number;
//   reviews: number;
//   badge: string;
//   color: string;
// }

// interface CartItem extends Product {
//   qty: number;
// }

// interface CartSidebarProps {
//   items: CartItem[];
//   open: boolean;
//   onClose: () => void;
//   onRemove: (id: number) => void;
// }

// const CartSidebar = ({
//   items,
//   open,
//   onClose,
//   onRemove,
// }: CartSidebarProps) => {

//   const total = items.reduce(
//     (s, i) => s + i.price * i.qty,
//     0
//   );

//   return (
//     <>
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={onClose}
//         />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
//           <h2 className="text-lg font-bold text-gray-900">
//             Your Cart ({items.length})
//           </h2>

//           <button
//             onClick={onClose}
//             className="p-2 rounded-xl hover:bg-gray-100"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

//           {items.length === 0 && (
//             <div className="text-center py-16 space-y-3">
//               <ShoppingCart
//                 size={40}
//                 className="mx-auto text-gray-300"
//               />

//               <p className="text-gray-500 text-sm">
//                 Your cart is empty
//               </p>
//             </div>
//           )}

//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="flex gap-3 items-start"
//             >
//               <div
//                 className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
//                 style={{ backgroundColor: item.color }}
//               >
//                 👕
//               </div>

//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-semibold text-gray-900 truncate">
//                   {item.name}
//                 </p>

//                 <p className="text-xs text-gray-500 mt-0.5">
//                   Qty: {item.qty}
//                 </p>

//                 <p className="text-sm font-bold text-gray-900 mt-1">
//                   ₹{(item.price * item.qty).toLocaleString()}
//                 </p>
//               </div>

//               <button
//                 onClick={() => onRemove(item.id)}
//                 className="p-1 rounded hover:bg-red-50"
//               >
//                 <X
//                   size={14}
//                   className="text-gray-400 hover:text-red-500"
//                 />
//               </button>
//             </div>
//           ))}
//         </div>

//         {items.length > 0 && (
//           <div className="px-5 py-4 border-t border-gray-100 space-y-3">

//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-500">
//                 Subtotal
//               </span>

//               <span className="font-bold text-gray-900">
//                 ₹{total.toLocaleString()}
//               </span>
//             </div>

//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-500">
//                 Shipping
//               </span>

//               <span className="font-semibold text-emerald-600">
//                 FREE
//               </span>
//             </div>

//             <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95">
//               Checkout — ₹{total.toLocaleString()}
//             </button>

//           </div>
//         )}
//       </div>
//     </>
//   );
// };
// // ─── MAIN APP COMPONENT ───────────────────────────────────────────────────────

// export default function HomePage() {
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const [cartOpen, setCartOpen] = useState(false);

//   const addToCart = (product: any) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.id === product.id);
//       if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
//       return [...prev, { ...product, qty: 1 }];
//     });
//     setCartOpen(true);
//   };

//   const removeFromCart = (id: number) => setCartItems((prev) => prev.filter((i) => i.id !== id));


//   return (
//     <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
      
      
//       <main>
//         <Hero />
//         <TrustBar />
        
//         {/* Categories Section */}
//         <section className="max-w-7xl mx-auto px-4 py-20">
//           <div className="flex justify-between items-end mb-10">
//             <div>
//               <h2 className="text-3xl font-black tracking-tight">SHOP BY CATEGORY</h2>
//               <div className="h-1 w-12 bg-indigo-600 mt-2" />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {categories.map((cat) => (
//               <div key={cat.name} className={`${cat.bg} p-6 rounded-[2rem] flex flex-col items-center gap-4 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all group`}>
//                 <span className="text-4xl group-hover:scale-125 transition-transform">{cat.emoji}</span>
//                 <div className="text-center">
//                   <p className="font-bold text-sm">{cat.name}</p>
//                   <p className={`text-[10px] font-black uppercase tracking-tighter ${cat.accent}`}>{cat.items}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="bg-gray-50 py-20">
//           <div className="max-w-7xl mx-auto px-4">
//              <div className="text-center mb-16 space-y-4">
//                 <h2 className="text-4xl font-black">TRENDING NOW</h2>
//                 <p className="text-gray-500 font-medium">The most wanted styles of the week.</p>
//              </div>
//              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {products.map((p) => (
//                    <div key={p.id} className="bg-white rounded-3xl p-4 border border-gray-100 group hover:shadow-2xl transition-all">
//                       <div className="relative aspect-square rounded-2xl mb-4 overflow-hidden flex items-center justify-center" style={{ backgroundColor: p.color }}>
//                         <span className="text-7xl group-hover:scale-110 transition-transform duration-500">👕</span>
//                         <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase ${badgeColor(p.badge)}`}>
//                           {p.badge}
//                         </div>
//                         <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-rose-500 transition-colors">
//                           <Heart size={18} />
//                         </button>
//                       </div>
//                       <div className="space-y-3">
//                         <Stars rating={p.rating} />
//                         <h3 className="font-bold text-gray-800 truncate">{p.name}</h3>
//                         <div className="flex items-center justify-between">
//                           <p className="font-black text-lg">₹{p.price.toLocaleString()}</p>
//                           <button onClick={() => addToCart(p)} className="p-3 bg-gray-900 text-white rounded-xl hover:bg-indigo-600 transition-colors active:scale-90">
//                             <ShoppingCart size={18} />
//                           </button>
//                         </div>
//                       </div>
//                    </div>
//                 ))}
//              </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//       <CartSidebar 
//         items={cartItems} 
//         open={cartOpen} 
//         onClose={() => setCartOpen(false)} 
//         onRemove={removeFromCart} 
//       />
//     </div>
//   );
// }

// // Reuse your Footer and Sidebar as they are mostly logic-driven and fine.









































import { useState, } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Star,
  Heart,
  ArrowRight,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  ChevronRight,
  X,
  Zap
} from "lucide-react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube
} from "react-icons/fa";

// ─── DATA ────────────────────────────────────────────────────────────────────


const categories = [
  { name: "Men's Fashion", items: "320+ items", emoji: "👔", bg: "bg-blue-50",   accent: "text-blue-600"  },
  { name: "Women's Fashion", items: "540+ items", emoji: "👗", bg: "bg-pink-50",  accent: "text-pink-600"  },
  { name: "Electronics",   items: "180+ items", emoji: "⚡", bg: "bg-amber-50", accent: "text-amber-600" },
  { name: "Home & Living", items: "260+ items", emoji: "🏠", bg: "bg-green-50", accent: "text-green-600" },
  { name: "Beauty",        items: "410+ items", emoji: "✨", bg: "bg-purple-50",accent: "text-purple-600"},
  { name: "Sports",        items: "150+ items", emoji: "🏃", bg: "bg-red-50",   accent: "text-red-600"   },
];

const products = [
  { id: 1, name: "Classic White Sneakers", price: 2499, originalPrice: 3999, rating: 4.8, reviews: 2341, badge: "Bestseller", color: "#f5f5f0" },
  { id: 2, name: "Slim Fit Chino Pants",   price: 1799, originalPrice: 2799, rating: 4.6, reviews: 987,  badge: "New",        color: "#e8d5b7" },
  { id: 3, name: "Oversized Cotton Tee",   price:  799, originalPrice: 1299, rating: 4.7, reviews: 4102, badge: "38% off",    color: "#d4e8d4" },
  { id: 4, name: "Leather Crossbody Bag",  price: 3299, originalPrice: 4999, rating: 4.9, reviews: 1563, badge: "Trending",   color: "#c8b8a8" },
  { id: 5, name: "Floral Midi Dress",      price: 2199, originalPrice: 3499, rating: 4.5, reviews: 782,  badge: "New",        color: "#f0d4e8" },
  { id: 6, name: "Sports Running Shoes",   price: 3999, originalPrice: 5999, rating: 4.8, reviews: 3204, badge: "Hot",        color: "#b8d4f0" },
  { id: 7, name: "Structured Blazer",      price: 4499, originalPrice: 6999, rating: 4.7, reviews: 621,  badge: "Premium",    color: "#2d2d2d" },
  { id: 8, name: "Denim Jacket",           price: 2899, originalPrice: 4499, rating: 4.6, reviews: 1890, badge: "35% off",    color: "#4a6fa5" },
];

const trustBadges = [
  { icon: Truck,        title: "Free Delivery",    sub: "On orders above ₹999"     },
  { icon: RotateCcw,    title: "Easy Returns",     sub: "30-day hassle-free return" },
  { icon: ShieldCheck,  title: "Secure Payments",  sub: "100% protected checkout"  },
  { icon: Headphones,   title: "24/7 Support",     sub: "Dedicated customer care"  },
];

const footerLinks = {
  Company:  ["About Us", "Careers", "Press", "Blog"],
  Support:  ["Help Center", "Track Order", "Returns", "Contact Us"],
  Legal:    ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

// ─── BADGE ────────────────────────────────────────────────────────────────────
const badgeColor = (badge: string): string => {
  if (
    badge === "Bestseller" ||
    badge === "Hot" ||
    badge === "Trending"
  ) {
    return "bg-red-500 text-white";
  }

  if (badge === "New") {
    return "bg-emerald-500 text-white";
  }

  if (badge === "Premium") {
    return "bg-gray-900 text-white";
  }

  return "bg-orange-500 text-white";
};

// ─── STAR RATING ─────────────────────────────────────────────────────────────
type StarsProps = {
  rating: number;
};

const Stars = ({ rating }: StarsProps) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={12}
        className={
          s <= Math.round(rating)
            ? "text-amber-400 fill-amber-400"
            : "text-gray-200 fill-gray-200"
        }
      />
    ))}
  </div>
);


// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="bg-gray-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-xs font-semibold px-3 py-1.5 rounded-full tracking-widest uppercase">
          <Zap size={12} className="text-yellow-400" /> Summer Collection 2025
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Dress Bold.<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#fbbf24,#f97316)" }}>
            Live Free.
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
          Discover thousands of curated styles — from everyday basics to statement pieces. Always on-trend, always affordable.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-200 active:scale-95">
            Shop Now <ArrowRight size={16} />
          </button>
          <button className="flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200">
            View Lookbook
          </button>
        </div>
        <div className="flex items-center gap-6 pt-4">
          {[["50K+", "Happy Customers"], ["10K+", "Products"], ["4.9★", "Avg Rating"]].map(([val, lbl]) => (
            <div key={lbl}>
              <p className="text-xl font-bold">{val}</p>
              <p className="text-xs text-gray-400">{lbl}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero visual */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)" }} />
          <div className="absolute inset-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="text-8xl">👗</div>
              <div className="bg-white/10 rounded-xl px-4 py-2">
                <p className="text-sm font-semibold">New Arrivals</p>
                <p className="text-xs text-gray-400">Starting ₹499</p>
              </div>
            </div>
          </div>
          {/* Floating badges */}
          <div className="absolute top-4 right-0 bg-white text-gray-900 rounded-xl px-3 py-2 shadow-lg text-xs font-bold">
            🔥 50% OFF
          </div>
          <div className="absolute bottom-8 left-0 bg-emerald-500 text-white rounded-xl px-3 py-2 shadow-lg text-xs font-bold">
            ✅ Free Shipping
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── TRUST BADGES ─────────────────────────────────────────────────────────────
const TrustBar = () => (
  <section className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {trustBadges.map(({ icon: Icon, title, sub }) => (
        <div key={title} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
            <Icon size={20} className="text-gray-700" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="text-xs text-gray-500">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const Categories = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Browse by</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop Categories</h2>
      </div>
      <a href="/categories" className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 no-underline">
        All categories <ChevronRight size={16} />
      </a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {categories.map(({ name, items, emoji, bg, accent }) => (
        <a key={name} href="/products"
          className={`${bg} rounded-2xl p-4 flex flex-col items-center text-center gap-2 no-underline hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}>
          <span className="text-3xl">{emoji}</span>
          <p className="text-sm font-semibold text-gray-900 leading-tight">{name}</p>
          <p className={`text-xs font-medium ${accent}`}>{items}</p>
        </a>
      ))}
    </div>
  </section>
);

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  color: string;
}

interface ProductsCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({
  product,
  onAddToCart,
}: ProductsCardProps) => {

  const [wished, setWished] = useState<boolean>(false);

  const discount: number = Math.round(
    (1 - product.price / product.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden group">

      {/* Image area */}
      <div
        className="relative h-52 flex items-center justify-center"
        style={{ backgroundColor: product.color }}
      >
        <span className="text-6xl select-none">
          👕
        </span>

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 text-[11px] font-bold px-2 py-0.5 rounded-full ${badgeColor(product.badge)}`}
        >
          {product.badge}
        </span>

        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
        >
          <Heart
            size={15}
            className={
              wished
                ? "fill-red-500 text-red-500"
                : "text-gray-400"
            }
          />
        </button>

        {/* Quick add on hover */}
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap"
        >
          + Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">

        <p className="text-sm font-semibold text-gray-900 truncate">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          <Stars rating={product.rating} />

          <span className="text-xs text-gray-400">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center gap-2">

          <span className="text-base font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="text-xs text-gray-400 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>

          <span className="text-xs font-semibold text-emerald-600">
            {discount}% off
          </span>

        </div>
      </div>
    </div>
  );
};

// ─── PRODUCTS SECTION ─────────────────────────────────────────────────────────
type ProductType = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  color: string;
};

type ProductsSectionProps = {
  onAddToCart: (product: ProductType) => void;
};

const ProductsSection = ({
  onAddToCart,
}: ProductsSectionProps) => (
  <section className="bg-gray-50 py-14">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
            Handpicked for you
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trending Products
          </h2>
        </div>

        <a
          href="/products"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 no-underline"
        >
          View all <ChevronRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p: ProductType) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  </section>
);

// ─── BANNER ───────────────────────────────────────────────────────────────────
const PromoBanner = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
    <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-white space-y-3">
        <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
          Limited Time Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          End of Season Sale<br />Up to <span className="text-yellow-300">50% Off</span>
        </h2>
        <p className="text-white/80 text-sm">Offer ends in 48 hours. Don't miss out!</p>
        <div className="flex gap-3 pt-2">
          {[["12", "Hours"], ["34", "Mins"], ["56", "Secs"]].map(([n, l]) => (
            <div key={l} className="bg-white/20 rounded-xl px-3 py-2 text-center min-w-[56px]">
              <p className="text-xl font-bold text-white">{n}</p>
              <p className="text-[10px] text-white/70 uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-yellow-300 hover:text-orange-700 transition-all duration-200 active:scale-95 text-sm whitespace-nowrap flex items-center gap-2">
        Grab the Deal <ArrowRight size={16} />
      </button>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
      {/* Brand */}
      <div className="col-span-2 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <ShoppingBag size={16} className="text-gray-900" />
          </div>
          <span className="text-xl font-bold text-white">Shopiq</span>
        </div>
        <p className="text-sm leading-relaxed max-w-xs">
          Your one-stop destination for trendy fashion, electronics, and lifestyle products. Delivered fast, priced right.
        </p>
        <div className="flex items-center gap-3">
          {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, i) => (
            <button key={i} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <Icon size={16} className="text-gray-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Links */}
      {Object.entries(footerLinks).map(([section, links]) => (
        <div key={section} className="space-y-4">
          <p className="text-white text-sm font-semibold">{section}</p>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm hover:text-white transition-colors no-underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <p>© 2025 Shopiq. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {["Visa", "Mastercard", "UPI", "PayTM"].map((p) => (
            <span key={p} className="bg-white/10 px-2 py-1 rounded text-xs font-medium text-gray-300">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ─── CART SIDEBAR ─────────────────────────────────────────────────────────────



interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  color: string;
}

interface CartItem extends Product {
  qty: number;
}

interface CartSidebarProps {
  items: CartItem[];
  open: boolean;
  onClose: () => void;
  onRemove: (id: number) => void;
}


 const CartSidebar = ({
  items,
  open,
  onClose,
  onRemove,
}: CartSidebarProps) => {

  const total = items.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">
            Your Cart ({items.length})
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

          {items.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <ShoppingCart
                size={40}
                className="mx-auto text-gray-300"
              />

              <p className="text-gray-500 text-sm">
                Your cart is empty
              </p>
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-start"
            >

              {/* Product Image */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{
                  backgroundColor: item.color,
                }}
              >
                👕
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">

                <p className="text-sm font-semibold text-gray-900 truncate">
                  {item.name}
                </p>

                <p className="text-xs text-gray-500 mt-0.5">
                  Qty: {item.qty}
                </p>

                <p className="text-sm font-bold text-gray-900 mt-1">
                  ₹
                  {(
                    item.price * item.qty
                  ).toLocaleString()}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() =>
                  onRemove(item.id)
                }
                className="p-1 rounded hover:bg-red-50"
              >
                <X
                  size={14}
                  className="text-gray-400 hover:text-red-500"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 space-y-3">

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="font-bold text-gray-900">
                ₹{total.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Shipping
              </span>

              <span className="font-semibold text-emerald-600">
                FREE
              </span>
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95">
              Checkout — ₹
              {total.toLocaleString()}
            </button>
          </div>
        )}
      </div>
    </>
  );
};




 
// ─── APP ─────────────────────────────────────────────────────────────────────
// import {
//   useEffect
// } from "react";



type ProductsType = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  color: string;
};

type CartItemType = ProductsType & {
  qty: number;
};

// type HomeProps = {
//   setTotalCount: React.Dispatch<
//     React.SetStateAction<number>
//   >;
// };

export default function HomePage(): React.JSX.Element {

  // cart items
  const [cartItems, setCartItems] =
    useState<CartItemType[]>([]);

  // sidebar open/close
  const [cartOpen, setCartOpen] =
    useState<boolean>(false);

  // add to cart
  const addToCart = (
    product: ProductsType
  ): void => {

    setCartItems((prev) => {

      const existing = prev.find(
        (i) => i.id === product.id
      );

      // if already exists
      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? {
                ...i,
                qty: i.qty + 1,
              }
            : i
        );
      }

      // new item
      return [
        ...prev,
        {
          ...product,
          qty: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  // remove item
  const removeFromCart = (
    id: number
  ): void => {

    setCartItems((prev) =>
      prev.filter((i) => i.id !== id)
    );
  };

  // total cart count
  // const totalCount = cartItems.reduce(
  //   (sum, item) => sum + item.qty,
  //   0
  // );

  // update navbar count
  // useEffect(() => {
  //   setTotalCount(totalCount);
  // }, [totalCount, setTotalCount]);

  return (
    <div className="min-h-screen bg-white font-sans">

      <Hero />

      <TrustBar />

      <Categories />

      <ProductsSection
        onAddToCart={addToCart}
      />

      <PromoBanner />

      <Footer />

      <CartSidebar
        items={cartItems}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
      />

    </div>
  );
}