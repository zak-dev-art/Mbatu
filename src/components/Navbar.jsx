import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Referrals', path: '/referrals' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`bg-white/90 backdrop-blur-md border-b border-mcn-border sticky top-0 z-50 transition-shadow duration-300 py-3 md:py-4 ${hasShadow ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/image/FullLogo png.png" alt="MCN Logo" className="h-16 md:h-20 w-auto object-contain" onError={(e) => { e.target.style.display = 'none' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-mcn-muted hover:text-mcn-primary font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/referrals"
              className="bg-mcn-primary text-white rounded-xl px-4 py-2 text-sm font-semibold hover:bg-mcn-dark transition-colors duration-200"
            >
              Make a Referral
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-mcn-muted hover:text-mcn-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-mcn-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-mcn-muted hover:text-mcn-primary font-medium transition-colors text-sm uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/referrals"
                className="bg-mcn-primary text-white rounded-xl px-4 py-2 text-sm font-semibold hover:bg-mcn-dark transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Make a Referral
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;