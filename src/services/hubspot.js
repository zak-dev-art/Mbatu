const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;

export const submitToHubSpot = async (formData) => {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

  const payload = {
    fields: Object.entries(formData).map(([name, value]) => ({
      name,
      value: Array.isArray(value) ? value.join('; ') : value,
    })),
    context: {
      pageUri: window.location.href,
      pageName: document.title,
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response.json();
};