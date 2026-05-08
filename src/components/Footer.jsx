import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mcn-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img src="/image/Mbatu logo transparent.png" alt="MCN Logo" className="h-16 mb-4" onError={(e) => { e.target.style.display = 'none' }} />
            <p className="text-white/60 text-sm mb-4">
              Compassionate community nursing and disability support services in the ACT and NSW regions.
            </p>
            <img src="/image/NDIS.jfif" alt="NDIS Registered Provider" className="h-12 mb-4" onError={(e) => { e.target.style.display = 'none' }} />
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <img src="/image/Insta.webp" alt="Instagram" className="w-6 h-6" onError={(e) => { e.target.style.display = 'none' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/referrals" className="text-white/70 hover:text-white transition-colors text-sm">Referrals</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/services" className="hover:text-white transition-colors">Community Nursing</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Disability Support</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">SIL & Respite</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Transportation</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>11/2 Napier Close<br />Deakin ACT 2600</p>
              <p>info@mbatucare.com.au</p>
              <a href="https://wa.me/61XXXXXXXXX" className="text-green-400 hover:text-green-300 transition-colors block">
                WhatsApp: +61 XXXX XXXX
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© 2025 Mbatu Care Nursing (MCN) Community Nursing and Disability Pty Ltd</p>
          <p className="mt-2 md:mt-0">We acknowledge the Traditional Custodians of the land on which we work.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;