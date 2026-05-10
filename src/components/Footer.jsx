import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mcn-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img src="/image/logos/Mbatu logo transparent.png" alt="MCN Logo" className="h-16 w-auto object-contain" onError={(e) => { e.target.style.display = 'none' }} />
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Compassionate community nursing and disability support services in the ACT and NSW regions.
            </p>
            <img src="/image/badges/NDIS.jfif" alt="NDIS Registered Provider" className="h-12 w-auto object-contain mt-4" onError={(e) => { e.target.style.display = 'none' }} />
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/mbatu_care_nursing_/?hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow MCN on Instagram"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                <img
                  src="/image/social/Insta.webp"
                  alt="Instagram"
                  className="h-4 w-4 object-contain brightness-0 invert"
                />
                Instagram
              </a>
              <a
                href="https://wa.me/61412025261"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with MCN on WhatsApp"
                className="flex items-center gap-2 bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967
      -.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164
      -.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475
      -.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13
      -.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497
      .099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
      -.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01
      -.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 
      0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 
      4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871
      .118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289
      .173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 
      1.508 5.84L.057 23.998l6.305-1.657A11.954 11.954 0 
      0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 
      21.818a9.793 9.793 0 01-5.017-1.381l-.36-.214-3.737
      .983.999-3.648-.235-.374A9.794 9.794 0 012.182 12C2.182 
      6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 
      21.818 12 21.818z"/>
                </svg>
                WhatsApp
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