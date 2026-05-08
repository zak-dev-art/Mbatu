const TeamCard = ({ name, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="w-24 h-24 bg-mcn rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-white text-3xl">👤</span>
      </div>
      <h3 className="text-xl font-semibold text-mcn mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamCard;