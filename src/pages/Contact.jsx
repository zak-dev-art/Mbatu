import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { submitToHubSpot } from '../services/hubspot';
import useInView from '../hooks/useInView';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Mbatu Care Nursing';
  }, []);

  const [submitStatus, setSubmitStatus] = useState(null);
  const contactForm = useForm();

  const [contactRef, contactInView] = useInView();

  const onSubmit = async (data) => {
    try {
      await submitToHubSpot(data);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      contactForm.reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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
                      <p className="text-gray-600">(02) XXXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mcn-primary to-mcn-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mcn-dark mb-4">Follow Us</h3>
                      <div className="flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-mcn-primary transition-colors flex items-center">
                          <span className="text-2xl mr-2">📘</span>
                          <span className="font-medium">Facebook</span>
                        </a>
                        <a
                          href="https://www.instagram.com/mbatu_care_nursing_/?hl=en"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="MCN Instagram"
                          className="text-gray-600 hover:text-mcn-primary transition-colors flex items-center"
                        >
                          <img
                            src="/image/social/Insta.webp"
                            alt="Instagram"
                            className="h-6 w-6 object-contain hover:opacity-75 transition-opacity duration-200 mr-2"
                          />
                          <span className="font-medium">Instagram</span>
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
              <form onSubmit={contactForm.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Name *</label>
                    <input
                      {...contactForm.register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Email *</label>
                    <input
                      type="email"
                      {...contactForm.register('email', { required: 'Email is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-mcn-dark mb-2">Phone</label>
                  <input
                    {...contactForm.register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-mcn-dark mb-2">Message *</label>
                  <textarea
                    {...contactForm.register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>

              {submitStatus && (
                <div className={`mt-6 p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;