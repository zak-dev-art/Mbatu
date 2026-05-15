import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitCareers } from '../services/hubspot';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import useInView from '../hooks/useInView';

const Careers = () => {
  useEffect(() => {
    document.title = 'Careers - Mbatu Care Nursing';
  }, []);

  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const applicationForm = useForm();

  const [careersRef, careersInView] = useInView();

  const jobs = [
    {
      title: 'Registered Nurse',
      types: ['Full-time', 'Part-time', 'Casual'],
      location: 'ACT/NSW',
      description: 'Provide high-quality nursing care to clients in community settings. Experience in community nursing preferred.',
    },
    {
      title: 'Disability Support Worker',
      types: ['Full-time', 'Part-time', 'Casual'],
      location: 'ACT',
      description: 'Assist clients with daily living activities and provide companionship. Training provided.',
    },
    {
      title: 'Enrolled Nurse',
      types: ['Casual'],
      location: 'NSW',
      description: 'Support registered nurses in delivering care plans and maintaining client health records.',
    },
  ];

  const onApplicationSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      await submitCareers({
        firstname: data.firstname || data.fullName?.split(' ')[0] || '',
        lastname: data.lastname || data.fullName?.split(' ')[1] || '',
        email: data.email || '',
        phone: data.phone || '',
        role: data.role || selectedJob?.title || '',
        cover_letter: data.coverLetter || '',
      });
      setSubmitSuccess(true);
      setShowModal(false);
      applicationForm.reset();
    } catch (error) {
      console.error('Careers form error:', error);
      setSubmitError(
        'Application failed to send. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section ref={careersRef} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${careersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-mcn-dark mb-6">Careers at MCN</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mcn-primary to-mcn-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our dedicated team of healthcare professionals. We're committed to providing excellent care and creating a supportive work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-mcn-dark mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      {job.types.map((type, index) => (
                        <span key={index} className="bg-mcn-light text-mcn-primary rounded-full px-3 py-1 text-xs font-medium">{type}</span>
                      ))}
                      <span className="bg-mcn-light text-mcn-primary rounded-full px-3 py-1 text-xs font-medium">{job.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setShowModal(true);
                    }}
                    className="bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-mcn-dark mb-2">Apply for {selectedJob?.title}</h2>
                  <p className="text-gray-600">{selectedJob?.types.join(', ')} • {selectedJob?.location}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>

              <form onSubmit={applicationForm.handleSubmit(onApplicationSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Full Name *</label>
                    <input
                      {...applicationForm.register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Email *</label>
                    <input
                      type="email"
                      {...applicationForm.register('email', { required: 'Email is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Phone *</label>
                    <input
                      {...applicationForm.register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-mcn-dark mb-2">Role Applying For</label>
                    <input
                      value={selectedJob?.title}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-mcn-dark mb-2">CV/Resume *</label>
                  <input
                    type="file"
                    {...applicationForm.register('cv', { required: 'CV/Resume is required' })}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-l-xl file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-mcn-dark mb-2">Cover Letter</label>
                  <textarea
                    {...applicationForm.register('coverLetter')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us why you're interested in this role..."
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-xl hover:bg-gray-300 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Careers;