// HubSpot CRM Integration
// Portal: 148444010 (EU region)
// Notifications go to mbatunursing@gmail.com

const PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID
const FORM_IDS = {
  referral: import.meta.env.VITE_HUBSPOT_REFERRAL_FORM_ID,
  contact:  import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID,
  careers:  import.meta.env.VITE_HUBSPOT_CAREERS_FORM_ID,
}

async function submitToHubSpotForm(formType, data) {
  const FORM_ID = FORM_IDS[formType]

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('HubSpot Submission Attempt')
  console.log('Form type:', formType)
  console.log('Portal ID:', PORTAL_ID)
  console.log('Form ID:', FORM_ID)
  console.log('Data:', data)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  if (!PORTAL_ID) {
    throw new Error(
      'VITE_HUBSPOT_PORTAL_ID is missing from .env file'
    )
  }
  if (!FORM_ID) {
    throw new Error(
      `VITE_HUBSPOT_${formType.toUpperCase()}_FORM_ID is missing from .env file`
    )
  }

  const fields = Object.entries(data)
    .filter(([, value]) =>
      value !== undefined &&
      value !== null &&
      value !== '')
    .map(([name, value]) => ({
      name,
      value: Array.isArray(value)
        ? value.join(', ')
        : String(value),
    }))

  if (fields.length === 0) {
    throw new Error('No form data to submit')
  }

  const payload = {
    fields,
    context: {
      pageUri:  window.location.href,
      pageName: document.title,
    },
  }

  console.log('Payload being sent:', JSON.stringify(payload, null, 2))

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`
  console.log('Submitting to URL:', url)

  const response = await fetch(url, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
  })

  const responseText = await response.text()
  console.log('HubSpot response status:', response.status)
  console.log('HubSpot response body:', responseText)

  if (!response.ok) {
    throw new Error(
      `HubSpot API error ${response.status}: ${responseText}`
    )
  }

  return { success: true, status: response.status }
}

export const submitReferral = (data) =>
  submitToHubSpotForm('referral', data)

export const submitContact = (data) =>
  submitToHubSpotForm('contact', data)

export const submitCareers = (data) =>
  submitToHubSpotForm('careers', data)
