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
  FileCheck
} from 'lucide-react';
import { useState, useEffect } from 'react';

const LOGO_URL = "https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/Logo-no-background-2-1.png";

const Nav = ({ setView }: { setView: (v: 'home' | 'blog') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', action: () => setView('home'), href: '#' },
    { label: 'Services', action: () => setView('home'), href: '#services' },
    { label: 'Blog', action: () => setView('blog'), href: '#' },
    { label: 'Contact Us', action: () => setView('home'), href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className={`w-full max-w-[1400px] transition-all duration-500 pointer-events-auto ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('home')}>
            <img src={LOGO_URL} alt="Weldon Young" className="h-12 md:h-16 w-auto" />
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
            <button className="btn-crafted !py-3 !px-8 text-sm">
              Book Survey <Calendar size={16} />
            </button>
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
                <button className="btn-crafted w-full">
                  Book Survey <Calendar size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const Hero = () => (
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
          <div className="subheading-pill">Chartered Building Surveyors</div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[72px] leading-[0.9] text-primary mb-10">
            Residential <br />
            <span className="italic text-accent">Property Surveys</span> <br />
            & Investigations.
          </h1>
          
          <div className="max-w-2xl">
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
              Weldon Young offers clear, independent advice on building defects and residential home surveys. Whether you're buying a property or need help diagnosing issues such as dampness, our Chartered Surveyors and Engineers can assist.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="btn-crafted group">
                Get a Quote
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/ukuser${i}/100/100`} alt="Client" />
                    </div>
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">70+ Years Combined <br /> Team Experience</span>
              </div>
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
              src="https://weldon-young-surveyors.argon-devsite.com/wp-content/uploads/2026/02/home-inspector-examining-exterior-house-with-clipboard-scaled.jpg" 
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
      desc: "Comprehensive structural assessments for older or complex properties. Our 85+ page reports include detailed photos and technical explanations.",
      icon: <Building2 size={32} />,
      tags: ["Structural", "Level 3", "Detailed"]
    },
    {
      id: "02",
      title: "HomeBuyer Reports (Level 2)",
      desc: "The standard choice for modern properties in reasonable condition. Clear, independent advice on building defects and maintenance.",
      icon: <Scale size={32} />,
      tags: ["Level 2", "Pre-Purchase", "Standard"]
    },
    {
      id: "03",
      title: "Damp & Timber Investigations",
      desc: "Specialist pre-purchase damp and timber surveys. We identify the root cause of issues and provide independent remedial advice.",
      icon: <Search size={32} />,
      tags: ["Damp", "Timber", "Specialist"]
    },
    {
      id: "04",
      title: "Listed Building Surveys",
      desc: "Expert investigations for historic and timber-framed buildings. We understand the unique requirements of heritage property maintenance.",
      icon: <Compass size={32} />,
      tags: ["Historic", "Listed", "Heritage"]
    }
  ];

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="subheading-pill">Our Services</div>
            <h2 className="text-4xl md:text-6xl text-primary mb-6">Expert Property <br /> Investigations.</h2>
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
        <p className="text-white/60 font-light leading-relaxed mb-10 max-w-lg">
          Our small team comprises a combined 70+ years experience, providing approachable and expert guidance for home buyers and owners.
        </p>
        
        <div className="space-y-12 mb-12">
          {[
            { 
              title: "100% Independent", 
              desc: "We offer completely impartial property advice and guidance, with no ties to estate agents or lenders.",
              icon: <Shield className="text-accent" />
            },
            { 
              title: "Qualified Experts", 
              desc: "Our team consists of fully qualified Chartered Building Engineers and Surveyors with deep technical knowledge.",
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
            desc: "Contact us for a free consultation. We'll discuss your property needs and recommend the right service.",
            icon: <MessageSquare className="text-accent" size={24} />
          },
          { 
            id: "02", 
            title: "Book Your Survey", 
            desc: "We'll schedule a convenient time, confirm costs upfront, and assign your dedicated surveyor.",
            icon: <Calendar className="text-accent" size={24} />
          },
          { 
            id: "03", 
            title: "Thorough Inspection", 
            desc: "Our RICS surveyor conducts a comprehensive on-site inspection using the latest techniques.",
            icon: <Search className="text-accent" size={24} />
          },
          { 
            id: "04", 
            title: "Receive Your Report", 
            desc: "Get a clear, detailed report with findings and recommendations — typically within 5 working days.",
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
          Start Your Process <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="section-spacing bg-slate-50">
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="subheading-pill">Our Work</div>
          <h2 className="text-4xl md:text-6xl text-primary mb-6">From Historic to Modern.</h2>
          <p className="text-slate-500 font-light leading-relaxed max-w-xl">
            Our team provide surveys and building investigations on various property types, from 500-year-old timber-framed buildings to modern developments.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {[
          { title: "Timber-Framed Cottage", location: "Surrey", desc: "Specialist Level 3 survey for a 400-year-old Grade II listed cottage.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
          { title: "Modern Townhouse", location: "London", desc: "HomeBuyer Level 2 report with detailed drone photography of the roof.", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop" },
          { title: "Edwardian Residence", location: "Brighton", desc: "Comprehensive damp and timber investigation for a period property.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop" }
        ].map((project, i) => (
          <div key={i} className="group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-sm">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
            <h4 className="text-2xl font-serif text-primary mb-3">{project.title}</h4>
            <p className="text-slate-500 text-sm font-light mb-4 leading-relaxed">{project.desc}</p>
            <p className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold">{project.location}</p>
          </div>
        ))}
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
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="text-accent" fill="currentColor" />)}
            </div>
            <div className="text-xs text-slate-400 font-mono">(113 Reviews)</div>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {[
            { 
              name: "Sue W", 
              role: "Home Owner", 
              text: "We highly recommend Weldon Young. After a site visit, they quickly provided an excellent, very detailed report which clearly identified the damp issues we were experiencing and offered advice on resolving them.", 
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
            },
            { 
              name: "Yvonne Lord", 
              role: "Home Buyer", 
              text: "I had a level 3 home buyers report. The office was friendly and professional. The surveyor did an excellent detailed survey with very clear drone photography of the roof. Highly recommend.", 
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
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
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Chartered Surveyors</p>
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

const CTA = () => (
  <section id="contact" className="section-spacing relative overflow-hidden">
    <div className="absolute inset-0 blueprint-grid opacity-5" />
    <div className="max-w-[1400px] mx-auto px-8 relative z-10">
      <div className="bg-primary p-12 md:p-20 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">Ready to <br /> <span className="italic text-accent">Secure</span> Your Asset?</h2>
            <p className="text-white/60 text-xl font-light mb-10 leading-relaxed">
              Contact our team today for a free, no-obligation consultation. We'll discuss your requirements and provide a competitive quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="flex items-center justify-center gap-4 px-8 py-4 bg-accent text-primary font-mono text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:shadow-xl transition-all">
                <Phone size={14} /> 01234 567 890
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
            <h3 className="text-white text-2xl font-serif mb-8">Request a Consultation</h3>
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

const Footer = () => (
  <footer className="bg-[#FBFBFA] pt-32 pb-12 border-t border-primary/5">
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="grid lg:grid-cols-12 gap-20 mb-24">
        <div className="lg:col-span-5">
          <img src={LOGO_URL} alt="Weldon Young" className="h-16 w-auto mb-10" />
          <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 max-w-md">
            Weldon Young provides clear, independent advice on building defects and residential home surveys across London and beyond.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                <Mail size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Email Us</div>
                <a href="mailto:info@weldonyoung.co.uk" className="text-primary font-bold hover:text-accent transition-colors">info@weldonyoung.co.uk</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-1">Call Us</div>
                <a href="tel:01234567890" className="text-primary font-bold hover:text-accent transition-colors">01234 567 890</a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '#' },
                { label: 'Services', href: '#services' },
                { label: 'Blog', href: '#' },
                { label: 'Contact Us', href: '#contact' }
              ].map(item => (
                <li key={item.label}><a href={item.href} className="text-primary hover:text-accent transition-colors font-bold uppercase tracking-widest text-[10px]">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Building Surveys', 'RICS Valuations', 'Party Wall', 'Dilapidations', 'Expert Witness'].map(item => (
                <li key={item}><a href="#" className="text-primary hover:text-accent transition-colors font-bold uppercase tracking-widest text-[10px]">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-8">Office</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
              123 High Street <br />
              London, EC1A 1BB <br />
              United Kingdom
            </p>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-primary/5 flex justify-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">© 2026 Weldon Young Surveyors</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState<'home' | 'blog' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="bg-[#FBFBFA] selection:bg-accent selection:text-white">
      <Nav setView={(v) => {
        setView(v);
        setSelectedPost(null);
      }} />
      
      {view === 'home' && (
        <>
          <Hero />
          <Stats />
          <HowItWorks />
          <Services />
          <Portfolio />
          <Expertise />
          <Testimonials />
          <Blog onPostClick={(id) => {
            setSelectedPost(id);
            setView('post');
          }} />
        </>
      )}

      {view === 'blog' && (
        <Blog onPostClick={(id) => {
          setSelectedPost(id);
          setView('post');
        }} />
      )}

      {view === 'post' && selectedPost && (
        <BlogPost id={selectedPost} onBack={() => setView('blog')} />
      )}

      <CTA />
      <Footer />
    </div>
  );
}
