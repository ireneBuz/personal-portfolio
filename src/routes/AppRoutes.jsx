import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

const AppRoutes = ({ language }) => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage language={language} />} />
        </Routes>
    )
}

export default AppRoutes