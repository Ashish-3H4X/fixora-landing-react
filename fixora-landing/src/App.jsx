import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  Facebook,
  Headphones,
  Instagram,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Tag,
  Twitter,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Plumber", icon: "🔧", text: "Leaks, pipes & installation" },
  { name: "Electrician", icon: "⚡", text: "Wiring, repair & installation" },
  { name: "Carpenter", icon: "🪚", text: "Furniture & wood work" },
  { name: "Painter", icon: "🎨", text: "Home & wall painting" },
  { name: "Mechanic", icon: "🔩", text: "Bike & car service" },
  { name: "AC Repair", icon: "❄️", text: "AC service & installation" },
];

const steps = [
  { n: "01", title: "Choose a Service", text: "Tell us what you need and select a service near you.", icon: Search },
  { n: "02", title: "Compare & Select", text: "Compare professionals, ratings, reviews and prices.", icon: Users },
  { n: "03", title: "Book & Relax", text: "Pick a convenient time and confirm your booking.", icon: CalendarCheck },
  { n: "04", title: "Get It Done", text: "Your trusted professional completes the service.", icon: CheckCircle2 },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Customer", text: "I found an electrician in minutes. The booking process was simple and the service was excellent.", rating: 5 },
  { name: "Priya Singh", role: "Customer", text: "Fixora saved me a lot of time. I could compare professionals before booking.", rating: 5 },
  { name: "Amit Verma", role: "Service Provider", text: "The platform helps me reach genuine customers around my area without wasting time.", rating: 5 },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 text-2xl font-black tracking-tight">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
        <Wrench size={21} />
      </span>
      <span className="text-white">Fix<span className="text-emerald-400">ora</span></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-emerald-400" href="#home">Home</a>
            <a className="transition hover:text-emerald-400" href="#services">Services</a>
            <a className="transition hover:text-emerald-400" href="#how-it-works">How It Works</a>
            <a className="transition hover:text-emerald-400" href="#business">For Businesses</a>
            <a className="transition hover:text-emerald-400" href="#contact">Contact</a>
          </nav>

          <a href="#download" className="hidden rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 md:block">
            Download App
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold text-white">
              {["Home", "Services", "How It Works", "For Businesses", "Contact"].map((item) => (
                <a key={item} href={`#${item === "Home" ? "home" : item === "Services" ? "services" : item === "How It Works" ? "how-it-works" : item === "For Businesses" ? "business" : "contact"}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative min-h-[760px] overflow-hidden bg-[#06152d] pt-28">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-2 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <BadgeCheck size={16} />
                Trusted professionals near you
              </div>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Find Trusted Local
                <span className="block">Services, Anytime,</span>
                <span className="text-emerald-400">Anywhere.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Fixora connects you with verified professionals for home and personal services. Find, compare and book trusted experts in just a few taps.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#download" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400">
                  <Download size={19} />
                  Download App
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                  Explore Services
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">▶ Google Play</div>
                <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">● App Store</div>
              </div>

              <div className="mt-10 flex items-center gap-8 text-sm text-slate-300">
                <div><strong className="block text-2xl text-white">10K+</strong>Bookings</div>
                <div className="h-8 w-px bg-white/15" />
                <div><strong className="block text-2xl text-white">2K+</strong>Professionals</div>
                <div className="h-8 w-px bg-white/15" />
                <div><strong className="block text-2xl text-white">4.8/5</strong>Average rating</div>
              </div>
            </div>

            <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[620px]">
              <div className="absolute h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="float relative w-[270px] rounded-[42px] border-[7px] border-slate-700 bg-slate-950 p-2 shadow-2xl phone-shadow sm:w-[300px]">
                <div className="overflow-hidden rounded-[34px] bg-slate-50">
                  <div className="flex items-center justify-between bg-white px-5 pb-2 pt-4 text-[9px] font-bold">
                    <span>9:41</span><span>●●●</span>
                  </div>
                  <div className="p-4">
                    <div className="text-[9px] text-slate-400">Your location</div>
                    <div className="flex items-center gap-1 text-xs font-bold"><MapPin size={12} className="text-emerald-500" /> Lucknow, Uttar Pradesh</div>
                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-[10px] text-slate-400">
                      <Search size={12} /> Search for services...
                    </div>
                    <div className="mt-4 rounded-2xl bg-[#092449] p-4 text-white">
                      <div className="text-[9px] text-emerald-300">Fixora Verified</div>
                      <div className="mt-1 text-base font-extrabold">Reliable services<br />right around you</div>
                      <button className="mt-3 rounded-lg bg-emerald-500 px-3 py-2 text-[9px] font-bold">Book Now</button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-extrabold">Categories</span>
                      <span className="text-[9px] font-semibold text-emerald-500">See All</span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {categories.slice(0, 6).map((c) => (
                        <div key={c.name} className="rounded-xl bg-white p-2 text-center shadow-sm">
                          <div className="text-lg">{c.icon}</div>
                          <div className="mt-1 text-[8px] font-bold text-slate-700">{c.name}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 text-xs font-extrabold">Popular near you</div>
                    <div className="mt-2 rounded-xl bg-white p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div><div className="text-[10px] font-bold">Water Tank Cleaning</div><div className="mt-1 text-[8px] text-amber-500">★ 4.9 (130)</div></div>
                        <span className="text-xs font-black">₹499</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around border-t bg-white py-3 text-[8px] font-bold text-slate-400">
                    <span className="text-emerald-500">Home</span><span>Bookings</span><span>Chat</span><span>Profile</span>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-1/2 hidden w-[230px] -translate-y-1/2 translate-x-2 rounded-[36px] border-[6px] border-slate-700 bg-slate-950 p-2 shadow-2xl lg:block">
                <div className="overflow-hidden rounded-[29px] bg-white">
                  <div className="px-4 pb-2 pt-5 text-sm font-extrabold">My Bookings</div>
                  <div className="border-b px-4 pb-3 text-[9px] text-emerald-500">Upcoming</div>
                  {["Electrician", "Plumber", "AC Repair", "Painter"].map((x, i) => (
                    <div key={x} className="flex items-center gap-3 border-b px-4 py-4">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-sm">{["⚡","🔧","❄️","🎨"][i]}</div>
                      <div><div className="text-[10px] font-bold">{x}</div><div className="text-[8px] text-slate-400">Today, {10 + i}:00 AM</div><div className="mt-1 text-[7px] font-bold text-emerald-500">Confirmed</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-1px] left-0 right-0 h-16 rounded-t-[50%] bg-white" />
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-bold text-emerald-500">WHY FIXORA?</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Everything you need in one place</h2>
              <p className="mt-4 text-slate-500">We make finding the right service professional simple, transparent and reliable.</p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                [ShieldCheck, "Trusted Professionals", "Verified providers with real customer reviews and ratings."],
                [Clock3, "Quick & Easy Booking", "Find and book a professional in just a few simple steps."],
                [Tag, "Transparent Pricing", "Compare prices upfront with no confusing hidden charges."],
                [Headphones, "24/7 Support", "Our support team is ready whenever you need help."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-500"><Icon size={29} /></div>
                  <h3 className="mt-6 font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-bold text-emerald-500">SERVICES</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Popular Services</h2>
                <p className="mt-3 text-slate-500">Find trusted experts for your everyday needs.</p>
              </div>
              <button className="inline-flex items-center gap-1 font-bold text-emerald-600">View All Services <ChevronRight size={18} /></button>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <div key={c.name} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-50 text-3xl">{c.icon}</div>
                    <ArrowRight size={19} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-500" />
                  </div>
                  <h3 className="mt-5 text-lg font-black">{c.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{c.text}</p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-bold text-amber-500"><Star size={14} fill="currentColor" /> 4.8+ rating</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-bold text-emerald-500">HOW IT WORKS</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Get your service in 4 easy steps</h2>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.n} className="relative text-center">
                    {i < 3 && <div className="absolute left-[65%] top-8 hidden h-px w-[70%] border-t border-dashed border-slate-200 lg:block" />}
                    <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                      <Icon size={25} />
                    </div>
                    <span className="mt-4 block text-xs font-black text-emerald-500">{step.n}</span>
                    <h3 className="mt-2 font-extrabold">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#06152d] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="font-bold text-emerald-400">FOR PROFESSIONALS</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Grow your business with Fixora</h2>
                <p className="mt-5 max-w-xl leading-7 text-slate-300">
                  Join Fixora and connect with customers looking for your services. Build your profile, receive bookings and grow your local business.
                </p>
                <div className="mt-8 space-y-4">
                  {["Reach more customers in your area", "Manage bookings from one dashboard", "Build trust with ratings and reviews"].map((x) => (
                    <div key={x} className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="text-emerald-400" size={19} /> {x}</div>
                  ))}
                </div>
                <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white transition hover:bg-emerald-400">
                  Become a Professional <ArrowRight size={18} />
                </a>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div><div className="text-sm text-slate-400">This month</div><div className="mt-1 text-3xl font-black">₹48,250</div></div>
                  <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400"><Tag /></div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[["Bookings","126"],["Customers","98"],["Rating","4.9 ★"]].map(([a,b]) => (
                    <div key={a} className="rounded-2xl bg-white/5 p-4"><div className="text-[11px] text-slate-400">{a}</div><div className="mt-2 text-lg font-black">{b}</div></div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-white p-5 text-slate-900">
                  <div className="flex items-center justify-between"><span className="font-extrabold">New booking</span><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">New</span></div>
                  <div className="mt-4 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100">⚡</div><div><div className="text-sm font-bold">Electrical Repair</div><div className="text-xs text-slate-500">Today · 4:30 PM</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-bold text-emerald-500">CUSTOMER REVIEWS</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Loved by our community</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                  <div className="flex gap-1 text-amber-400">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                  <p className="mt-5 leading-7 text-slate-600">“{t.text}”</p>
                  <div className="mt-6 border-t border-slate-100 pt-5"><div className="font-extrabold">{t.name}</div><div className="mt-1 text-xs text-slate-400">{t.role}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-emerald-500 px-7 py-12 text-white sm:px-12 lg:px-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-3"><Smartphone /><span className="font-bold">FIXORA APP</span></div>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">Ready to book a trusted service?</h2>
                <p className="mt-3 max-w-2xl text-emerald-50">Download Fixora and find the right professional for your next job.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold">▶ Google Play</button>
                <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold">● App Store</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#06152d] text-slate-300">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">Making local services simple, reliable and accessible for everyone.</p>
              <div className="mt-5 flex gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, i) => <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-emerald-500"><Icon size={16} /></a>)}
              </div>
            </div>
            <div><h3 className="font-bold text-white">Company</h3><div className="mt-5 space-y-3 text-sm"><a className="block hover:text-emerald-400" href="#home">About Us</a><a className="block hover:text-emerald-400" href="#business">For Businesses</a><a className="block hover:text-emerald-400" href="#contact">Contact</a></div></div>
            <div><h3 className="font-bold text-white">Support</h3><div className="mt-5 space-y-3 text-sm"><a className="block hover:text-emerald-400" href="#">Help Center</a><a className="block hover:text-emerald-400" href="#">Privacy Policy</a><a className="block hover:text-emerald-400" href="#">Terms & Conditions</a></div></div>
            <div><h3 className="font-bold text-white">Contact</h3><div className="mt-5 space-y-3 text-sm text-slate-400"><p>support@fixora.app</p><p>+91 98765 43210</p><p>Available 24/7</p></div></div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-7 text-center text-xs text-slate-500">© 2026 Fixora. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;