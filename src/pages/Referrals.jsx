import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { submitReferral } from '../services/hubspot';
import useInView from '../hooks/useInView';

const Referrals = () => {
  useEffect(() => {
    document.title = 'Referrals - Mbatu Care Nursing';
  }, []);

  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('professional');

  const professionalForm = useForm();
  const selfForm = useForm();

  const [referralsRef, referralsInView] = useInView();

  const onProfessionalSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      await submitReferral({
        firstname: data.referrerName?.split(' ')[0] || '',
        lastname: data.referrerName?.split(' ')[1] || '',
        organisation: data.organisation || '',
        role: data.role || '',
        participant_name: data.participantName || '',
        participant_dob: data.participantDOB || '',
        ndis_number: data.ndisNumber || '',
        phone: data.contactNumber || '',
        email: data.email || '',
        services: Array.isArray(data.services) ? data.services.join(', ') : data.services || '',
        message: data.notes || '',
      });
      setSubmitSuccess(true);
      professionalForm.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Professional referral submission error:', error);
      setSubmitError(
        error.message.includes('credentials')
          ? 'System configuration error. Please call us directly.'
          : 'Submission failed. Please try again or contact us directly on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSelfSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      await submitReferral({
        firstname: data.firstName || '',
        lastname: data.lastName || '',
        email: data.email || '',
        phone: data.phone || '',
        ndis_number: data.ndisNumber || '',
        services: Array.isArray(data.services) ? data.services.join(', ') : data.services || '',
        message: data.notes || '',
      });
      setSubmitSuccess(true);
      selfForm.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Self referral submission error:', error);
      setSubmitError(
        error.message.includes('credentials')
          ? 'System configuration error. Please call us directly.'
          : 'Submission failed. Please try again or contact us directly on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form onSubmit={professionalForm.handleSubmit(onProfessionalSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Referrer Name</label>
                  <input
                    {...professionalForm.register('referrerName', { required: 'Referrer name is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                  {professionalForm.formState.errors.referrerName && (
                    <p className="text-red-500 text-sm mt-1">{professionalForm.formState.errors.referrerName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organisation</label>
                  <input
                    {...professionalForm.register('organisation', { required: 'Organisation is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input
                    {...professionalForm.register('role', { required: 'Role is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Participant Name</label>
                  <input
                    {...professionalForm.register('participantName', { required: 'Participant name is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Participant DOB</label>
                  <input
                    type="date"
                    {...professionalForm.register('participantDOB', { required: 'Date of birth is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NDIS Number</label>
                  <input
                    {...professionalForm.register('ndisNumber')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    {...professionalForm.register('contactNumber', { required: 'Contact number is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    {...professionalForm.register('email', { required: 'Email is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Services Needed</label>
                  <div className="space-y-2">
                    {['Community Nursing', 'Disability Support', 'SIL & Respite', 'Transportation'].map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          {...professionalForm.register('services')}
                          value={service}
                          className="mr-2"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    {...professionalForm.register('notes')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
                  />
                </div>

                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Referral submitted successfully!</p>
                      <p className="text-green-700 text-sm mt-1">Thank you. Our team will be in touch within 1 business day.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Professional Referral'
                  )}
                </button>
              </form>
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
                <form onSubmit={selfForm.handleSubmit(onSelfSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-mcn-dark mb-2">First Name *</label>
                      <input
                        {...selfForm.register('firstName', { required: 'First name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-mcn-dark mb-2">Last Name *</label>
                      <input
                        {...selfForm.register('lastName', { required: 'Last name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-mcn-dark mb-2">Email *</label>
                      <input
                        type="email"
                        {...selfForm.register('email', { required: 'Email is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-mcn-dark mb-2">Phone *</label>
                      <input
                        {...selfForm.register('phone', { required: 'Phone is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-mcn-dark mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        {...selfForm.register('dateOfBirth', { required: 'Date of birth is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-mcn-dark mb-2">NDIS Number (Optional)</label>
                      <input
                        {...selfForm.register('ndisNumber')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                        placeholder="Enter NDIS number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-4">Services Interested In</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['Community Nursing', 'Disability Support', 'SIL & Respite', 'Transportation'].map((service) => (
                        <label key={service} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            {...selfForm.register('services')}
                            value={service}
                            className="mr-3 text-mcn-primary focus:ring-mcn-primary"
                          />
                          <span className="text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">How did you hear about us?</label>
                    <select
                      {...selfForm.register('hearAboutUs')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="NDIS">NDIS</option>
                      <option value="Word of mouth">Word of mouth</option>
                      <option value="Online search">Online search</option>
                      <option value="Healthcare professional">Healthcare professional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Message</label>
                    <textarea
                      {...selfForm.register('message')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  {submitSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-green-800 font-semibold text-sm">Referral submitted successfully!</p>
                        <p className="text-green-700 text-sm mt-1">Thank you. Our team will be in touch within 1 business day.</p>
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white hover:shadow-lg hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Self Referral'
                    )}
                  </button>
                </form>
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