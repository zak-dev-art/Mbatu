// HubSpot CRM Integration
// Portal: 148444010 (EU region)
// Notifications forwarded to mbatunursing@gmail.com
// This email is never displayed on the website.

const PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;

const FORM_IDS = {
  referral: import.meta.env.VITE_HUBSPOT_REFERRAL_FORM_ID,
  contact: import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID,
  careers: import.meta.env.VITE_HUBSPOT_CAREERS_FORM_ID,
};

async function submitToHubSpotForm(formType, data) {
  const FORM_ID = FORM_IDS[formType];

  if (!PORTAL_ID || !FORM_ID) {
    console.error(
      `HubSpot credentials missing for form type: ${formType}. ` +
      'Check your .env file.'
    );
    throw new Error('HubSpot credentials not configured.');
  }

  const fields = Object.entries(data)
    .filter(([, value]) =>
      value !== undefined &&
      value !== null &&
      value !== ''
    )
    .map(([name, value]) => ({
      name,
      value: Array.isArray(value) ? value.join(', ') : String(value),
    }));

  const payload = {
    fields,
    context: {
      pageUri: window.location.href,
      pageName: document.title,
    },
  };

  console.log(`Submitting to HubSpot [${formType}]:`, payload);

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  const responseText = await response.text();
  console.log(`HubSpot [${formType}] status:`, response.status);
  console.log(`HubSpot [${formType}] response:`, responseText);

  if (!response.ok) {
    throw new Error(
      `HubSpot submission failed [${formType}]: ` +
      `${response.status} — ${responseText}`
    );
  }

  return JSON.parse(responseText);
}

export const submitReferral = (data) =>
  submitToHubSpotForm('referral', data);

export const submitContact = (data) =>
  submitToHubSpotForm('contact', data);

export const submitCareers = (data) =>
  submitToHubSpotForm('careers', data);
