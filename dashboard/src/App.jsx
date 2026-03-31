import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Loading...')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/status')
      .then((response) => response.json())
      .then((data) =>{
        setStatus(data.status)
        setService(data.service)
        setMessage(data.message)
      })
      .catch(() => {
        setStatus('offline')
        setService('Backend unavaliable')
        setMessage('Could not connect to backend API')
      })

      fetch('http://localhost:8080/api/alerts')
        .then((response) => response.json())
        .then((data) => {
          setAlerts(data)
        })
        .catch(() => {
          setAlerts([])
        })
  }, [])

  const getSeverityStyles = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'high':
        return {
          border: '1px solid #7f1d1d',
          backgroundColor: '#1f1111',
          badgeBackground: '#7f1d1d',
          badgeColor: '#ffffff'
        }
        case 'medium':
          return {
            border: '1px solid #92400e',
            backgroundColor: '#1f1811',
            badgeBackground: '#92400e',
            badgeColor: '#ffffff'
          }
          default:
            return {
              border: '1px solid #444',
              backgroundColor: '#111827',
              badgeBackground: '#374151',
              badgeColor: '#ffffff'
            }
    }
  }

  return (
    <div
      style={{ 
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        color: '#e5e7eb',
        maxWidth: '1100px',
        margin: '0 auto'
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Threat Detection Platform
      </h1>

      <div
        style={{
          border: '1px solid #374151',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          backgroundColor: '#0f172a'
        }}
      >

        <h2 sytel={{ marginTop: 0 }}>System Status</h2>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Service:</strong> {service}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>


      <h2 style={{ marginBottom: '1rem' }}>Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts avaliable.</p>
      ) : (
        alerts.map((alert, index) => {
          const severityStyles = getSeverityStyles(alert.severity)

          return (
            <div
              key={index}
              style={{
                border: severityStyles.border,
                backgroundColor: severityStyles.backgroundColor,
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                marginBottom: '1rem'
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor:severityStyles.badgeBackground,
                  color: severityStyles.badgeColor,
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                {alert.severity}
              </div>
              
            <p><strong>Type:</strong> {alert.alert_type}</p>
            <p><strong>Severity:</strong> {alert.severity}</p>
            <p><strong>Message:</strong> {alert.message}</p>
            <p><strong>IP Address:</strong> {alert.ip_address}</p>
            <p><strong>User:</strong> {alert.user || 'N/A'}</p>
            <p><strong>Event Count:</strong> {alert.event_count}</p>
          </div>
          )
        })
      )}
    </div>
  )
}

export default App