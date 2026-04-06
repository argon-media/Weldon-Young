import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  FileText, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  ChevronRight,
  Compass,
  Ruler,
  Building2,
  Scale,
  Star,
  MessageSquare,
  Calendar,
  Search,
  FileCheck,
  ShieldCheck,
  Waves,
  Home,
  TrendingUp,
  ChevronDown,
  Building,
  User,
  Target,
  Heart
} from 'lucide-react';
import { useState, useEffect } from 'react';

const LOGO_URL = "https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/Logo-no-background-2-1.png";

const Nav = ({ setView, view }: { setView: (v: 'home' | 'about' | 'services' | 'bournemouth' | 'contact' | 'blog' | 'post') => void, view: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', action: () => setView('home'), href: '#' },
    { label: 'About', action: () => setView('about'), href: '#' },
    { label: 'Services', action: () => setView('services'), href: '#' },
    { label: 'Bournemouth', action: () => setView('bournemouth'), href: '#' },
    { label: 'Blog', action: () => setView('blog'), href: '#' },
    { label: 'Contact Us', action: () => setView('contact'), href: '#' },
  ];

  const isHome = view === 'home';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className={`w-full max-w-[1400px] transition-all duration-500 pointer-events-auto ${scrolled || !isHome ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('home')}>
            <img src={LOGO_URL} alt="Weldon Young" className="h-16 md:h-24 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => {
                  if (item.href === '#') e.preventDefault();
                  item.action();
                }}
                className="font-sans text-[11px] font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="p-8 flex flex-col gap-6">
                {menuItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    className="text-2xl font-serif text-primary" 
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const Hero = ({ setView }: { setView: (v: 'home' | 'about' | 'services' | 'bournemouth' | 'contact' | 'blog' | 'post') => void }) => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Blueprint Background */}
    <div className="absolute inset-0 blueprint-grid z-0" />
    
    <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center relative z-10">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <div className="subheading-pill">RICS Regulated Surveyors</div>
          
            <h1 className="text-5xl md:text-7xl lg:text-[72px] leading-[0.9] text-primary mb-10">
              <span className="italic text-accent">Property Surveyors</span>
            </h1>
          
          <div className="max-w-2xl">
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
              A RICS regulated firm, Weldon Young offers independent, specialist advice on residential and Commercial surveys and valuations. Our Surveyors combine technical expertise with clear reporting, helping you understand your property and advise on your real estate assets
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="btn-crafted group" onClick={() => setView('contact')}>
                contact us
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-5 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/03/house-image-1.jpg" 
              alt="UK Residential Property" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Building Surveys (Level 3)",
      desc: "Comprehensive structural assessments for older or complex properties.",
      icon: <Building2 size={32} />,
      tags: ["Structural", "Level 3", "Detailed"]
    },
    {
      id: "02",
      title: "HomeBuyer Reports (Level 2)",
      desc: "The standard choice for modern properties in reasonable condition.",
      icon: <Scale size={32} />,
      tags: ["Level 2", "Pre-Purchase", "Standard"]
    },
    {
      id: "03",
      title: "RICS Valuations",
      desc: "Help to buy, Shared ownership, Matrimonial, Probate, Lease Extensions, Commercial etc ",
      icon: <Search size={32} />,
      tags: ["Valuations", "RICS", "Specialist"]
    },
    {
      id: "04",
      title: "Property Management",
      desc: "Full service, residential and commercial property management",
      icon: <Compass size={32} />,
      tags: ["Management", "Residential", "Commercial"]
    }
  ];

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="subheading-pill">Our Services</div>
            <h2 className="text-4xl md:text-6xl text-primary mb-6">Experts In Property</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              From historic timber-framed buildings to modern developments, we provide clear, independent advice on all property types.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-primary/10 border border-primary/10">
          {services.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ backgroundColor: "rgba(251, 251, 250, 1)" }}
              className="bg-white p-12 group transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-primary/20 font-mono text-4xl group-hover:text-accent transition-colors">{s.id}</div>
                <div className="text-primary group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
              </div>
              <h3 className="text-3xl text-primary mb-6">{s.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {s.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-[10px] font-mono uppercase tracking-widest text-slate-400 border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors">
                Explore Service <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => (
  <section id="expertise" className="bg-primary section-spacing relative overflow-hidden">
    <div className="absolute inset-0 blueprint-pattern-light opacity-20" />
    
    <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="order-2 lg:order-1">
        <div className="relative">
          <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/row-classic-victorian-era-brick-terraced-houses-residential-street-hemel-hempstead-england-scaled.jpg" 
              alt="The Standard" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 text-white">
        <div className="subheading-pill !text-white/60 !border-white/10 !bg-white/5">Why Choose Us</div>
        <h2 className="text-4xl md:text-6xl mb-6">Independent Advice, <br /> <span className="italic">Professional</span> Integrity.</h2>
        
        <div className="space-y-12 mb-12">
          {[
            { 
              title: "100% Independent", 
              desc: "We offer completely impartial property advice and guidance.",
              icon: <Shield className="text-accent" />
            },
            { 
              title: "Qualified Experts", 
              desc: "Our team consists of fully qualified RICS Surveyors & Valuers with deep technical knowledge.",
              icon: <Award className="text-accent" />
            },
            { 
              title: "Approachable Team", 
              desc: "Our friendly team are always on hand to guide and advise you, ensuring you understand every aspect of your report.",
              icon: <Users className="text-accent" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8"
            >
              <div className="shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="btn-accent-pill">
          Learn About Our Standards <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="section-spacing bg-white relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="mb-16">
        <div className="subheading-pill">
          About Weldon Young
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight max-w-5xl mb-6">
          Specialists in Residential Property Surveys, Damp & Timber Investigations.
        </h2>
        <p className="text-slate-500 font-light leading-relaxed max-w-3xl mb-10 text-lg">
          Operating throughout London and beyond, we provide home buyers and owners with the technical clarity they need. Our reports are detailed, thorough, and designed to help you plan for the future of your property.
        </p>
        <button className="btn-crafted">
          Meet the Team <ArrowRight size={14} />
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 rounded-2xl overflow-hidden h-64 lg:h-auto">
          <img 
            src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/home-inspection-contractor-evaluates-house-scaled.jpg" 
            alt="Modern UK Home" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {[
          { label: "Surveys Completed", value: "12,000+", desc: "Trusted, expert reports delivered across the UK." },
          { label: "Accuracy Rating", value: "99.8%", desc: "Precise technical data you can rely on for your investment." },
          { label: "Project Value", value: "£3.5B+", desc: "Total value of properties surveyed to date by our team." }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-slate-100 p-10 rounded-2xl shadow-sm flex flex-col justify-between min-h-[280px]">
            <div className="text-xs font-sans font-medium text-slate-500 mb-4">{stat.label}</div>
            <div>
              <div className="text-5xl font-sans font-bold text-primary mb-6">{stat.value}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="process" className="section-spacing bg-white relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="text-center mb-16">
        <div className="subheading-pill">How It Works</div>
        <h2 className="text-4xl md:text-6xl text-primary mb-6">Simple, Transparent Process</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
          From first contact to final report, we make property surveying straightforward and stress-free.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative mb-16">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-[32px] left-0 w-full h-[1px] bg-primary/5 -z-0" />
        
        {[
          { 
            id: "01", 
            title: "Get in Touch", 
            desc: "",
            icon: <MessageSquare className="text-accent" size={24} />
          },
          { 
            id: "02", 
            title: "Discuss Your Requirements", 
            desc: "",
            icon: <Calendar className="text-accent" size={24} />
          },
          { 
            id: "03", 
            title: "Carry Out Inspection.", 
            desc: "",
            icon: <Search className="text-accent" size={24} />
          },
          { 
            id: "04", 
            title: "Receive Your Report", 
            desc: "",
            icon: <FileCheck className="text-accent" size={24} />
          }
        ].map((step, i) => (
          <div key={i} className="relative group z-10">
            <div className="mb-8 flex items-center justify-between lg:block">
              <div className="w-16 h-16 rounded-2xl bg-white border border-primary/10 shadow-sm flex items-center justify-center group-hover:border-accent/50 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                {step.icon}
              </div>
              <div className="lg:mt-6 font-mono text-xs font-bold text-primary/20 group-hover:text-accent transition-colors">STEP {step.id}</div>
            </div>
            <div>
              <h4 className="text-2xl font-serif text-primary mb-4">{step.title}</h4>
              <p className="text-slate-500 font-light leading-relaxed text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn-crafted">
          Get in touch <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-spacing bg-white overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <div className="subheading-pill">Testimonials</div>
          <h2 className="text-4xl font-serif text-primary mb-6 leading-tight">What Our <span className="italic">Clients</span> Say.</h2>
          <p className="text-slate-500 font-light leading-relaxed mb-8">
            Our dedication to excellence resonates with our clients. Read firsthand accounts of their experiences with Weldon Young.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="text-3xl font-bold text-primary">5.0</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="text-accent" fill="currentColor" />)}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {[
            { 
              name: "Sam V", 
              role: "Home Buyer", 
              text: "James has done two surveys for me on property purchases. He’s been efficient, honest and professional. I will use him every time I buy.", 
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
            },
            { 
              name: "Nick M", 
              role: "Home Buyer", 
              text: "Provided me with an excellent detailed survey, and provided ongoing advice and support throughout the process - thank you!", 
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" 
            }
          ].map((t, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-600 leading-relaxed relative">
              <div className="text-6xl text-accent/10 absolute top-4 left-4 font-serif">"</div>
              <p className="relative z-10 mb-8">{t.text}</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-primary font-bold text-sm not-italic">{t.name}</p>
                  <p className="text-slate-400 text-xs not-italic uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Blog = ({ onPostClick }: { onPostClick: (id: number) => void }) => {
  const posts = [
    {
      id: 1,
      title: "Understanding RICS Home Survey Levels",
      excerpt: "Not all surveys are the same. Learn which level is right for your property purchase.",
      date: "Feb 12, 2026",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Common Structural Issues in Victorian Terraces",
      excerpt: "What to look out for when buying a period property in London.",
      date: "Feb 05, 2026",
      img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "The Importance of Damp & Timber Surveys",
      excerpt: "Why diagnosing moisture issues early can save you thousands in repairs.",
      date: "Jan 28, 2026",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="section-spacing bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="subheading-pill">Insights</div>
            <h2 className="text-4xl md:text-6xl text-primary mb-6">Latest from the Blog.</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Expert advice and industry updates to help you navigate the UK property market.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
              onClick={() => onPostClick(post.id)}
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-4">{post.date}</div>
                <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-500 font-light text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                  Read Article <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const detailedServices = [
    {
      title: "Building Surveys (Level 3)",
      desc: "Our Level 3 Building Survey is the most comprehensive inspection we offer. It is particularly suited for older properties, period homes, or buildings that have undergone significant alterations. We provide a deep dive into the structural integrity, identifying hidden defects and providing technical advice on necessary repairs.",
      features: ["Condition rating system", "Detailed report", "Technical repair advice", "Future maintenance planning"],
      img: "https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/georgian-townhouse-brick-facade-with-sash-windows-afternoon-lighting-1.jpg"
    },
    {
      title: "HomeBuyer Reports (Level 2)",
      desc: "The standard choice for modern properties in reasonable condition. This report focuses on identifying building defects that might affect the property's value or safety. It uses a clear traffic light system to highlight areas of concern, making it easy for buyers to understand the property's condition.",
      features: ["Condition rating system", "Identification of urgent defects", "Thorough inspection", "Professional valuation (optional)"],
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
    },
    {
      title: "RICS Valuations",
      desc: "As a RICSregulated firm, we deliver accurate, impartial reports for purposes such as buying, selling, probate, tax and sharedownership, help to buy and lease extension. Our valuations give you clarity, confidence and a reliable basis for important financial decisions.",
      features: ["Buying & Selling", "Probate & Tax", "Shared Ownership", "Help to Buy & Lease Extension"],
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Property Management",
      desc: "We provide professional residential and commercial property management designed to protect your assets and reduce the pressures of day to day ownership. From tenant and occupier liaison to maintenance, compliance, and financial oversight, we ensure your property is well run, legally compliant, and performing at its best. Our proactive approach helps safeguard value and creates a smooth, reliable experience for landlords and investors.",
      features: ["Tenant & Occupier Liaison", "Maintenance & Compliance", "Financial Oversight", "Proactive Asset Protection"],
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32">
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/old-stone-house-england-1.jpg" 
            alt="Services Banner" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
        </div>
        <div className="max-w-[1400px] mx-auto px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="subheading-pill !text-white/60 !border-white/10 !bg-white/5">Our Expertise</div>
            <h1 className="text-5xl md:text-7xl text-white mb-8">Professional Surveying & <br /> Valuation Services.</h1>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Weldon Young provides a comprehensive range of RICS – regulated surveying and valuation services. From pre-purchase surveys, to RICS professional valuations
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Layout */}
      <section className="bg-white">
        {detailedServices.map((service, i) => (
          <div key={i} className={`section-spacing ${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
            <div className="max-w-[1400px] mx-auto px-8">
              <div className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="subheading-pill">Service {i + 1}</div>
                  <h2 className="text-4xl md:text-5xl text-primary mb-8">{service.title}</h2>
                  <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600">
                        <CheckCircle2 size={18} className="text-accent shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-crafted">
                    Request a Quote <ArrowRight size={14} />
                  </button>
                </div>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Expertise />
      <HowItWorks />
    </div>
  );
};

const AboutPage = ({ setView }: { setView: (v: 'home' | 'about' | 'services' | 'bournemouth' | 'contact' | 'blog' | 'post') => void }) => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-5" />
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="subheading-pill">Independent & RICS Regulated</div>
            <h1 className="text-5xl md:text-7xl text-primary mb-8 font-serif leading-tight">About Weldon Young Surveyors</h1>
            <p className="text-2xl text-slate-600 font-light leading-relaxed mb-8">
              Weldon Young is an independent, RICS-regulated surveying firm built on one principle: that clients deserve clear, honest advice from a qualified expert they can actually speak to.
            </p>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              No call centres, no hand-offs, no jargon. Just straightforward, accurate guidance you can rely on at every stage of your property journey.
            </p>
          </div>
        </div>
      </section>

      {/* Meet James Weldon */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 relative group">
                <img 
                  src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/03/james-weldon.jpg" 
                  alt="James Weldon" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
            <div>
              <div className="subheading-pill">Our Founder</div>
              <h2 className="text-4xl md:text-5xl text-primary mb-8 font-serif leading-tight">Meet James Weldon — Founder & RICS Qualified Surveyor</h2>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  James Weldon is the founder of Weldon Young and a fully RICS-qualified surveyor with over 12 years of hands-on experience across the property industry. His background spans residential and commercial work, including Level 2 and Level 3 building surveys, secured lending valuations and complex professional valuations, giving him a deep, practical understanding of how buildings perform and what clients need to know before they commit.
                </p>
                <p>
                  James has worked across both the UK property market and the California real estate market, bringing an international perspective to risk assessment, regulatory compliance and client communication that few surveyors in the south of England can offer. Now based in Dorset, he works across the South Coast, the Home Counties and London, combining regional expertise with a broader understanding of what high-value and complex property instructions demand.
                </p>
                <p>
                  Whether you are purchasing a starter home in Bournemouth, a period property in the Home Counties or a high-value asset in London, you can expect the same standard of service. With significant experience advising high-net-worth clients, James is well-versed in handling sensitive and confidential instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Values */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-accent mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">The Weldon Young Approach</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Every instruction at Weldon Young is handled personally. We take the time to understand your property, your concerns and your timeline. When your report lands, we are on hand to walk you through it, answer your questions and help you decide what to do next.
              </p>
            </div>
            <div className="p-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-accent mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">Regulated</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                As a RICS-regulated firm, we operate under the highest professional standards in the UK property industry. That means every survey and valuation we produce meets a strict regulatory framework.
              </p>
            </div>
            <div className="p-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-accent mb-8">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">A Business Built on Integrity</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Outside of work, James is a busy father to four young children and a committed Arsenal supporter. That grounding in everyday life shapes the way Weldon Young operates a genuine understanding that for most clients, a property purchase is one of the most significant decisions they will ever make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 md:p-24 text-center">
            <div className="absolute inset-0 blueprint-grid opacity-10" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl text-white mb-12 font-serif leading-tight">Ready to Discuss Your Property?</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <a href="tel:01202165854" className="flex items-center gap-4 text-white text-2xl font-bold hover:text-accent transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  01202 165854
                </a>
                <button className="btn-crafted !bg-accent !text-primary border-none !px-12 !py-6 text-xl" onClick={() => setView('contact')}>
                  Contact Us <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BournemouthPage = ({ setView }: { setView: (v: 'home' | 'about' | 'services' | 'bournemouth' | 'contact' | 'blog' | 'post') => void }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const surveyTypes = [
    { title: "Level 2 Home Survey (HomeBuyer Report)", desc: "Ideal for conventional properties under 100 years old in reasonable condition. Provides traffic-light condition ratings and identifies visible defects requiring attention.", icon: <FileText size={24} /> },
    { title: "Level 3 Building Survey", desc: "Comprehensive structural analysis examining roof voids, subfloors (where accessible), and party wall conditions. Essential for older properties, or buildings in poor condition.", icon: <Building2 size={24} /> },
    { title: "RICS Valuation Services", desc: "Accurate market valuation for secured lending, probate, taxation, shared ownership, help to buy and other purposes requiring Royal Institution of Chartered Surveyors standards.", icon: <Scale size={24} /> },
    { title: "New Build Snagging Surveys", desc: "Quality checks for recently constructed properties, identifying construction defects before your warranty period expires.", icon: <CheckCircle2 size={24} /> },
    { title: "Specific Defect Reports", desc: "Targeted investigations for particular concerns— whether damp, structural movement, or timber decay requiring further investigation.", icon: <Search size={24} /> },
    { title: "Victorian Property Surveys", desc: "Expert analysis of period properties and conversions, including assessment of original materials, historic repairs, and compliance issues.", icon: <Home size={24} /> },
    { title: "Investment Property Surveys", desc: "Commercial-focused assessments for buy-to-let properties, examining rental potential alongside structural condition.", icon: <TrendingUp size={24} /> },
    { title: "Pre-Purchase Consultations", desc: "Initial property assessments before formal surveys, helping you decide which level of inspection suits your specific property.", icon: <MessageSquare size={24} /> }
  ];

  const areas = [
    "Boscombe", "Charminster", "East Cliff", "Kinson", "Moordown", 
    "Pokesdown", "Southbourne", "Talbot Woods", "Westbourne", "Winton", 
    "West Cliff", "Springbourne", "Littledown", "Iford", "Strouden Park"
  ];

  const faqs = [
    {
      q: "What makes Bournemouth properties unique from a survey perspective?",
      a: "Bournemouth combines coastal exposure challenges with diverse housing stock. Properties face salt damage, ground instability from sandy Eocene clay soils, and increasing flood risks—surface water flooding risk is projected to increase by 226% in some postcodes by 2050. The local area also features high concentrations of Victorian conversions requiring specialist knowledge to assess properly."
    },
    {
      q: "Do you offer follow-up support after the survey?",
      a: "Yes. You have direct access to your surveyor to discuss findings, seek clarification, and receive independent advice throughout your purchase process. We’re an independent practice focused on serving private clients rather than volume, so every instruction receives proper attention."
    },
    {
      q: "What’s included in your survey reports?",
      a: "Reports include photographic evidence of all identified defects, clear condition assessments, cost estimates for repairs, and practical recommendations prioritised by urgency. We assess structural integrity, roofing, damp, drainage, and external elements. For Bournemouth properties, we specifically address coastal exposure effects and flood risk assessment—all explained without technical jargon."
    }
  ];

  return (
    <div className="pt-32">
      {/* Banner */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/03/house-image-1.jpg" 
            alt="Bournemouth Home Surveys" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent" />
        </div>
        <div className="max-w-[1400px] mx-auto px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="subheading-pill !text-white/60 !border-white/10 !bg-white/5"
            >
              Expert RICS-Regulated Home Survey Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl text-white mb-8 leading-[1.1]"
            >
              Professional Home Surveys in Bournemouth
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 font-light leading-relaxed mb-10"
            >
              Weldon Young provides clear, reliable and RICS-regulated home surveys throughout Bournemouth. Whether you’re buying your first home or investing in a high-value property, our reports give you the insight you need to make confident decisions.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 font-light mb-12 max-w-2xl"
            >
              With over 12 years’ experience as Surveyors serving residential and commercial clients across the south coast, we combine technical expertise with strong local market knowledge of Bournemouth’s distinctive housing stock—from Victorian conversions to modern cliff-top developments.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="btn-crafted !bg-accent !text-primary border-none !px-10 !py-5 text-lg" 
              onClick={() => setView('contact')}
            >
              Book Your Survey Consultation Today <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why Essential */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="subheading-pill">Essential Protection</div>
              <h2 className="text-4xl md:text-5xl text-primary mb-8 font-serif leading-tight">Why Home Surveys are Essential for Bournemouth Properties</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Bournemouth’s property market presents unique challenges that make professional home surveys essential rather than optional. With average house prices around £360,000 and significant variation between property types—from flats at £198,000 to detached homes over £1,000,000 understanding a property’s condition before purchase protects your investment.
              </p>
              <p className="text-slate-500 font-light leading-relaxed mb-10">
                Our experienced surveyors provide professional advice that gives you peace of mind. Understanding what you’re buying, including maintenance requirements and potential issues, means you can proceed with confidence or walk away before committing to a problematic purchase.
              </p>
              <button className="btn-crafted !bg-accent !text-primary border-none" onClick={() => setView('contact')}>
                Book Your Survey Consultation <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Protection Against Costly Surprises", desc: "Surveys in Bournemouth regularly identify defects requiring significant repair costs. Roof re-covers on Victorian properties can cost anywhere from £10,000–£18,000, while structural movement repairs run even higher.", icon: <ShieldCheck className="text-accent" size={32} /> },
                { title: "Coastal Property Challenges", desc: "Properties along the seafront and cliff tops face accelerated deterioration from salt exposure. Corrosion of metalwork, render breakdown, and damp penetration affect approximately 55-60% of properties surveyed in coastal postcodes like BH1 and BH5.", icon: <Waves className="text-accent" size={32} /> },
                { title: "Victorian Housing Complexities", desc: "Many of Bournemouth’s elegant Victorian and Edwardian homes have been converted into flats, creating shared drainage systems, complex roof arrangements, and potential issues with historic materials that require specialist knowledge to assess properly.", icon: <Home className="text-accent" size={32} /> },
                { title: "Negotiating Power", desc: "A detailed building survey provides accurate information about the property’s condition, giving property buyers genuine leverage in price negotiations and helping avoid overpaying for buildings with hidden defects.", icon: <TrendingUp className="text-accent" size={32} /> }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Survey Services */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-pattern-light opacity-10" />
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="subheading-pill !text-white/60 !border-white/10 !bg-white/5">Our Survey Services</div>
            <h2 className="text-4xl md:text-6xl mb-6">Tailored Solutions for Bournemouth</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Residential Property" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-12">
                <h3 className="text-3xl mb-6 font-serif">Residential Property Surveys</h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  We create comprehensive survey reports for residential properties of all sizes across Bournemouth, whether you’re purchasing a seafront flat, a Victorian terrace in the town centre, or a family home in the surrounding areas of Christchurch or Poole.
                </p>
                <p className="text-white/50 font-light leading-relaxed">
                  Our building surveyors have specialist knowledge of the different property types found throughout this seaside location from period conversions requiring careful assessment of original materials to modern developments where construction quality verification matters most.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Commercial Property" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-12">
                <h3 className="text-3xl mb-6 font-serif">Commercial Property Surveys</h3>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                  Make informed investment decisions with professional building surveys for commercial properties and investment portfolios. Our team provides expert guidance for business premises, development opportunities, and buy-to-let properties across Dorset and Hampshire.
                </p>
                <p className="text-white/50 font-light leading-relaxed">
                  Commercial clients benefit from our experience in market valuation, project management support, and detailed assessments that address the individual needs of business property transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Survey Types */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-20 text-center">
            <div className="subheading-pill">Survey Types</div>
            <h2 className="text-4xl md:text-5xl text-primary font-serif">Our Comprehensive Survey Types</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {surveyTypes.map((type, i) => (
              <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                  {type.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4 leading-tight">{type.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Survey Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="subheading-pill">The Journey</div>
              <h2 className="text-4xl md:text-6xl text-primary font-serif leading-tight">Our Survey Process</h2>
            </div>
            <p className="text-slate-500 font-light max-w-md lg:text-right">
              We've refined our workflow to ensure maximum clarity, speed, and professional accuracy for every Bournemouth instruction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Initial Consultation", 
                desc: "We discuss your property type, concerns, and survey requirements. Based on the specific property details—location, age, construction type we recommend the most suitable survey level for your needs.",
                icon: <MessageSquare size={28} />,
                color: "bg-blue-50"
              },
              { 
                step: "02", 
                title: "Property Inspection", 
                desc: "Your RICS Surveyor conducts a thorough on-site examination. We examine the structure, services, and grounds with professional precision.",
                icon: <Search size={28} />,
                color: "bg-amber-50"
              },
              { 
                step: "03", 
                title: "Report Preparation", 
                desc: "We prepare clear, detailed reports with photographic evidence. Turnaround is typically 2-4 working days. Every report includes honest professional advice, without jargon.",
                icon: <FileCheck size={28} />,
                color: "bg-emerald-50"
              },
              { 
                step: "04", 
                title: "Follow-up Support", 
                desc: "You receive direct access to your surveyor for questions. Whether you need help understanding findings or negotiating repairs, ongoing support is included.",
                icon: <Users size={28} />,
                color: "bg-purple-50"
              }
            ].map((s, i) => (
              <div key={i} className="relative group h-full">
                <div className="h-full p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                  <div className="flex items-center justify-between mb-10">
                    <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500`}>
                      {s.icon}
                    </div>
                    <span className="text-5xl font-serif text-slate-200 group-hover:text-accent/20 transition-colors duration-500">{s.step}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-6 leading-tight">{s.title}</h4>
                  <p className="text-slate-500 text-base leading-relaxed font-light flex-grow">{s.desc}</p>
                  
                  {/* Decorative line for connection */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200 z-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="subheading-pill">Local Coverage</div>
              <h2 className="text-4xl md:text-5xl text-primary mb-8 font-serif">Areas We Serve in Bournemouth</h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                We provide professional home survey services across a wide range of neighbourhoods and suburbs in Bournemouth, ensuring expert local knowledge no matter where your property is located. Our coverage includes:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {areas.map(area => (
                  <div key={area} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-accent/10 hover:text-primary transition-colors cursor-default">
                    <MapPin size={16} className="text-accent" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-slate-500 font-light italic">
                If your property is located in any of these areas or the surrounding parts of Bournemouth, our experienced surveyors are ready to assist you with thorough and reliable home surveys tailored to the local property characteristics.
              </p>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[600px] bg-slate-100 relative group">
              <div className="absolute inset-0 flex items-center justify-center flex-col p-12 text-center z-10">
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-xl">
                  <MapPin size={40} className="text-accent" />
                </div>
                <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-3">Bournemouth Coverage Map</p>
                <p className="text-slate-600 text-lg font-light">Serving all BH postcodes and surrounding areas.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Bournemouth Map" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-5" />
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="subheading-pill !text-white/60 !border-white/10 !bg-white/5">Client Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">What Our Clients Say</h2>
            <div className="relative">
              <span className="absolute -top-10 -left-10 text-9xl text-white/10 font-serif">"</span>
              <p className="text-2xl md:text-3xl text-white/90 font-light italic leading-relaxed mb-12 relative z-10">
                Our clients consistently praise our home survey service in Bournemouth for its thoroughness and clear, jargon-free reports that provide invaluable insights. They appreciate the expert guidance and responsive support that help them make confident, informed property decisions.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <span className="text-white/60 font-mono text-sm tracking-widest uppercase">Trusted & Authentic Local Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-20">
            <div className="subheading-pill">FAQs</div>
            <h2 className="text-4xl md:text-5xl text-primary font-serif">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="text-xl font-bold text-primary">{faq.q}</span>
                  <ChevronDown 
                    size={24} 
                    className={`text-accent transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 bg-white text-slate-600 font-light leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-[#1a243a] p-12 md:p-24 text-center">
            <div className="absolute inset-0 blueprint-grid opacity-10" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="subheading-pill !text-white/60 !border-white/10 !bg-white/5">Contact Weldon Young</div>
              <h2 className="text-4xl md:text-5xl text-white mb-8 font-serif leading-tight max-w-4xl">Get Your Bournemouth Property Survey Today</h2>
              <p className="text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                Make informed decisions about your next property purchase in the south west with a clear, reliable survey from experienced surveyors who understand Bournemouth’s unique property challenges.
              </p>
              <p className="text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Whether you’re buying in the town centre, along the seafront, or throughout the wider Dorset area, our RICS-qualified team delivers the quality reporting and expert guidance you need.
              </p>
              <div className="flex justify-center w-full">
                <button className="btn-crafted !bg-accent !text-primary border-none !px-12 !py-6 text-xl" onClick={() => setView('contact')}>
                  Request Your Free Quote <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-32">
    {/* Banner */}
    <section className="relative h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/georgian-townhouse-brick-facade-with-sash-windows-afternoon-lighting-1.jpg" 
          alt="Contact Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
      </div>
      <div className="max-w-[1400px] mx-auto px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="subheading-pill !text-white/60 !border-white/10 !bg-white/5">Contact Us</div>
          <h1 className="text-5xl md:text-7xl text-white mb-8">Let's Discuss <br /> Your Property.</h1>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Have a question about a potential purchase or a building defect? Our team is here to provide expert guidance and a transparent quote for your requirements.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-3xl font-serif text-primary mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Email Our Team</h4>
                  <p className="text-slate-500 mb-2">For general inquiries and quote requests.</p>
                  <a href="mailto:info@weldonyoung.com" className="text-accent font-bold hover:underline">info@weldonyoung.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Call Our Office</h4>
                  <p className="text-slate-500 mb-2">Speak directly with our coordination team.</p>
                  <a href="tel:01202165854" className="text-accent font-bold hover:underline">01202 165854</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Our Location</h4>
                  <p className="text-slate-500">Wimborne, Dorset, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-serif mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Full Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Email Address</label>
                    <input type="email" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Service Required</label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-primary">Level 3 Building Survey</option>
                    <option className="bg-primary">Level 2 HomeBuyer Report</option>
                    <option className="bg-primary">Damp & Timber Investigation</option>
                    <option className="bg-primary">Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Message</label>
                  <textarea className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors h-32" placeholder="Tell us about the property..."></textarea>
                </div>
                <button className="btn-accent-pill w-full !text-primary">
                  Submit Request <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const BlogArchive = ({ onPostClick }: { onPostClick: (id: number) => void }) => (
  <div className="pt-32">
    {/* Banner */}
    <section className="relative h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/facade-row-apartment-buildings-against-clear-blue-sky-1.jpg" 
          alt="Blog Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
      </div>
      <div className="max-w-[1400px] mx-auto px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="subheading-pill !text-white/60 !border-white/10 !bg-white/5">Insights & Advice</div>
          <h1 className="text-5xl md:text-7xl text-white mb-8">Property <br /> Knowledge Base.</h1>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Stay informed with the latest updates from the UK property market, expert surveying advice, and guides on maintaining your home.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <Blog onPostClick={onPostClick} />
      </div>
    </section>
  </div>
);

const CTA = () => (
  <section id="contact" className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 blueprint-grid opacity-5" />
    <div className="max-w-[1400px] mx-auto px-8 relative z-10">
      <div className="bg-primary p-12 md:p-20 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">Ready to <br /> <span className="italic text-accent">Secure</span> Your Asset?</h2>
            <p className="text-white/60 text-xl font-light mb-10 leading-relaxed">
              Contact our team today for a free, no-obligation consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="flex items-center justify-center gap-4 px-8 py-4 bg-accent text-primary font-mono text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:shadow-xl transition-all">
                <Phone size={14} /> 01202 165854
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
            <h3 className="text-white text-2xl font-serif mb-8">Contact Us</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Full Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Email Address</label>
                  <input type="email" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Property Type</label>
                <select className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option className="bg-primary">Residential</option>
                  <option className="bg-primary">Commercial</option>
                  <option className="bg-primary">Industrial</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Message</label>
                <textarea className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors h-32" placeholder="Tell us about your property..."></textarea>
              </div>
              <button className="btn-accent-pill w-full !text-primary">
                Send Inquiry <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BlogPost = ({ id, onBack }: { id: number, onBack: () => void }) => {
  // Mock content for a single post
  return (
    <section className="pt-40 pb-20 bg-white">
      <div className="max-w-[900px] mx-auto px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-400 hover:text-primary transition-colors mb-12"
        >
          <ArrowRight size={12} className="rotate-180" /> Back to Blog
        </button>
        
        <div className="subheading-pill">Expert Advice</div>
        <h1 className="text-4xl md:text-6xl text-primary mb-8 leading-tight font-serif">
          Understanding RICS Home Survey Levels
        </h1>
        <div className="flex items-center gap-6 mb-12 border-y border-slate-100 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200" />
            <div>
              <p className="text-xs font-bold text-primary">Weldon Young Team</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">RICS Regulated Surveyors</p>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-100" />
          <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Feb 12, 2026</div>
        </div>

        <div className="aspect-video rounded-2xl overflow-hidden mb-12">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Blog" className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Buying a home is one of the most significant investments you'll ever make. To ensure you're making a sound decision, a professional survey is essential. However, many buyers are confused by the different levels of RICS Home Surveys available.
          </p>
          <h2 className="text-2xl font-serif text-primary mt-12 mb-6">Level 1: RICS Home Survey</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The most basic survey, suitable for modern homes in good condition. It uses a traffic light system to rate the condition of different parts of the property.
          </p>
          <h2 className="text-2xl font-serif text-primary mt-12 mb-6">Level 2: RICS HomeBuyer Report</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The most popular choice for standard properties. It provides a more detailed assessment and includes advice on repairs and ongoing maintenance.
          </p>
          <h2 className="text-2xl font-serif text-primary mt-12 mb-6">Level 3: RICS Building Survey</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The most comprehensive survey, recommended for older properties, period homes, or buildings that have undergone significant alterations.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setView }: { setView: (v: 'home' | 'about' | 'services' | 'bournemouth' | 'contact' | 'blog' | 'post') => void }) => (
  <footer className="bg-[#FBFBFA] pt-16 pb-12 border-t border-primary/5">
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="grid lg:grid-cols-12 gap-20 mb-24">
        <div className="lg:col-span-5">
          <img src={LOGO_URL} alt="Weldon Young" className="h-16 w-auto mb-10" />
          <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 max-w-md">
            A RICS regulated firm, Weldon Young offers independent, specialist advice on residential and Commercial surveys and valuations. Our Surveyors combine technical expertise with clear reporting, helping you understand your property and advise on your real estate assets across the south and beyond
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                <Mail size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Email Us</div>
                <a href="mailto:info@weldonyoung.com" className="text-primary font-bold hover:text-accent transition-colors">info@weldonyoung.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Call Us</div>
                <a href="tel:01202165854" className="text-primary font-bold hover:text-accent transition-colors">01202 165854</a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', action: () => setView('home') },
                { label: 'About', action: () => setView('about') },
                { label: 'Services', action: () => setView('services') },
                { label: 'Bournemouth', action: () => setView('bournemouth') },
                { label: 'Blog', action: () => setView('blog') },
                { label: 'Contact Us', action: () => setView('contact') }
              ].map(item => (
                <li key={item.label}>
                  <button 
                    onClick={item.action}
                    className="text-primary hover:text-accent transition-colors font-bold uppercase tracking-widest text-[10px]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Building Surveys', 'RICS Valuations', 'Party Wall', 'Expert Witness'].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => setView('services')}
                    className="text-primary hover:text-accent transition-colors font-bold uppercase tracking-widest text-[10px] text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Office</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
              Wimborne, Dorset <br />
              United Kingdom
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 flex justify-center">
        <img 
          src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/freepik__background__75369.png" 
          alt="RICS Logo" 
          className="max-w-[200px] md:max-w-[300px] w-full h-auto opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="pt-12 border-t border-primary/5 flex justify-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">© 2026 Weldon Young Surveyors</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState<'home' | 'about' | 'services' | 'bournemouth' | 'contact' | 'blog' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="bg-[#FBFBFA] selection:bg-accent selection:text-white">
      <Nav view={view} setView={(v) => {
        setView(v);
        setSelectedPost(null);
      }} />
      
      {view === 'home' && (
        <>
          <Hero setView={setView} />
          <Services />
          <HowItWorks />
          <Expertise />
          <Testimonials />
          <Blog onPostClick={(id) => {
            setSelectedPost(id);
            setView('post');
          }} />
        </>
      )}

      {view === 'about' && (
        <AboutPage setView={setView} />
      )}

      {view === 'services' && (
        <ServicesPage />
      )}

      {view === 'bournemouth' && (
        <BournemouthPage setView={setView} />
      )}

      {view === 'contact' && (
        <ContactPage />
      )}

      {view === 'blog' && (
        <BlogArchive onPostClick={(id) => {
          setSelectedPost(id);
          setView('post');
        }} />
      )}

      {view === 'post' && selectedPost && (
        <BlogPost id={selectedPost} onBack={() => setView('blog')} />
      )}

      {view !== 'contact' && <CTA />}
      <Footer setView={setView} />
    </div>
  );
}
