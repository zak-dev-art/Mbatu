import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import useInView from '../hooks/useInView';

const Home = () => {
  useEffect(() => {
    document.title = 'Home - Mbatu Care Nursing';
  }, []);

  const [whyChooseRef, whyChooseInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [galleryRef, galleryInView] = useInView();
  const [ndisRef, ndisInView] = useInView();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      {/* Why Choose MCN Section */}
      <section ref={whyChooseRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${whyChooseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mcn-dark mb-4">Why Choose MCN</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience compassionate, professional care that puts you first</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Person-centred care</h3>
              <p className="text-gray-600 leading-relaxed">We put you at the centre of everything we do, tailoring our services to your unique needs and preferences.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Qualified staff</h3>
              <p className="text-gray-600 leading-relaxed">Our team consists of highly trained and experienced healthcare professionals dedicated to your well-being.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">🕒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Flexible support</h3>
              <p className="text-gray-600 leading-relaxed">We offer flexible scheduling and support options to fit your lifestyle and requirements.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Culturally inclusive</h3>
              <p className="text-gray-600 leading-relaxed">We respect and embrace cultural diversity, providing care that honours your background and values.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">NDIS-focused</h3>
              <p className="text-gray-600 leading-relaxed">Specialised in NDIS services, we help you navigate and maximise your funding for quality care.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">🏘️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Community approach</h3>
              <p className="text-gray-600 leading-relaxed">We believe in building strong community connections and supporting local engagement.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">NDIS and Private Support</h3>
              <p className="text-gray-600 leading-relaxed">We support both NDIS funded and privately funded participants. Contact us to discuss your options regardless of your funding situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className={`py-20 bg-white transition-all duration-1000 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mcn-dark mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive care solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 group">
              <div className="w-16 h-16 bg-mcn-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-mcn-dark text-center">Community Nursing</h3>
              <p className="text-gray-600 text-center leading-relaxed">Comprehensive nursing care in your home</p>
            </div>
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 group">
              <div className="w-16 h-16 bg-mcn-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-mcn-dark text-center">Disability Support</h3>
              <p className="text-gray-600 text-center leading-relaxed">Daily living assistance and support</p>
            </div>
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 group">
              <div className="w-16 h-16 bg-mcn-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-mcn-dark text-center">SIL & Respite</h3>
              <p className="text-gray-600 text-center leading-relaxed">Supported independent living</p>
            </div>
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 group">
              <div className="w-16 h-16 bg-mcn-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-mcn-dark text-center">Transportation</h3>
              <p className="text-gray-600 text-center leading-relaxed">Safe and reliable transport services</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section ref={galleryRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mcn-dark mb-4">Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Mbatu Care is passionate about community involvement and giving back through supporting local events and programs that create positive opportunities for young people.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img src="/image/team/PHOTO-2026-03-25-18-40-16.jpg" alt="Care photo 1" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.target.style.display = 'none' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img src="/image/team/PHOTO-2026-03-25-18-46-21.jpg" alt="Care photo 2" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.target.style.display = 'none' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img src="/image/team/PHOTO-2026-03-25-19-07-05.jpg" alt="Care photo 3" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.target.style.display = 'none' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img src="/image/team/Picture1.png" alt="Care photo 4" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.target.style.display = 'none' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Badge */}
      <section ref={ndisRef} className={`py-20 bg-white transition-all duration-1000 ${ndisInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-mcn-dark mb-8">NDIS Registered Provider</h2>
          <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg border border-mcn-primary/10 inline-block">
            <img src="/image/badges/NDIS.jfif" alt="NDIS Registered Provider" className="mx-auto h-32 mb-6" onError={(e) => { e.target.style.display = 'none' }} />
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We are proud to be a registered NDIS provider, committed to delivering high-quality disability and community care services.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;