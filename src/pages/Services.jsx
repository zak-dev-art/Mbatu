import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

const Services = () => {
  useEffect(() => {
    document.title = 'Services - Mbatu Care Nursing';
  }, []);

  const [servicesRef, servicesInView] = useInView();

  const services = [
    {
      title: 'Community Nursing',
      icon: '🏥',
      description: 'Comprehensive nursing care in your home including wound care, tracheostomy care, catheter management, injections, medication administration, chronic disease management, and health monitoring.',
    },
    {
      title: 'Disability Support & Daily Living',
      icon: '🤝',
      description: 'Personal care assistance, household tasks, meal preparation and cooking, cleaning and laundry, gardening and yard maintenance, community participation, shopping assistance.',
    },
    {
      title: 'SIL & Respite Care',
      icon: '🏠',
      description: 'Supported Independent Living programs, short-term respite care, overnight support, individualised care programs tailored to your needs.',
    },
    {
      title: 'Transportation & Community Access',
      icon: '🚗',
      description: 'Medical appointment transportation, community activity participation, social outings, shopping trips, school and work transport services.',
    },
    {
      title: 'Agency Nursing Services',
      icon: '👩‍⚕️',
      description: 'Professional nursing services for agencies and organisations requiring temporary or specialised nursing support.',
    },
    {
      title: 'Holidays & Community Experiences',
      icon: '✈️',
      description: 'Support for holiday planning and execution, community excursions, and special event participation to enhance quality of life.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <section ref={servicesRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-mcn-dark mb-6">Our Services</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mcn-primary to-mcn-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MCN supports both NDIS funded and privately funded participants across all service areas. We provide a comprehensive range of community nursing and disability support services tailored to meet your individual needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center shadow-lg mr-6 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-mcn-dark mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">
              Ready to get started? Contact us today to discuss your care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/referrals" className="inline-flex items-center bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                Make a Referral
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center bg-white text-mcn-dark px-8 py-4 rounded-full font-semibold border-2 border-mcn-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;