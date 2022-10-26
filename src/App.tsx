import { Home } from './pages/Home/Home';
import { ProjectsPage } from './pages/Projects/Projects';
import { ContactsPage } from './pages/Contacts/Contacts';
import { PortfolioPage } from './pages/Portfolio/Portfolio';
import { Login } from './pages/admin/Login/Login';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contacts" element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about" element={<ContactsPage />} />
            </Routes>
        </BrowserRouter>
    );
};
