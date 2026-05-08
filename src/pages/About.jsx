import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import TeamCard from '../components/TeamCard';
import useInView from '../hooks/useInView';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Mbatu Care Nursing';
  }, []);

  const [whoWeAreRef, whoWeAreInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [acknowledgementRef, acknowledgementInView] = useInView();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Who We Are */}
      <section ref={whoWeAreRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${whoWeAreInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-mcn-dark mb-6">Who We Are</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mcn-primary to-mcn-secondary mx-auto mb-8"></div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Mbatu Care Nursing (MCN) is a dedicated community nursing and disability support provider serving the ACT and NSW regions of Australia. We are committed to delivering compassionate, person-centred care that empowers individuals to live their best lives.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our team of qualified healthcare professionals brings years of experience in community nursing, disability support, and aged care. We understand that every person has unique needs, and we tailor our services accordingly.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              As an NDIS registered provider, we work closely with participants, their families, and support coordinators to ensure the highest standards of care and support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className={`py-20 bg-white transition-all duration-1000 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mcn-dark mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Respect</h3>
              <p className="text-gray-600 leading-relaxed">We treat everyone with dignity and respect their individual choices and preferences.</p>
            </div>
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">We provide care with empathy and understanding, supporting emotional well-being.</p>
            </div>
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl">🌈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Diversity</h3>
              <p className="text-gray-600 leading-relaxed">We celebrate cultural diversity and provide inclusive care for all backgrounds.</p>
            </div>
            <div className="bg-gradient-to-br from-mcn-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mcn-primary/10 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl">💪</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-mcn-dark">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">We empower individuals to achieve independence and reach their full potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mcn-dark mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the dedicated professionals who make a difference every day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard name="Sarah Johnson" role="Registered Nurse" />
            <TeamCard name="Michael Chen" role="Disability Support Worker" />
            <TeamCard name="Emma Wilson" role="Enrolled Nurse" />
          </div>
        </div>
      </section>

      {/* Acknowledgement of Country */}
      <section ref={acknowledgementRef} className={`py-20 bg-gradient-to-br from-mcn-dark to-mcn-primary text-white transition-all duration-1000 ${acknowledgementInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Acknowledgement of Country</h2>
          <p className="text-xl mb-8 leading-relaxed">
            We acknowledge the Traditional Custodians of the land on which we work, the Ngunnawal people of the ACT and the various Aboriginal and Torres Strait Islander peoples across NSW. We pay our respects to Elders past, present, and emerging.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl inline-block">
            <img src="/image/logo_Transparent_NoBuffer 2.png" alt="MCN Logo" className="mx-auto h-20" onError={(e) => { e.target.style.display = 'none' }} />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;