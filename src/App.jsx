import './App.css';

import FormAdd from '@components/FormAdd/FormAdd';
import FormChange from '@components/FormChange/FormChange';
import MainPage from '@pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/create" element={<FormAdd />} />
                    <Route path="/change" element={<FormChange />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
