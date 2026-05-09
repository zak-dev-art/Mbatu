import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center hero-section"
      style={{
        backgroundImage: "url('/image/hero/depositphotos_689087790-stock-photo-nursing-assistant-helping-elderly-man.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(to right, rgba(13,43,78,0.75) 40%, rgba(13,43,78,0.35) 100%)' }} 
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Compassionate Community Nursing & Disability Support
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Your Care, Your Voice
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/referrals"
            className="inline-block bg-mcn-secondary text-white px-8 py-4 
            rounded-xl font-semibold text-lg border-2 border-mcn-secondary 
            hover:bg-transparent hover:text-white transition-all duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="inline-block bg-transparent text-white px-8 py-4 
            rounded-xl font-semibold text-lg border-2 border-white 
            hover:bg-white hover:text-mcn-dark transition-all duration-200"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;