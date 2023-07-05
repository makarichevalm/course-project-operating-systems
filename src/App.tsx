import './App.css';

import Page1 from '@pages/Page1';
import Page2 from '@pages/Page2';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

function App() {
    return (
        <Router>
            <nav className={styles.navigation}>
                <Link to="/">Home</Link>
                <Link to="/page2">About</Link>
            </nav>
            <Routes>
                <Route path="/page2" element={<Page2 />} />
                <Route path="/" element={<Page1 />} />
            </Routes>
        </Router>
    );
}

export default App;
