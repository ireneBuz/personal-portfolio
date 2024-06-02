import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutMePage from '../pages/AboutMePage/AboutMePage'

const AppRoutes = ({ language }) => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage language={language} />} />
            <Route path={'/about-me-section'} element={<AboutMePage language={language} />} />
        </Routes>
    )
}

export default AppRoutes