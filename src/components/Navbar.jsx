import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-mcn-border transition-shadow duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LEFT — Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
        >
          <img
            src="/image/logos/logo_Transparent_NoBuffer 2.png"
            alt="MCN"
            className="h-12 w-auto object-contain"
            style={{ maxWidth: '48px' }}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="font-bold text-mcn-dark tracking-wide"
              style={{ fontSize: '15px', letterSpacing: '0.04em' }}
            >
              Mbatu Care Nursing
            </span>
            <span
              className="font-medium uppercase text-mcn-primary"
              style={{
                fontSize: '10px',
                letterSpacing: '0.18em',
              }}
            >
              Community & Disability Support
            </span>
          </div>
        </Link>

        {/* CENTER — Nav links (desktop only) */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Referrals', to: '/referrals' },
            { label: 'Careers', to: '/careers' },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium uppercase tracking-wide rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'text-mcn-primary bg-mcn-light'
                    : 'text-mcn-muted hover:text-mcn-primary hover:bg-mcn-light'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {/* Animated underline on hover and active */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-mcn-primary rounded-full transition-all duration-300 origin-left ${
                      isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* RIGHT — CTA Button + Mobile menu toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/referrals"
            className="hidden sm:inline-flex items-center gap-2 bg-mcn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-mcn-dark hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Make a Referral
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-mcn-muted hover:text-mcn-primary hover:bg-mcn-light transition-all duration-200"
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-mcn-border ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Referrals', to: '/referrals' },
            { label: 'Careers', to: '/careers' },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-mcn-light text-mcn-primary font-semibold'
                    : 'text-mcn-muted hover:bg-mcn-light hover:text-mcn-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/referrals"
            onClick={() => setIsOpen(false)}
            className="mt-3 bg-mcn-primary text-white text-sm font-semibold px-4 py-3 rounded-xl text-center hover:bg-mcn-dark transition-colors duration-200"
          >
            Make a Referral
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;