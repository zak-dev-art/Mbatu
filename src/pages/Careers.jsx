import { useEffect, useState } from 'react';
import useHubspotForm from '../hooks/useHubspotForm'
import useInView from '../hooks/useInView';

const Careers = () => {
  useEffect(() => {
    document.title = 'Careers - Mbatu Care Nursing';
  }, []);

  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  function HubSpotCareersForm() {
    useHubspotForm({
      portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID,
      formId: import.meta.env.VITE_HUBSPOT_CAREERS_FORM_ID,
      targetId: 'hubspot-careers-form'
    })
    return (
      <div 
        id="hubspot-careers-form"
        className="hubspot-form-wrapper min-h-64"
      />
    )
  }

  return (
    <div className="min-h-screen bg-white">

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

              <div className="p-4">
                <HubSpotCareersForm />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;