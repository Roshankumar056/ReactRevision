// import { useSelector } from "react-redux";
// import type { RootState } from "../store";

// type CartProps = {
//   open: boolean;
//   onClose: () => void;
// };

// const Cart = ({
//   open,
//   onClose,
// }: CartProps) => {

//   const cartItems=useSelector((state:RootState)=>state.cart.items)
//   console.log(cartItems);

//   return (
//     <div>
//       {open && <h1>Cart Open</h1>}

//       <button onClick={onClose}>
//         Close
//       </button>
//     </div>
//   );
// };

// export default Cart;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../store";
// 👇 adjust to your actual cartSlice action names
import { removeFromCart, updateQuantity } from "../Slices/cartSlice";
import {
  ArrowLeft,
  ShieldCheck,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  Tag,
  CheckCircle2,
  Lock,
} from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────
const FREE_SHIPPING_THRESHOLD = 50;
const TAX_RATE = 0.08;
const VALID_COUPON = "SAVE10";
const COUPON_RATE = 0.1;

// ── Shipping Progress Bar ──────────────────────────────────────────────────
const ShippingBar = ({ afterDiscount }: { afterDiscount: number }) => {
  const pct = Math.min(
    100,
    Math.round((afterDiscount / FREE_SHIPPING_THRESHOLD) * 100),
  );
  const rem = (FREE_SHIPPING_THRESHOLD - afterDiscount).toFixed(2);
  const unlocked = afterDiscount >= FREE_SHIPPING_THRESHOLD;

  return (
    <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
      <div className="flex justify-between items-center mb-1.5">
        <p className="text-[11px] text-gray-500">
          {unlocked ? (
            <span className="text-emerald-600 font-semibold">
              🎉 Free shipping unlocked!
            </span>
          ) : (
            <>
              Add <span className="font-semibold text-gray-800">${rem}</span>{" "}
              more for free shipping
            </>
          )}
        </p>
        <span className="text-[10px] text-gray-400">{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

// ── Cart Item Row ──────────────────────────────────────────────────────────
const CartItemRow = ({
  item,
  onRemove,
  onQtyChange,
}: {
  item: {
    id: number;
    title: string;
    price: number;
    image: string;
    qty: number;
  };
  onRemove: (id: number) => void;
  onQtyChange: (id: number, qty: number) => void;
}) => (
  <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60 transition-colors">
    {/* Thumb — swap with <img src={item.thumbnail}> if available */}
    <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-gray-900 truncate">
        {item.title}
      </p>
      <p className="text-xs text-gray-400 mt-0.5">
        ${item.price.toFixed(2)} per unit
      </p>
    </div>

    {/* Right controls */}
    <div className="flex flex-col items-end gap-2 flex-shrink-0">
      <span className="text-sm font-bold text-gray-900">
        ${(item.price * item.qty).toFixed(2)}
      </span>

      {/* Qty stepper */}
      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => onQtyChange(item.id, Math.max(1, item.qty - 1))}
          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={11} />
        </button>
        <span className="w-7 text-center text-xs font-semibold text-gray-900 select-none">
          {item.qty}
        </span>
        <button
          onClick={() => onQtyChange(item.id, item.qty + 1)}
          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={11} />
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(item.id)}
        className="flex items-center gap-1 text-[11px] text-red-400 hover:text-red-600 transition-colors"
      >
        <Trash2 size={11} /> Remove
      </button>
    </div>
  </div>
);

// ── Empty State ────────────────────────────────────────────────────────────
const EmptyCart = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col items-center justify-center py-20 gap-4 text-center px-8">
    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
      <ShoppingCart size={28} className="text-gray-300" />
    </div>
    <div>
      <p className="text-base font-semibold text-gray-800">
        Your cart is empty
      </p>
      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
        Looks like you haven't added anything yet. Start shopping!
      </p>
    </div>
    <button
      onClick={onBack}
      className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
    >
      Continue Shopping
    </button>
  </div>
);

// ── Main Cart Page ─────────────────────────────────────────────────────────
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState(false);

  // ── Derived totals ──────────────────────────────────────────────────────
  const subtotal = cartItems.reduce(
    (s: number, i: any) => s + i.price * i.qty,
    0,
  );
  const discount = couponApplied ? subtotal * COUPON_RATE : 0;
  const afterDisc = subtotal - discount;
  const shipping = afterDisc >= FREE_SHIPPING_THRESHOLD ? 0 : 5.99;
  const tax = afterDisc * TAX_RATE;
  const total = afterDisc + shipping + tax;
  const totalQty = cartItems.reduce((s: number, i: any) => s + i.qty, 0);

  const handleApply = () => {
    if (coupon.trim().toUpperCase() === VALID_COUPON) {
      setCouponApplied(true);
      setCouponError(false);
    } else {
      setCouponError(true);
      setTimeout(() => setCouponError(false), 1600);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 items-start">
          {/* ── LEFT: Items ── */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h1 className="text-base font-bold text-gray-900">
                Shopping Cart
              </h1>
              {totalQty > 0 && (
                <span className="text-xs text-gray-400">
                  {totalQty} item{totalQty !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {/* Shipping bar */}
            {cartItems.length > 0 && <ShippingBar afterDiscount={afterDisc} />}

            {/* Items or empty */}
            {cartItems.length === 0 ? (
              <EmptyCart onBack={() => navigate(-1)} />
            ) : (
              <div>
                {cartItems.map((item: any) => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onRemove={(id) => dispatch(removeFromCart(id))}
                    onQtyChange={(id, qty) =>
                      dispatch(updateQuantity({ id, qty }))
                    }
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Order Summary ── */}
          {cartItems.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-4">
              <h2 className="text-sm font-bold text-gray-900">Order Summary</h2>

              {/* Coupon */}
              {couponApplied ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2.5">
                  <CheckCircle2 size={13} /> SAVE10 applied — 10% off!
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag
                      size={12}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleApply()}
                      placeholder='Try "SAVE10"'
                      className={`w-full pl-8 pr-3 py-2 text-xs rounded-xl border outline-none transition-colors ${
                        couponError
                          ? "border-red-300 bg-red-50 text-red-600"
                          : "border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-white"
                      }`}
                    />
                  </div>
                  <button
                    onClick={handleApply}
                    className="text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-xl transition-colors whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
              )}

              <hr className="border-gray-100" />

              {/* Price breakdown */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Discount (10%)</span>
                    <span className="font-semibold text-red-500">
                      −${discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-xs text-gray-500">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="font-semibold text-emerald-600">
                      Free 🎉
                    </span>
                  ) : (
                    <span className="font-semibold text-gray-800">
                      ${shipping.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>Tax (est. 8%)</span>
                  <span className="font-semibold text-gray-800">
                    ${tax.toFixed(2)}
                  </span>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-900">Total</span>
                <span className="text-xl font-extrabold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout */}
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 active:scale-[.98] text-white text-sm font-bold py-3.5 rounded-xl transition-all duration-150">
                <Lock size={13} /> Checkout
              </button>

              {/* Trust signals */}
              <p className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                <ShieldCheck size={12} /> Secure &amp; encrypted checkout
              </p>
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                {["Visa", "Mastercard", "UPI", "PayPal"].map((p) => (
                  <span
                    key={p}
                    className="text-[10px] text-gray-400 border border-gray-200 rounded px-2 py-0.5"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
