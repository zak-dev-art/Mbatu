import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitReferral } from '../services/hubspot'

export default function Referrals() {
  const [activeTab, setActiveTab] = useState('professional')

  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-mcn-dark mb-6">Make a Referral</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-mcn-primary to-mcn-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We accept referrals from both professionals and individuals. Choose the appropriate form below to get started.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <button
                type="button"
                onClick={() => setActiveTab('professional')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'professional'
                    ? 'bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-mcn-dark'
                }`}
              >
                Professional Referral
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('self')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'self'
                    ? 'bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white shadow-lg'
                    : 'text-gray-600 hover:text-mcn-dark'
                }`}
              >
                Self Referral
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-mcn-page">
        <div className="max-w-2xl mx-auto">
          {activeTab === 'professional' && <ProfessionalReferralForm />}
          {activeTab === 'self' && <SelfReferralForm />}
        </div>
      </section>
    </main>
  )
}

function ProfessionalReferralForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (data) => {
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitReferral({
        firstname:      data.participant_firstname || '',
        lastname:       data.participant_lastname  || '',
        email:          data.referrer_email        || '',
        phone:          data.referrer_phone        || '',
        referral_type:  'Professional Referral',
        referrer_name:  data.referrer_name         || '',
        organisation:   data.organisation          || '',
        referrer_role:  data.referrer_role         || '',
        age:            data.age                   || '',
        services:       Array.isArray(data.services)
                          ? data.services.join(', ')
                          : data.services || '',
        message:        data.notes                 || '',
      })
      setStatus('success')
      reset()
    } catch (err) {
      console.error('Referral submission failed:', err)
      setStatus('error')
      setErrorMsg(err.message || 'Submission failed')
    }
  }

  const inputClass = `w-full border border-mcn-border rounded-xl px-4 py-3 text-mcn-dark text-sm focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition`
  const labelClass = `block text-sm font-medium text-mcn-dark mb-1`

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-mcn-border">
      <h2 className="text-2xl font-bold text-mcn-dark mb-6">Professional Referral</h2>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="text-green-800 font-semibold text-sm">Referral submitted successfully!</p>
            <p className="text-green-700 text-sm mt-1">Our team will be in touch within 1 business day.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-700 text-sm font-medium">{errorMsg || 'Something went wrong. Please try again.'}</p>
          <p className="text-red-600 text-xs mt-1">If the problem continues please call us on 0412 025 261</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <p className="text-sm font-semibold text-mcn-muted uppercase tracking-wide">Referrer Details</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Your Name <span className="text-red-500">*</span></label>
            <input
              {...register('referrer_name', { required: 'Referrer name is required' })}
              className={inputClass}
              placeholder="Your full name"
            />
            {errors.referrer_name && <p className="text-red-600 text-xs mt-2">{errors.referrer_name.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Your Role / Title</label>
            <input
              {...register('referrer_role')}
              className={inputClass}
              placeholder="E.g. General Practitioner"
            />
          </div>

          <div>
            <label className={labelClass}>Organisation</label>
            <input
              {...register('organisation')}
              className={inputClass}
              placeholder="Organisation / clinic"
            />
          </div>

          <div>
            <label className={labelClass}>Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              {...register('referrer_email', { required: 'Email is required' })}
              className={inputClass}
              placeholder="you@example.com"
            />
            {errors.referrer_email && <p className="text-red-600 text-xs mt-2">{errors.referrer_email.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Phone</label>
            <input
              {...register('referrer_phone')}
              className={inputClass}
              placeholder="0412 000 000"
            />
          </div>
        </div>

        <p className="text-sm font-semibold text-mcn-muted uppercase tracking-wide">Participant Details</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Participant First Name</label>
            <input
              {...register('participant_firstname')}
              className={inputClass}
              placeholder="First name"
            />
          </div>

          <div>
            <label className={labelClass}>Participant Last Name</label>
            <input
              {...register('participant_lastname')}
              className={inputClass}
              placeholder="Last name"
            />
          </div>

          <div>
            <label className={labelClass}>Age</label>
            <input
              {...register('age')}
              className={inputClass}
              placeholder="Age"
            />
          </div>

          <div>
            <label className={labelClass}>Preferred Contact Method</label>
            <select {...register('preferred_contact')} className={inputClass}>
              <option value="">Select one</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="SMS">SMS</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Services Requested</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Nursing Care" {...register('services')} />
              <span>Nursing Care</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Disability Support" {...register('services')} />
              <span>Disability Support</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Home Care" {...register('services')} />
              <span>Home Care</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Other" {...register('services')} />
              <span>Other</span>
            </label>
          </div>
        </div>

        <div>
          <label className={labelClass}>Additional Notes</label>
          <textarea
            {...register('notes')}
            rows={6}
            className={inputClass}
            placeholder="Please include any relevant referral information"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white hover:shadow-lg transition-all duration-300"
        >
          Submit Referral
        </button>
      </form>
    </div>
  )
}

function SelfReferralForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (data) => {
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitReferral({
        firstname:      data.participant_firstname || '',
        lastname:       data.participant_lastname  || '',
        email:          data.participant_email       || '',
        phone:          data.participant_phone       || '',
        referral_type:  'Self Referral',
        referrer_name:  data.participant_firstname ? `${data.participant_firstname} ${data.participant_lastname || ''}`.trim() : '',
        organisation:   'Self Referral',
        age:            data.age                   || '',
        services:       Array.isArray(data.services)
                          ? data.services.join(', ')
                          : data.services || '',
        message:        data.notes                 || '',
      })
      setStatus('success')
      reset()
    } catch (err) {
      console.error('Referral submission failed:', err)
      setStatus('error')
      setErrorMsg(err.message || 'Submission failed')
    }
  }

  const inputClass = `w-full border border-mcn-border rounded-xl px-4 py-3 text-mcn-dark text-sm focus:outline-none focus:ring-2 focus:ring-mcn-primary focus:border-transparent transition`
  const labelClass = `block text-sm font-medium text-mcn-dark mb-1`

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-mcn-border">
      <h2 className="text-2xl font-bold text-mcn-dark mb-6">Self Referral</h2>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="text-green-800 font-semibold text-sm">Referral submitted successfully!</p>
            <p className="text-green-700 text-sm mt-1">Our team will be in touch within 1 business day.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-700 text-sm font-medium">{errorMsg || 'Something went wrong. Please try again.'}</p>
          <p className="text-red-600 text-xs mt-1">If the problem continues please call us on 0412 025 261</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name <span className="text-red-500">*</span></label>
            <input
              {...register('participant_firstname', { required: 'First name is required' })}
              className={inputClass}
              placeholder="First name"
            />
            {errors.participant_firstname && <p className="text-red-600 text-xs mt-2">{errors.participant_firstname.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Last Name <span className="text-red-500">*</span></label>
            <input
              {...register('participant_lastname', { required: 'Last name is required' })}
              className={inputClass}
              placeholder="Last name"
            />
            {errors.participant_lastname && <p className="text-red-600 text-xs mt-2">{errors.participant_lastname.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              {...register('participant_email', { required: 'Email is required' })}
              className={inputClass}
              placeholder="you@example.com"
            />
            {errors.participant_email && <p className="text-red-600 text-xs mt-2">{errors.participant_email.message}</p>}
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              {...register('participant_phone')}
              className={inputClass}
              placeholder="0412 000 000"
            />
          </div>
          <div>
            <label className={labelClass}>Age</label>
            <input
              {...register('age')}
              className={inputClass}
              placeholder="Age"
            />
          </div>
          <div>
            <label className={labelClass}>Preferred Contact Method</label>
            <select {...register('preferred_contact')} className={inputClass}>
              <option value="">Select one</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="SMS">SMS</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Services Requested</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Nursing Care" {...register('services')} />
              <span>Nursing Care</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Disability Support" {...register('services')} />
              <span>Disability Support</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Home Care" {...register('services')} />
              <span>Home Care</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-mcn-border px-4 py-3">
              <input type="checkbox" value="Other" {...register('services')} />
              <span>Other</span>
            </label>
          </div>
        </div>

        <div>
          <label className={labelClass}>Additional Notes</label>
          <textarea
            {...register('notes')}
            rows={6}
            className={inputClass}
            placeholder="Please include any relevant referral information"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-mcn-primary to-mcn-secondary text-white hover:shadow-lg transition-all duration-300"
        >
          Submit Referral
        </button>
      </form>
    </div>
  )
}
