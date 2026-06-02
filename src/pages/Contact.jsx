import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useHubspotForm from '../hooks/useHubspotForm'
import useInView from '../hooks/useInView';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Mbatu Care Nursing';
  }, []);

  const [contactRef, contactInView] = useInView();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function HubSpotContactForm() {
    useHubspotForm({
      portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID,
      formId: import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID,
      targetId: 'hubspot-contact-page-form'
    })
    return (
      <div 
        id="hubspot-contact-page-form"
        className="hubspot-form-wrapper min-h-64"
      />
    )
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      // Simulate form submission (replace with actual API call if needed)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setSubmitError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      <section ref={contactRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-mcn-dark mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mcn-primary to-mcn-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get in touch with our team. We're here to help and answer any questions you may have.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-mcn-dark mb-8">Get in Touch</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mcn-dark mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed">11/2 Napier Close<br />Deakin ACT 2600</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mcn-dark mb-2">Email</h3>
                      <p className="text-gray-600">info@mbatucare.com.au</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mcn-dark mb-2">Phone</h3>
                      <a href="tel:+61412025261" 
                         className="text-gray-600 hover:text-mcn-primary transition-colors">
                        0412 025 261
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mcn-dark mb-4">Follow Us</h3>
                      <div className="flex space-x-6">
                        <a href="https://www.facebook.com/profile.php?id=100087892990128" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-mcn-primary transition-colors flex items-center">
                          <span className="text-2xl mr-2">📘</span>
                          <span className="font-medium">Facebook</span>
                        </a>
                        <a
                          href="https://www.instagram.com/mbatu_care_nursing_/?hl=en"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Follow MCN on Instagram"
                          className="flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200"
                          style={{
                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="white"
                            aria-hidden="true"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 
    3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 
    1.645.069 4.849 0 3.205-.012 3.584-.069 4.849
    -.149 3.225-1.664 4.771-4.919 4.919-1.266.058
    -1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07
    -3.26-.149-4.771-1.699-4.919-4.92-.058-1.265
    -.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849
    .149-3.227 1.664-4.771 4.919-4.919 1.266-.057 
    1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 
    7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 
    0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 
    2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 
    24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782
    -2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 
    0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617
    -6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 
    5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 
    000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406
    -11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000
    -2.881z"/>
                          </svg>
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div>
                <h3 className="text-2xl font-bold text-mcn-dark mb-6">Our Location</h3>
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.999!2d149.100000!3d-35.316700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE5JzAwLjAiUyAxNDnCsDA2JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MCN Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">💬</span>
                </div>
                <h2 className="text-3xl font-bold text-mcn-dark">Send us a Message</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-2">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Email *</label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-600 text-xs mt-2">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Phone</label>
                    <input
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Age</label>
                    <input
                      type="number"
                      {...register('age')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your age"
                      min="0"
                      max="150"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-mcn-dark mb-2">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-600 text-xs mt-2">{errors.message.message}</p>}
                </div>

                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-green-700 text-sm mt-1">Thank you. We'll get back to you as soon as possible.</p>
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
                      : 'bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;