import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Soup,
  UtensilsCrossed,
  ChefHat,
  Search,
  ShoppingBag,
  Plus,
  Minus,
  MapPin,
  Clock,
  Flame,
  CheckCircle2,
  ArrowRight,
  X,
  Truck,
  Sparkles,
  Phone,
  ShieldCheck,
  Star,
  Tag,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/use-language";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export interface MenuItem {
  id: string;
  name: string;
  dhabaName: string;
  highway: string;
  category: "thali" | "tandoor" | "curry" | "rice" | "snacks" | "beverage";
  price: number;
  rating: number;
  prepTime: string;
  isVeg: boolean;
  spiceLevel?: 1 | 2 | 3;
  description: string;
  image: string;
  bestseller?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "item_1",
    name: "Sher-e-Punjab Special Thali",
    dhabaName: "Sher-e-Punjab Dhaba",
    highway: "NH-48 (Lonavala Exit)",
    category: "thali",
    price: 220,
    rating: 4.9,
    prepTime: "15 min",
    isVeg: true,
    spiceLevel: 2,
    bestseller: true,
    description: "Paneer Butter Masala, Dal Makhani, Jeera Rice, 2 Butter Naan, Gulab Jamun, Salad & Raita.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_2",
    name: "Tandoori Butter Chicken + Naan",
    dhabaName: "Highway King Dhaba",
    highway: "NH-44 (Kurnool Highway)",
    category: "curry",
    price: 340,
    rating: 4.8,
    prepTime: "20 min",
    isVeg: false,
    spiceLevel: 3,
    bestseller: true,
    description: "Charcoal smoked succulent chicken in rich tomato butter gravy + 2 Garlic Butter Naans.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_3",
    name: "Amritsari Kulcha & Chole Combo",
    dhabaName: "Giani da Dhaba",
    highway: "NH-1 (Amritsar Highway)",
    category: "thali",
    price: 160,
    rating: 4.9,
    prepTime: "12 min",
    isVeg: true,
    spiceLevel: 2,
    bestseller: true,
    description: "2 Crispy clay-baked potato stuffed kulchas served with spicy Amritsari chole & fresh butter.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_4",
    name: "Desi Ghee Dal Tadka & Tandoori Roti",
    dhabaName: "Shree Ganesh Pure Veg",
    highway: "NH-48 (Khandala Ghat)",
    category: "curry",
    price: 140,
    rating: 4.7,
    prepTime: "10 min",
    isVeg: true,
    spiceLevel: 1,
    description: "Slow-cooked yellow lentils tempered with garlic, red chillies & 100% pure desi ghee.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_5",
    name: "Trucker's Power Paratha Breakfast",
    dhabaName: "Pahlwan Dhaba 24x7",
    highway: "NH-19 (Delhi-Agra)",
    category: "snacks",
    price: 120,
    rating: 4.9,
    prepTime: "10 min",
    isVeg: true,
    spiceLevel: 1,
    bestseller: true,
    description: "2 Jumbo Aloo-Pyaz Parathas with homemade white butter, fresh curd & hot Cutting Chai.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_6",
    name: "Highway Chicken Curry & Basmati Rice",
    dhabaName: "Singh Saab Truck Stop",
    highway: "NH-44 (Nagpur Pass)",
    category: "curry",
    price: 260,
    rating: 4.8,
    prepTime: "18 min",
    isVeg: false,
    spiceLevel: 3,
    description: "Authentic wood-fire cooked Dhaba style spicy chicken curry with aromatic basmati rice.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_7",
    name: "Paneer Butter Masala & Missi Roti",
    dhabaName: "Shree Ganesh Pure Veg",
    highway: "NH-48 (Khandala Ghat)",
    category: "curry",
    price: 210,
    rating: 4.6,
    prepTime: "15 min",
    isVeg: true,
    spiceLevel: 2,
    description: "Cottage cheese cubes tossed in creamy cashew gravy + 2 spiced gram flour Missi Rotis.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_8",
    name: "Matka Malai Lassi (Chilled)",
    dhabaName: "Giani da Dhaba",
    highway: "NH-1 (Amritsar Highway)",
    category: "beverage",
    price: 70,
    rating: 5.0,
    prepTime: "5 min",
    isVeg: true,
    description: "Thick, creamy yogurt lassi served in traditional clay matka topped with saffron & dry fruits.",
    image: "https://images.unsplash.com/photo-1571006682860-0a22d2f7dd06?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_9",
    name: "Adrak Elaichi Chai Flask (4 Cups)",
    dhabaName: "Sher-e-Punjab Dhaba",
    highway: "NH-48 (Lonavala Exit)",
    category: "beverage",
    price: 80,
    rating: 4.9,
    prepTime: "5 min",
    isVeg: true,
    bestseller: true,
    description: "Freshly brewed hot ginger cardamom tea in a thermal flask for long night drives.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_10",
    name: "Spicy Highway Egg Curry (3 Eggs)",
    dhabaName: "Pahlwan Dhaba 24x7",
    highway: "NH-19 (Delhi-Agra)",
    category: "curry",
    price: 160,
    rating: 4.7,
    prepTime: "12 min",
    isVeg: false,
    spiceLevel: 2,
    description: "Hard boiled roasted eggs in rich onion-tomato highway gravy + 4 Tandoori Rotis.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_11",
    name: "Hyderabadi Dum Biryani + Mirchi Salan",
    dhabaName: "Highway King Dhaba",
    highway: "NH-44 (Kurnool Highway)",
    category: "rice",
    price: 280,
    rating: 4.9,
    prepTime: "15 min",
    isVeg: false,
    spiceLevel: 3,
    description: "Layered long grain basmati rice cooked on dum with marinated chicken & aromatic spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "item_12",
    name: "Hot Gulab Jamun (2 Pcs) with Rabri",
    dhabaName: "Sher-e-Punjab Dhaba",
    highway: "NH-48 (Lonavala Exit)",
    category: "beverage",
    price: 90,
    rating: 4.9,
    prepTime: "5 min",
    isVeg: true,
    description: "Hot khoya gulab jamun drizzled with rich rabri and crushed pistachios.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600"
  }
];

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export function FoodOrderPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedHighway, setSelectedHighway] = useState<string>("all");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  // Checkout Form State
  const [deliveryMethod, setDeliveryMethod] = useState<"cabin" | "pickup" | "dinein">("cabin");
  const [deliveryPoint, setDeliveryPoint] = useState("NH-48 Mile Marker 142 (Lonavala Rest Plaza - Parking Bay 4)");
  const [contactNumber, setContactNumber] = useState("+91 98765 43210");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  // Cart operations
  const updateQuantity = (item: MenuItem, delta: number) => {
    setCart((prev) => {
      const existing = prev[item.id];
      const currentQty = existing ? existing.quantity : 0;
      const newQty = currentQty + delta;
      
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      
      return {
        ...prev,
        [item.id]: { item, quantity: newQty }
      };
    });
  };

  const totalCartItems = useMemo(() => {
    return Object.values(cart).reduce((sum, ci) => sum + ci.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return Object.values(cart).reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  }, [cart]);

  const discount = couponApplied ? Math.min(50, subtotal * 0.2) : 0;
  const packagingFee = subtotal > 0 ? 15 : 0;
  const grandTotal = Math.max(0, subtotal - discount + packagingFee);

  // Filtering
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
      // Highway check
      if (selectedHighway !== "all" && !item.highway.includes(selectedHighway)) return false;
      // Dietary check
      if (dietaryFilter === "veg" && !item.isVeg) return false;
      if (dietaryFilter === "non-veg" && item.isVeg) return false;
      // Search check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDhaba = item.dhabaName.toLowerCase().includes(q);
        const matchesHighway = item.highway.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesDhaba && !matchesHighway && !matchesDesc) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedHighway, dietaryFilter]);

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "HIGHWAY50" || couponCode.toUpperCase() === "FIRST50") {
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try 'HIGHWAY50' for ₹50 off!");
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setOrderSuccess(true);
  };

  return (
    <div className="relative overflow-hidden bg-[#140c04] light:bg-slate-50 text-orange-50 light:text-slate-900 min-h-screen">
      {/* Background steam & warm glowing ambient light */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1206] via-[#140c04] to-[#0a0602] light:from-slate-100 light:via-slate-50 light:to-slate-200" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[70vw] -translate-x-1/2 rounded-full bg-orange/20 blur-[150px]" />
        <div className="absolute right-10 top-1/3 h-80 w-80 rounded-full bg-orange-glow/15 blur-[140px]" />
        
        {/* Steam rising particles */}
        {[15, 40, 75, 90].map((x, i) => (
          <motion.div
            key={x}
            className="absolute bottom-0 h-48 w-28 rounded-full bg-orange-glow/10 blur-3xl"
            style={{ left: `${x}%` }}
            animate={{ y: [0, -80, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Hero Header */}
      <section className="relative z-10 px-4 pb-12 pt-36 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 px-4 py-1.5 text-sm font-medium text-orange ring-1 ring-orange/40">
                <Soup className="h-4 w-4" /> {language === "hi" ? "हाईवे एक्सप्रेस फ़ूड आर्डर" : "Highway Dhaba Express Food Ordering"}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.1] md:text-6xl text-orange-50 light:text-slate-900">
                {language === "hi" ? "हाईवे पर पाएं गरम और ताज़ा ढाबा खाना" : "Hot & Fresh Dhaba Food Delivered on the Highway"}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-orange-100/75 light:text-slate-600">
                {language === "hi" 
                  ? "असली पंजाबी और प्रांतीय ढाबा भोजन का पहले से ऑर्डर करें। अगले हाईवे स्टॉप पर उठाएं या सीधे अपने ट्रक केबिन में डिलीवरी पाएं।"
                  : "Pre-order authentic Punjabi thalis, tandoori rotis, and regional delicacies from verified highway dhabas. Pick up at your next stop or get direct truck-cabin delivery."}
              </p>
            </Reveal>


          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 max-w-4xl">
            <Reveal delay={0.25}>
              <div className="glass-strong rounded-2xl p-3 border border-orange/20 light:border-slate-200 shadow-2xl flex flex-col md:flex-row gap-3 items-center light:bg-white/90">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-400 light:text-orange-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === "hi" ? "खाना, ढाबा नाम या हाईवे खोजें (जैसे Paneer, NH-48)..." : "Search dishes, dhaba names, or highway (e.g. Thali, NH-48, Biryani)..."}
                    className="w-full rounded-xl bg-black/40 light:bg-slate-100 pl-11 pr-4 py-3 text-sm text-orange-50 light:text-slate-900 placeholder-orange-200/40 light:placeholder-slate-400 border border-white/10 light:border-slate-200 focus:outline-none focus:border-orange/60"
                  />
                </div>

                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                  {/* Highway Dropdown */}
                  <select
                    value={selectedHighway}
                    onChange={(e) => setSelectedHighway(e.target.value)}
                    className="rounded-xl bg-black/40 light:bg-slate-100 px-3 py-3 text-xs md:text-sm text-orange-100 light:text-slate-900 border border-white/10 light:border-slate-200 focus:outline-none focus:border-orange/60 cursor-pointer"
                  >
                    <option value="all" className="bg-[#1c1206] light:bg-white light:text-slate-900">All Highways</option>
                    <option value="NH-48" className="bg-[#1c1206] light:bg-white light:text-slate-900">NH-48 (Delhi-Mumbai)</option>
                    <option value="NH-44" className="bg-[#1c1206] light:bg-white light:text-slate-900">NH-44 (Kanyakumari)</option>
                    <option value="NH-1" className="bg-[#1c1206] light:bg-white light:text-slate-900">NH-1 (Amritsar)</option>
                    <option value="NH-19" className="bg-[#1c1206] light:bg-white light:text-slate-900">NH-19 (Agra-Kolkata)</option>
                  </select>

                  {/* Dietary Toggle */}
                  <div className="flex rounded-xl bg-black/40 light:bg-slate-100 p-1 border border-white/10 light:border-slate-200 shrink-0">
                    <button
                      onClick={() => setDietaryFilter("all")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        dietaryFilter === "all" ? "bg-orange text-white" : "text-orange-200/70 light:text-slate-600 hover:text-white light:hover:text-slate-900"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setDietaryFilter("veg")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                        dietaryFilter === "veg" ? "bg-emerald-600 text-white" : "text-orange-200/70 light:text-slate-600 hover:text-white light:hover:text-slate-900"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Veg
                    </button>
                    <button
                      onClick={() => setDietaryFilter("non-veg")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                        dietaryFilter === "non-veg" ? "bg-red-600 text-white" : "text-orange-200/70 light:text-slate-600 hover:text-white light:hover:text-slate-900"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-red-400"></span> Non-Veg
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category Pills & Menu Content */}
      <section className="relative z-10 px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {[
              { id: "all", label: "All Items 🍲" },
              { id: "thali", label: "Thalis & Combos 🍱" },
              { id: "curry", label: "Sabzi & Curry 🍛" },
              { id: "tandoor", label: "Tandoori Rotis 🫓" },
              { id: "rice", label: "Biryani & Rice 🍚" },
              { id: "snacks", label: "Snacks & Parathas 🫓" },
              { id: "beverage", label: "Lassi & Chai ☕" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-orange to-orange-glow text-[#140c04] shadow-lg shadow-orange/20 scale-105 font-bold"
                    : "bg-white/5 light:bg-white border border-white/10 light:border-slate-200 text-orange-100/80 light:text-slate-700 hover:bg-white/10 light:hover:bg-slate-100 hover:text-white light:hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>


          {/* Results Counter */}
          <div className="mt-8 flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-orange-50 light:text-slate-900 flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-orange" />
              {language === "hi" ? "उपलब्ध व्यंजन" : "Available Highway Menu Items"}
              <span className="ml-2 rounded-full bg-orange/20 light:bg-orange/10 px-2.5 py-0.5 text-xs text-orange border border-orange/30 font-mono">
                {filteredItems.length}
              </span>
            </h3>

            {totalCartItems > 0 && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-glow px-4 py-2 text-xs font-bold text-[#140c04] shadow-lg hover:scale-105 transition-all"
              >
                <ShoppingBag className="h-4 w-4" />
                View Cart ({totalCartItems}) — ₹{subtotal}
              </button>
            )}
          </div>

          {/* Items Grid */}
          {filteredItems.length === 0 ? (
            <div className="mt-12 text-center py-16 rounded-2xl border border-dashed border-white/10 light:border-slate-300 bg-white/5 light:bg-white">
              <Soup className="mx-auto h-12 w-12 text-orange-200/30 light:text-slate-400" />
              <h4 className="mt-4 text-lg font-bold text-orange-50 light:text-slate-900">No items found matching your filters</h4>
              <p className="mt-1 text-sm text-orange-100/60 light:text-slate-600">Try searching for something else or clearing category filters.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedHighway("all");
                  setDietaryFilter("all");
                }}
                className="mt-4 rounded-full bg-orange/20 px-5 py-2 text-xs font-semibold text-orange hover:bg-orange/30 border border-orange/40"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => {
                const cartQty = cart[item.id]?.quantity || 0;
                return (
                  <div
                    key={item.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-orange/15 light:border-slate-200 bg-[#1a0f06] light:bg-white backdrop-blur transition-all duration-300 hover:border-orange/40 hover:shadow-xl hover:shadow-orange/10"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative h-48 w-full overflow-hidden bg-black/40">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f06] light:from-white via-transparent to-black/40" />

                        {/* Veg / Non-Veg Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 backdrop-blur border border-white/10">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              item.isVeg ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                            }`}
                          />
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                            {item.isVeg ? "Veg" : "Non-Veg"}
                          </span>
                        </div>

                        {/* Bestseller Badge */}
                        {item.bestseller && (
                          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-1 text-[10px] font-extrabold text-[#140c04] shadow-md">
                            <Sparkles className="h-3 w-3" /> BESTSELLER
                          </div>
                        )}

                        {/* Prep time badge */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/80 px-2 py-0.5 text-[11px] font-medium text-orange-200 backdrop-blur">
                          <Clock className="h-3 w-3 text-orange" /> {item.prepTime}
                        </div>

                        {/* Rating */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-black/80 px-2 py-0.5 text-[11px] font-bold text-amber-400 backdrop-blur">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {item.rating}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-orange-400 light:text-orange-600">
                          <MapPin className="h-3 w-3 shrink-0 text-orange" />
                          <span className="truncate">{item.dhabaName}</span>
                        </div>
                        <p className="text-[10px] text-orange-200/50 light:text-slate-500 truncate">{item.highway}</p>

                        <h4 className="mt-2 text-base font-bold text-orange-50 light:text-slate-900 group-hover:text-orange-400 transition-colors line-clamp-1">
                          {item.name}
                        </h4>

                        <p className="mt-1 text-xs text-orange-100/60 light:text-slate-600 line-clamp-2 min-h-[32px]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-white/5 light:border-slate-100 mt-2">
                      <div>
                        <span className="text-xs text-orange-200/50 light:text-slate-500 block">Price</span>
                        <span className="text-lg font-black text-orange-50 light:text-slate-900 font-mono">₹{item.price}</span>
                      </div>

                      {cartQty === 0 ? (
                        <button
                          onClick={() => updateQuantity(item, 1)}
                          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange to-orange-glow px-4 py-2 text-xs font-bold text-[#140c04] transition-all hover:scale-105 active:scale-95 shadow-md shadow-orange/10"
                        >
                          <Plus className="h-3.5 w-3.5" /> Add to Order
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 rounded-full bg-orange/20 light:bg-orange/10 p-1 border border-orange/40 light:border-orange/30">
                          <button
                            onClick={() => updateQuantity(item, -1)}
                            className="grid h-7 w-7 place-items-center rounded-full bg-orange text-[#140c04] hover:bg-orange-glow font-bold text-sm"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-5 text-center font-bold text-sm text-orange-50 light:text-slate-900 font-mono">{cartQty}</span>
                          <button
                            onClick={() => updateQuantity(item, 1)}
                            className="grid h-7 w-7 place-items-center rounded-full bg-orange text-[#140c04] hover:bg-orange-glow font-bold text-sm"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Floating Bottom Cart Bar for Mobile & Desktop */}
      <AnimatePresence>
        {totalCartItems > 0 && !isCartOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 inset-x-4 z-40 mx-auto max-w-xl"
          >
            <div className="glass-strong rounded-2xl p-4 border border-orange/40 light:border-slate-300 shadow-2xl shadow-orange/20 flex items-center justify-between gap-4 light:bg-white/95">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-orange to-orange-glow text-[#140c04] font-bold">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-orange-200/80 light:text-slate-600">
                    {totalCartItems} {totalCartItems === 1 ? "Item" : "Items"} in your tray
                  </div>
                  <div className="text-lg font-black text-orange-50 light:text-slate-900 font-mono">₹{grandTotal}</div>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-glow px-6 py-3 text-sm font-extrabold text-[#140c04] transition-transform hover:scale-105 shadow-lg"
              >
                Checkout Now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer / Slide-Over Modal */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Slide Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 max-w-full flex pl-10 w-full md:w-[480px]"
            >
              <div className="w-full bg-[#160d05] light:bg-white border-l border-orange/30 light:border-slate-200 p-6 flex flex-col justify-between overflow-y-auto text-orange-50 light:text-slate-900">
                <div>
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 light:border-slate-200">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5 text-orange" />
                      <h3 className="font-display text-xl font-bold text-orange-50 light:text-slate-900">Your Highway Food Order</h3>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="rounded-full p-1.5 text-orange-200/60 light:text-slate-500 hover:bg-white/10 light:hover:bg-slate-100 hover:text-white light:hover:text-slate-900"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Cart Items List */}
                  <div className="mt-6 space-y-4 max-h-[40vh] overflow-y-auto pr-1 scrollbar-thin">
                    {Object.values(cart).length === 0 ? (
                      <p className="text-center text-sm text-orange-200/50 light:text-slate-500 py-8">Your cart is empty.</p>
                    ) : (
                      Object.values(cart).map(({ item, quantity }) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-3 rounded-xl bg-white/5 light:bg-slate-50 p-3 border border-white/5 light:border-slate-200"
                        >
                          <img src={item.image} alt={item.name} className="h-12 w-12 rounded-lg object-cover" />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-bold text-orange-50 light:text-slate-900 truncate">{item.name}</h5>
                            <p className="text-[10px] text-orange-200/60 light:text-slate-500 truncate">{item.dhabaName}</p>
                            <div className="text-xs font-mono font-bold text-orange-300 light:text-orange-600 mt-0.5">
                              ₹{item.price} × {quantity} = ₹{item.price * quantity}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 rounded-lg bg-black/40 light:bg-slate-200 p-1 border border-white/10 light:border-slate-300">
                            <button
                              onClick={() => updateQuantity(item, -1)}
                              className="h-6 w-6 grid place-items-center rounded bg-orange/20 text-orange hover:bg-orange/40 text-xs font-bold"
                            >
                              -
                            </button>
                            <span className="w-4 text-center text-xs font-bold">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(item, 1)}
                              className="h-6 w-6 grid place-items-center rounded bg-orange/20 text-orange hover:bg-orange/40 text-xs font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Delivery Mode Selection */}
                  <div className="mt-6">
                    <label className="text-xs font-bold text-orange-200 light:text-slate-700 uppercase tracking-wider block mb-2">
                      Select Delivery / Pickup Mode
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <button
                        onClick={() => setDeliveryMethod("cabin")}
                        className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                          deliveryMethod === "cabin"
                            ? "border-orange bg-orange/20 text-orange-50 light:text-slate-900 font-bold"
                            : "border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50 text-orange-200/60 light:text-slate-600 hover:bg-white/10 light:hover:bg-slate-100"
                        }`}
                      >
                        <Truck className="h-4 w-4 mx-auto mb-1 text-orange" />
                        Truck Cabin
                      </button>
                      <button
                        onClick={() => setDeliveryMethod("pickup")}
                        className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                          deliveryMethod === "pickup"
                            ? "border-orange bg-orange/20 text-orange-50 light:text-slate-900 font-bold"
                            : "border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50 text-orange-200/60 light:text-slate-600 hover:bg-white/10 light:hover:bg-slate-100"
                        }`}
                      >
                        <MapPin className="h-4 w-4 mx-auto mb-1 text-orange" />
                        Dhaba Pickup
                      </button>
                      <button
                        onClick={() => setDeliveryMethod("dinein")}
                        className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                          deliveryMethod === "dinein"
                            ? "border-orange bg-orange/20 text-orange-50 light:text-slate-900 font-bold"
                            : "border-white/10 light:border-slate-200 bg-white/5 light:bg-slate-50 text-orange-200/60 light:text-slate-600 hover:bg-white/10 light:hover:bg-slate-100"
                        }`}
                      >
                        <UtensilsCrossed className="h-4 w-4 mx-auto mb-1 text-orange" />
                        Table Reserve
                      </button>
                    </div>
                  </div>

                  {/* Delivery Location Input */}
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-orange-200/80 light:text-slate-600 block mb-1">
                        Highway Stop / Bay Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange" />
                        <input
                          type="text"
                          value={deliveryPoint}
                          onChange={(e) => setDeliveryPoint(e.target.value)}
                          className="w-full rounded-xl bg-black/50 light:bg-slate-100 pl-9 pr-3 py-2 text-xs text-orange-50 light:text-slate-900 border border-white/10 light:border-slate-300 focus:outline-none focus:border-orange/60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-orange-200/80 light:text-slate-600 block mb-1">
                        Driver Contact Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange" />
                        <input
                          type="text"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                          className="w-full rounded-xl bg-black/50 light:bg-slate-100 pl-9 pr-3 py-2 text-xs text-orange-50 light:text-slate-900 border border-white/10 light:border-slate-300 focus:outline-none focus:border-orange/60"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Coupon section */}
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. HIGHWAY50)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 rounded-xl bg-black/50 light:bg-slate-100 px-3 py-2 text-xs text-orange-50 light:text-slate-900 border border-white/10 light:border-slate-300 focus:outline-none uppercase"
                    />
                    <button
                      onClick={applyCoupon}
                      className="rounded-xl bg-white/10 light:bg-slate-200 px-3 py-2 text-xs font-bold text-orange light:text-orange-600 hover:bg-white/20 border border-white/10 light:border-slate-300"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Bill Summary Footer */}
                <div className="pt-4 border-t border-white/10 light:border-slate-200 mt-6">
                  <div className="space-y-1.5 text-xs text-orange-200/70 light:text-slate-600">
                    <div className="flex justify-between">
                      <span>Food Items Total</span>
                      <span className="font-mono">₹{subtotal}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-emerald-400 light:text-emerald-600 font-semibold">
                        <span>Discount (HIGHWAY50)</span>
                        <span className="font-mono">-₹{discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Express Thermal Packaging</span>
                      <span className="font-mono">₹{packagingFee}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-orange-50 light:text-slate-900 pt-2 border-t border-white/10 light:border-slate-200">
                      <span>Grand Total</span>
                      <span className="font-mono text-orange text-lg">₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      if (totalCartItems === 0) return;
                      handlePlaceOrder(e);
                    }}
                    disabled={totalCartItems === 0}
                    className="mt-4 w-full rounded-full bg-gradient-to-r from-orange to-orange-glow py-3 text-center text-sm font-extrabold text-[#140c04] shadow-lg hover:scale-[1.02] active:scale-98 transition-transform disabled:opacity-50"
                  >
                    Confirm & Pay ₹{grandTotal}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Order Confirmation Modal */}
      <Dialog open={orderSuccess} onOpenChange={setOrderSuccess}>
        <DialogContent className="sm:max-w-[480px] bg-[#160d05] light:bg-white border-orange/40 light:border-slate-200 text-orange-50 light:text-slate-900 rounded-3xl p-6">
          <DialogTitle className="sr-only">Order Placed Successfully</DialogTitle>
          
          <div className="text-center py-4">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-orange/20 light:bg-orange/10 text-orange border border-orange/40 shadow-xl shadow-orange/20">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-orange-50 light:text-slate-900">Order Confirmed! 🎉</h3>
            <p className="mt-1 text-xs text-orange-200/70 light:text-slate-600">
              Order ID: <span className="font-mono text-amber-300 light:text-orange-600 font-bold">#HW24-FOOD-8924</span>
            </p>

            {/* Tracking Status Stepper */}
            <div className="mt-6 rounded-2xl bg-black/40 light:bg-slate-50 p-4 border border-white/10 light:border-slate-200 text-left space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <h6 className="text-xs font-bold text-orange-50 light:text-slate-900">Dhaba Kitchen Preparing</h6>
                  <p className="text-[10px] text-orange-200/60 light:text-slate-500">Estimated prep time: 12 mins</p>
                </div>
              </div>

              <div className="pl-6 text-xs text-orange-100/80 light:text-slate-700 space-y-1 font-mono bg-white/5 light:bg-white p-3 rounded-xl border border-white/5 light:border-slate-200">
                <div><strong>Delivery To:</strong> {deliveryPoint}</div>
                <div><strong>Contact:</strong> {contactNumber}</div>
                <div><strong>Total Paid:</strong> ₹{grandTotal} (Cash/UPI on Delivery)</div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 justify-center">
              <button
                onClick={() => setOrderSuccess(false)}
                className="rounded-full bg-orange px-6 py-2.5 text-xs font-extrabold text-[#140c04] hover:bg-orange-glow transition-transform hover:scale-105"
              >
                Track Live Order Status
              </button>
              <Link
                to="/map"
                className="rounded-full bg-white/10 light:bg-slate-200 px-5 py-2.5 text-xs font-bold text-orange-50 light:text-slate-900 hover:bg-white/20 light:hover:bg-slate-300 border border-white/10 light:border-slate-300"
              >
                View Nearby Dhabas Map
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
