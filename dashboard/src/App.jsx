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

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>DarktraceSec Threat Detection Platform</h1>

      <h2>System Status</h2>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Service:</strong> {service}</p>
      <p><strong>Message:</strong> {message}</p>

      <h2>Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts avaliable.</p>
      ) : (
        alerts.map((alert, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #444',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: "1rem"
            }}
          >
            <p><strong>Type:</strong> {alert.alert_type}</p>
            <p><strong>Severity:</strong> {alert.severity}</p>
            <p><strong>Message:</strong> {alert.message}</p>
            <p><strong>IP Address:</strong> {alert.ip_address}</p>
            <p><strong>User:</strong> {alert.user}</p>
            <p><strong>Event Count:</strong> {alert.event_count}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App