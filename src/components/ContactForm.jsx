import useHubspotForm from '../hooks/useHubspotForm'

const ContactForm = () => {
  useHubspotForm({
    portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID,
    formId: import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID,
    targetId: 'hubspot-contact-form-component'
  })

  return (
    <div id="hubspot-contact-form-component" className="hubspot-form-wrapper min-h-64" />
  )
}

export default ContactForm;