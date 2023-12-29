import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import './App.css'
import { useState } from 'react'
import { Container } from 'react-bootstrap'




function App() {

  const [language, setLanguage] = useState('ENG')

  return (
    <>
      <Navigation language={language} setLanguage={setLanguage} />
      <Container>
        <AppRoutes language={language} />
      </Container>
      <Footer />
    </>
  )
}

export default App
