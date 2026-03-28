import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Loading...')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

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
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>DarktraceSec Threat Detection Platform</h1>
      <h2>System Status</h2>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Service:</strong> {service}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  )
}

export default App