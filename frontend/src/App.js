import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SupportPage } from './pages/SupportPage';
import { CONFIG } from './data/config';
import { translations } from './data/translations';

// SEO Component
const SEOHead = () => {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = lang || CONFIG.defaultLanguage;
  const t = translations[currentLang] || translations[CONFIG.defaultLanguage];
  
  useEffect(() => {
    // Update document title
    document.title = t.meta.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = t.meta.description;
    
    // Update Open Graph tags
    const ogTags = {
      'og:title': t.meta.title,
      'og:description': t.meta.description,
      'og:type': 'website',
      'og:url': `https://secvia.app${location.pathname}`,
      'og:image': CONFIG.logos.icon,
      'og:locale': currentLang === 'ru' ? 'ru_RU' : currentLang === 'ua' ? 'uk_UA' : 'en_US'
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
    
    // Update language
    document.documentElement.lang = currentLang;
  }, [currentLang, location.pathname, t]);
  
  return null;
};

// Language redirect component
const LanguageRedirect = () => {
  const savedLang = localStorage.getItem('secvia-language');
  const defaultLang = savedLang && CONFIG.availableLanguages.includes(savedLang) 
    ? savedLang 
    : CONFIG.defaultLanguage;
  
  return <Navigate to={`/${defaultLang}`} replace />;
};

// 404 Page
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Root redirect */}
          <Route path="/" element={<LanguageRedirect />} />
          
          {/* Language routes */}
          <Route path="/:lang" element={<><SEOHead /><Layout /></>}>
            <Route index element={<HomePage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="support" element={<SupportPage />} />
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
