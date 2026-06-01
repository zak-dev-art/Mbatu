import { useEffect } from 'react'

export default function useHubspotForm({ portalId, formId, targetId }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.async = true
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: portalId,
          formId: formId,
          target: `#${targetId}`,
          onFormSubmitted: () => {
            console.log(`HubSpot form ${formId} submitted successfully`)
          }
        })
      }
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [portalId, formId, targetId])
}
