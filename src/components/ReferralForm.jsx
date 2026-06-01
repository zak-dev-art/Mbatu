import useHubspotForm from '../hooks/useHubspotForm'

const ReferralForm = ({ type }) => {
  const formId = type === 'professional'
    ? import.meta.env.VITE_HUBSPOT_REFERRAL_FORM_ID
    : import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID

  const targetId = type === 'professional' ? 'hubspot-referral-form-component' : 'hubspot-contact-form-component'

  useHubspotForm({
    portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID,
    formId,
    targetId
  })

  return <div id={targetId} className="hubspot-form-wrapper min-h-64" />
}

export default ReferralForm;