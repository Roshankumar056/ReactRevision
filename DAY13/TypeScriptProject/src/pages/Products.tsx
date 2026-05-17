import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/productSlice";
import type { AppDispatch } from "../store";
import type { RootState } from "../store";
import {
  Heart,
  Star,
  SlidersHorizontal,
  ChevronDown,
  Search,
  X,
  LayoutGrid,
  LayoutList,
  ShoppingCart,
  Flame,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Slices/cartSlice";

// ── Types ──────────────────────────────────────────────────────────────────
type SortKey = "default" | "price-asc" | "price-desc" | "rating" | "title";
type ViewMode = "grid" | "list";

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: "Featured", value: "default" },
  { label: "Price: Low → High", value: "price-asc" },
  { label: "Price: High → Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
  { label: "Name A–Z", value: "title" },
];

const CATEGORIES = [
  "All",
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
];

// ── Star Rating ────────────────────────────────────────────────────────────
const StarRating = ({ rating, count }: { rating: number; count?: number }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={
            s <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
    <span className="text-xs text-gray-400 font-medium">
      {rating.toFixed(1)}
      {count !== undefined && ` (${count})`}
    </span>
  </div>
);

// ── Skeleton Card ──────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
    <div className="h-52 bg-gray-100" />
    <div className="p-4 space-y-3">
      <div className="h-3 bg-gray-100 rounded-full w-1/3" />
      <div className="h-4 bg-gray-100 rounded-full w-3/4" />
      <div className="h-3 bg-gray-100 rounded-full w-1/2" />
      <div className="h-5 bg-gray-100 rounded-full w-1/4" />
    </div>
  </div>
);

// ── Product Grid Card ──────────────────────────────────────────────────────
const ProductGridCard = ({
  product,
  onWish,
  wished,
}: {
  product: any;
  onWish: (id: number) => void;
  wished: boolean;
}) => {
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(0);
const navigate=useNavigate()
const dispatch=useDispatch()
const [toast, setToast] = useState(false);

 const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };
const handelAddToCart = () => {
  if (product) {
    showToast()
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
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="relative h-52 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount badge */}
        {product.discountPercentage >= 10 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Tag size={9} /> {Math.round(product.discountPercentage)}% OFF
          </span>
        )}

        {/* Stock badge */}
        {product.stock < 20 && (
          <span className="absolute top-3 right-10 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Flame size={9} /> Only {product.stock} left
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWish(product.id);
          }}
          className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={14}
            className={wished ? "fill-red-500 text-red-500" : "text-gray-400"}
          />
        </button>

        {/* Quick add — visible on hover */}
        <button onClick={handelAddToCart} className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 bg-gray-900 hover:bg-gray-700 text-white text-xs font-semibold px-5 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap">
          <ShoppingCart size={13} /> Add to Cart
        </button>

      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <p className="text-[10px] font-semibold text-indigo-500 uppercase tracking-widest">
          {product.category}
        </p>
        <p className="text-sm font-bold text-gray-900 truncate leading-snug">
          {product.title}
        </p>
        <StarRating rating={product.rating} />
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-gray-900">
              ${discountedPrice}
            </span>

            <span className="text-xs text-gray-400 line-through">
              ${product.price}
            </span>
          </div>

          <button onClick={()=>navigate(`/products/${product.id}`)} className="px-2 py-2 text-xs font-semibold rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all duration-200 active:scale-95 shadow-sm">
            View Details
          </button>
        </div>
          {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 z-50 animate-bounce">
          <ShoppingCart size={15} />  added to cart!
        </div>
      )}
      </div>
    </div>
  );
};

// ── Product List Card ──────────────────────────────────────────────────────
const ProductListCard = ({
  product,
  onWish,
  wished,
}: {
  product: any;
  onWish: (id: number) => void;
  wished: boolean;
}) => {
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(0);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-200 flex overflow-hidden cursor-pointer">
      <div className="w-40 flex-shrink-0 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-28 w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-1 items-center p-5 gap-4">
        <div className="flex-1 space-y-2 min-w-0">
          <p className="text-[10px] font-semibold text-indigo-500 uppercase tracking-widest">
            {product.category}
          </p>
          <p className="text-sm font-bold text-gray-900 truncate">
            {product.title}
          </p>
          <p className="text-xs text-gray-500 line-clamp-2">
            {product.description}
          </p>
          <StarRating rating={product.rating} />
        </div>
        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-lg font-extrabold text-gray-900">
              ${discountedPrice}
            </p>
            <p className="text-xs text-gray-400 line-through">
              ${product.price}
            </p>
          </div>
          {product.stock < 20 && (
            <span className="text-[10px] font-bold text-orange-500 flex items-center gap-1">
              <Flame size={10} /> Only {product.stock} left
            </span>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onWish(product.id);
              }}
              className="w-8 h-8 border border-gray-200 rounded-xl flex items-center justify-center hover:border-red-300 transition-colors"
            >
              <Heart
                size={14}
                className={
                  wished ? "fill-red-500 text-red-500" : "text-gray-400"
                }
              />
            </button>
            <button className="bg-gray-900 hover:bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
              <ShoppingCart size={13} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Products Page ─────────────────────────────────────────────────────
const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products,
  );

  const [sortBy, setSortBy] = useState<SortKey>("default");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [wished, setWished] = useState<Set<number>>(new Set());
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const toggleWish = (id: number) =>
    setWished((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  // Filter + sort
  const processed = [...products]
    .filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (search === "" ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  const activeSortLabel =
    SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Featured";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Page Header ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
            Shopiq Store
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                All Products
              </h1>
              {status === "succeeded" && (
                <p className="text-sm text-gray-500 mt-1">
                  {processed.length} of {products.length} products
                </p>
              )}
            </div>

            {/* Search */}
            <div className="relative max-w-xs w-full">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-8 py-2.5 bg-gray-100 border border-transparent focus:bg-white focus:border-gray-300 rounded-xl text-sm outline-none transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X size={14} className="text-gray-400 hover:text-gray-700" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* ── Toolbar ── */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all capitalize ${
                  category === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-400 text-sm font-medium text-gray-700 px-4 py-2 rounded-xl transition-all"
              >
                <SlidersHorizontal size={14} />
                {activeSortLabel}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${showSort ? "rotate-180" : ""}`}
                />
              </button>
              {showSort && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-gray-100 shadow-xl z-30 overflow-hidden">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setShowSort(false);
                      }}
                      className={`w-full text-left text-sm px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                        sortBy === opt.value
                          ? "font-semibold text-gray-900 bg-gray-50"
                          : "text-gray-600"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View toggle */}
            <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-colors ${viewMode === "grid" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700"}`}
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 transition-colors ${viewMode === "list" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700"}`}
              >
                <LayoutList size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* ── States ── */}
        {status === "loading" && (
          <div
            className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {status === "failed" && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
              <X size={28} className="text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Failed to load products
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {error ?? "Something went wrong. Please try again."}
            </p>
            <button
              onClick={() => dispatch(fetchProducts())}
              className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {status === "succeeded" && processed.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              No products found
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {status === "succeeded" &&
          processed.length > 0 &&
          (viewMode === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {processed.map((product) => (
                <ProductGridCard
                  key={product.id}
                  product={product}
                  onWish={toggleWish}
                  wished={wished.has(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {processed.map((product) => (
                <ProductListCard
                  key={product.id}
                  product={product}
                  onWish={toggleWish}
                  wished={wished.has(product.id)}
                />
              ))}
            </div>
          ))}
          
      </div>
    
    </div>
  );
};

export default Products;
