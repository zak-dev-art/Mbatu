# Mbatu Care Nursing (MCN) Website

A React + Vite website for Mbatu Care Nursing, a community nursing and disability support provider in the ACT and NSW regions of Australia.

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- React Hook Form
- HubSpot Forms API

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your HubSpot credentials
4. Start the development server: `npm run dev`
5. Build for production: `npm run build`

## HubSpot Configuration

To enable form submissions, you need to set up a HubSpot account and create forms for referrals and contact.

1. Create a HubSpot portal
2. Create forms for professional referrals, self-referrals, and contact
3. Get the portal ID and form IDs
4. Add them to your `.env` file:
   - `VITE_HUBSPOT_PORTAL_ID`: Your HubSpot portal ID
   - `VITE_HUBSPOT_FORM_ID`: The form ID for submissions

## Project Structure

- `src/pages/`: Page components
- `src/components/`: Reusable components
- `src/services/`: API services (HubSpot)
- `src/assets/`: Static assets (empty, images in /image/)
- `image/`: Image assets at project root

## Features

- Responsive design with Tailwind CSS
- React Router for navigation
- Form handling with React Hook Form
- HubSpot integration for form submissions
- WhatsApp contact button
- NDIS provider badge
- Photo gallery and team sections
