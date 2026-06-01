import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import useInView from '../hooks/useInView';
import useHubspotForm from '../hooks/useHubspotForm'

const Referrals = () => {
  useEffect(() => {
    document.title = 'Referrals - Mbatu Care Nursing';
  }, []);

  const [activeTab, setActiveTab] = useState('professional');

  const [referralsRef, referralsInView] = useInView();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section ref={referralsRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${referralsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-mcn-dark mb-6">Make a Referral</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mcn-primary to-mcn-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We accept referrals from both professionals and individuals. Choose the appropriate form below to get started.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <button
                onClick={() => setActiveTab('professional')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'professional'
                    ? 'bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-mcn-dark'
                }`}
              >
                Professional Referral
              </button>
              <button
                onClick={() => setActiveTab('self')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'self'
                    ? 'bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-mcn-dark'
                }`}
              >
                Self Referral
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* Professional Referral */}
            {activeTab === 'professional' && (
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏥</span>
                  </div>
                  <h2 className="text-3xl font-bold text-mcn-dark">Professional Referral</h2>
                </div>
                {/** HubSpot embedded form replaces custom form */}
                {(() => {
                  const PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID
                  const REFERRAL_FORM_ID = import.meta.env.VITE_HUBSPOT_REFERRAL_FORM_ID

                  function HubSpotReferralForm() {
                    useHubspotForm({
                      portalId: PORTAL_ID,
                      formId: REFERRAL_FORM_ID,
                      targetId: 'hubspot-referral-form'
                    })
                    return (
                      <div 
                        id="hubspot-referral-form"
                        className="hubspot-form-wrapper min-h-64"
                      />
                    )
                  }

                  return <HubSpotReferralForm />
                })()}
              </div>
            )}

            {/* Self Referral */}
            {activeTab === 'self' && (
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👤</span>
                  </div>
                  <h2 className="text-3xl font-bold text-mcn-dark">Self Referral</h2>
                </div>
                {(() => {
                  const PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID
                  const REFERRAL_FORM_ID = import.meta.env.VITE_HUBSPOT_REFERRAL_FORM_ID

                  function HubSpotReferralForm() {
                    useHubspotForm({
                      portalId: PORTAL_ID,
                      formId: REFERRAL_FORM_ID,
                      targetId: 'hubspot-referral-form'
                    })
                    return (
                      <div 
                        id="hubspot-referral-form"
                        className="hubspot-form-wrapper min-h-64"
                      />
                    )
                  }

                  return <HubSpotReferralForm />
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Referrals;