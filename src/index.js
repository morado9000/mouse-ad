import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AppHeader from './features/pages/AppHeader';
import AboutPage from './features/pages/AboutPage';
import ListPage from './features/pages/ListPage';
import ContactPage from './features/pages/ContactPage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<AppHeader />}>
            <Route path="home" element={<App />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="list" element={<ListPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route index element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
