import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const requiredEnvVars = [
  'VITE_HUBSPOT_PORTAL_ID',
  'VITE_HUBSPOT_REFERRAL_FORM_ID',
  'VITE_HUBSPOT_CONTACT_FORM_ID',
  'VITE_HUBSPOT_CAREERS_FORM_ID',
];

requiredEnvVars.forEach((key) => {
  if (!import.meta.env[key]) {
    console.warn(
      `⚠️ Missing env variable: ${key}. ` +
      'Check your .env file and restart the dev server.'
    );
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
