import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useHubspotTracking() {
  const location = useLocation()

  useEffect(() => {
    const _hsq = window._hsq = window._hsq || []
    _hsq.push(['setPath', location.pathname])
    _hsq.push(['trackPageView'])
    console.log('HubSpot tracked page:', location.pathname)
  }, [location.pathname])
}
