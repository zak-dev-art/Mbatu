import { useForm } from 'react-hook-form';
import { submitReferral } from '../services/hubspot';

const ReferralForm = ({ type }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await submitReferral(data);
      alert(`${type} referral submitted successfully!`);
      reset();
    } catch (error) {
      alert('Failed to submit referral. Please try again.');
    }
  };

  if (type === 'professional') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Referrer Name</label>
          <input
            {...register('referrerName', { required: 'Referrer name is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
          />
          {errors.referrerName && <p className="text-red-500 text-sm mt-1">{errors.referrerName.message}</p>}
        </div>
        {/* Add other professional fields */}
        <button type="submit" className="w-full bg-mcn text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors">
          Submit Professional Referral
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <input
          {...register('firstName', { required: 'First name is required' })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mcn"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
      </div>
      {/* Add other self referral fields */}
      <button type="submit" className="w-full bg-mcn text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors">
        Submit Self Referral
      </button>
    </form>
  );
};

export default ReferralForm;