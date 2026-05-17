import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductsDetail } from "../Slices/productSlice";
import type { AppDispatch, RootState } from "../store";
import {
  ShoppingCart,
  Heart,
  Zap,
  Truck,
  RotateCcw,
  ShieldCheck,
  Package,
  Star,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { addToCart } from "../Slices/cartSlice";

// ── Helpers ────────────────────────────────────────────────────────────────
const StarRow = ({ rating, size = 14 }: { rating: number; size?: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={size}
        className={
          s <= Math.round(rating)
            ? "fill-amber-400 text-amber-400"
            : "fill-gray-200 text-gray-200"
        }
      />
    ))}
  </div>
);

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

// ── Loading Skeleton ───────────────────────────────────────────────────────
const Skeleton = () => (
  <div className="min-h-screen bg-[#faf8f5] animate-pulse">
    <div className="h-10 bg-white border-b border-gray-100" />
    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-0 bg-white mt-0">
      <div className="h-[560px] bg-gray-100 m-8 rounded-2xl" />
      <div className="p-10 space-y-5">
        <div className="h-3 bg-gray-100 rounded-full w-24" />
        <div className="h-8 bg-gray-100 rounded-xl w-3/4" />
        <div className="h-4 bg-gray-100 rounded-full w-1/2" />
        <div className="h-10 bg-gray-100 rounded-xl w-1/3" />
        <div className="h-11 bg-gray-100 rounded-xl" />
        <div className="h-11 bg-gray-100 rounded-xl" />
        <div className="grid grid-cols-2 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-14 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ── Error State ────────────────────────────────────────────────────────────
const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="text-5xl">⚠️</div>
      <h2 className="text-xl font-bold text-gray-800">Failed to load product</h2>
      <p className="text-sm text-gray-500">Something went wrong. Please try again.</p>
      <button
        onClick={onRetry}
        className="bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
      >
        Retry
      </button>
    </div>
  </div>
);

// ── Review Card ────────────────────────────────────────────────────────────
const ReviewCard = ({ review }: { review: any }) => (
  <div className="bg-[#faf8f5] rounded-2xl p-5">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c8956a] to-[#e8c4a0] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        {initials(review.reviewerName)}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-900">{review.reviewerName}</p>
        <p className="text-[10px] text-gray-400">
          {new Date(review.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
    <StarRow rating={review.rating} size={12} />
    <p className="text-xs text-gray-500 leading-relaxed mt-2">{review.comment}</p>
  </div>
);

// ── Rating Bar ─────────────────────────────────────────────────────────────
const RatingBar = ({
  label,
  count,
  total,
  danger,
}: {
  label: string;
  count: number;
  total: number;
  danger?: boolean;
}) => (
  <div className="flex items-center gap-2">
    <span className="text-[11px] font-semibold text-gray-400 w-7">{label}</span>
    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-700 ${
          danger ? "bg-red-400" : "bg-[#c8956a]"
        }`}
        style={{ width: total ? `${(count / total) * 100}%` : "0%" }}
      />
    </div>
    <span className="text-[10px] text-gray-400 w-4">{count}</span>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────
const ProductsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(
    (state: RootState) => state.products.individualProduct
  );
  const status = useSelector((state: RootState) => state.products.status);

  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [toast, setToast] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    if (id) dispatch(fetchProductsDetail(id));
  }, [id]);

  // Set min qty to minimumOrderQuantity
  useEffect(() => {
    if (product?.minimumOrderQuantity) setQty(product.minimumOrderQuantity);
  }, [product]);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

const handelAddToCart = () => {
  if (product) {
    showToast();

    const productDetails = {
      id: product.id,
      title: product.title,
      price: product.price,
      image:product.thumbnail,
      qty: 1,
    };

    dispatch(addToCart(productDetails));
  }
};
  if (status === "loading") return <Skeleton />;
  if (status === "failed" || !product)
    return <ErrorState onRetry={() => id && dispatch(fetchProductsDetail(id))} />;

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  const savings = (product.price - parseFloat(discountedPrice)).toFixed(2);

  // Rating distribution
  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: product.reviews?.filter((r: any) => r.rating === star).length ?? 0,
  }));

  const images = product.images?.length ? product.images : [product.thumbnail];

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-gray-400">
          <button onClick={()=>navigate(-1)} className="hover:text-gray-700 flex items-center gap-1">
            <ArrowLeft size={12} /> Back
          </button>
          <ChevronRight size={12} />
          <span className="capitalize text-gray-500">{product.category}</span>
          <ChevronRight size={12} />
          <span className="text-[#c8956a] font-semibold truncate max-w-[200px]">
            {product.title}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* ── Product Top Section ── */}
        <div className="bg-white grid grid-cols-1 md:grid-cols-2">

          {/* Gallery */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden bg-[#fdfcfb] aspect-square flex items-center justify-center mb-4 group">
              <img
                src={images[activeImg]}
                alt={product.title}
                className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.discountPercentage >= 5 && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {Math.round(product.discountPercentage)}% OFF
                  </span>
                )}
                <span
                  className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                    product.availabilityStatus === "In Stock"
                      ? "bg-emerald-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {product.availabilityStatus}
                </span>
              </div>
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 flex-wrap">
                {images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-14 h-14 rounded-xl border-2 overflow-hidden bg-[#faf8f5] flex items-center justify-center transition-all ${
                      activeImg === i
                        ? "border-[#c8956a]"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 flex flex-col gap-5">

            {/* Brand + Title */}
            <div>
              <p className="text-[11px] font-bold text-[#c8956a] uppercase tracking-widest mb-2">
                {product.brand ?? product.category}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                {product.title}
              </h1>
            </div>

            {/* Rating row */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100 flex-wrap">
              <StarRow rating={product.rating} size={16} />
              <span className="text-sm font-bold text-gray-800">
                {product.rating.toFixed(2)}
              </span>
              <span className="text-xs text-gray-400">
                ({product.reviews?.length ?? 0} reviews)
              </span>
              <span className="ml-auto text-[10px] text-gray-400 tracking-wider">
                SKU: {product.sku}
              </span>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-extrabold text-gray-900">
                  ${discountedPrice}
                </span>
                <span className="text-base text-gray-400 line-through">
                  ${product.price}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Save ${savings}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Inclusive of all taxes · Min. order: {product.minimumOrderQuantity} units
              </p>
            </div>

            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {product.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Qty + CTA */}
            <div className="flex items-center gap-2">
              {/* Qty picker */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(product.minimumOrderQuantity ?? 1, q - 1))}
                  className="w-10 h-11 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-bold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-11 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>
              {/* Add to cart */}
              <button
                onClick={handelAddToCart}
                
                className="flex-1 h-11 bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[.98]"
              >
                <ShoppingCart size={15} /> Add to Cart
              </button>
              {/* Wishlist */}
              <button
                onClick={() => setWished((w) => !w)}
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                  wished
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:border-[#c8956a] hover:bg-[#f7ede3]"
                }`}
              >
                <Heart
                  size={16}
                  className={wished ? "fill-red-500 text-red-500" : "text-gray-400"}
                />
              </button>
            </div>

            {/* Buy Now */}
            <button className="w-full h-11 bg-[#c8956a] hover:bg-[#b5804f] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[.98]">
              <Zap size={15} /> Buy Now
            </button>

            {/* Info pills */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Truck,       title: product.shippingInformation,  sub: "Free on orders above $49" },
                { icon: RotateCcw,   title: product.returnPolicy,          sub: "No questions asked"        },
                { icon: ShieldCheck, title: product.warrantyInformation,   sub: "Manufacturer warranty"     },
                { icon: Package,     title: `${product.stock} in Stock`,   sub: "Order before it sells out" },
              ].map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-2 bg-[#faf8f5] rounded-xl p-3"
                >
                  <Icon size={18} className="text-[#c8956a] flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 leading-tight">{title}</p>
                    <p className="text-[10px] text-gray-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Spec table */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Product Details
              </p>
              <table className="w-full text-xs">
                <tbody>
                  {[
                    ["Brand",      product.brand ?? "—"],
                    ["Category",   product.category],
                    ["Weight",     `${product.weight} g`],
                    ["Dimensions", product.dimensions
                      ? `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`
                      : "—"],
                    ["Barcode",    product.meta?.barcode ?? "—"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-100">
                      <td className="py-2 text-gray-400 font-semibold w-32">{label}</td>
                      <td className="py-2 font-semibold text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                Description
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* ── Reviews Section ── */}
        {product.reviews?.length > 0 && (
          <div className="bg-white mt-px px-8 md:px-12 py-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
              <button className="text-xs font-bold text-[#c8956a] bg-[#f7ede3] px-4 py-2 rounded-xl hover:bg-[#f0ddd0] transition-colors">
                Write a Review
              </button>
            </div>

            {/* Summary */}
            <div className="flex items-center gap-8 bg-[#faf8f5] rounded-2xl p-6 mb-8">
              <div className="text-center">
                <p className="text-5xl font-extrabold text-gray-900">
                  {product.rating.toFixed(1)}
                </p>
                <StarRow rating={product.rating} size={14} />
                <p className="text-xs text-gray-400 mt-1">
                  {product.reviews.length} reviews
                </p>
              </div>
              <div className="flex-1 space-y-1.5">
                {ratingCounts.map(({ star, count }) => (
                  <RatingBar
                    key={star}
                    label={`${star} ★`}
                    count={count}
                    total={product.reviews.length}
                    danger={star === 1}
                  />
                ))}
              </div>
            </div>

            {/* Review cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.reviews.map((review: any, i: number) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Toast ── */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 z-50 animate-bounce">
          <ShoppingCart size={15} /> {qty} unit{qty > 1 ? "s" : ""} added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductsDetail;