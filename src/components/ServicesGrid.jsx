const ServicesGrid = () => {
  const services = [
    { title: 'Community Nursing', description: 'Comprehensive nursing care in your home' },
    { title: 'Disability Support', description: 'Daily living assistance and support' },
    { title: 'SIL & Respite', description: 'Supported independent living' },
    { title: 'Transportation', description: 'Safe and reliable transport services' },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;