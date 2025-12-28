import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { CONFIG } from '../data/config';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  
  const getCurrentLanguage = useCallback(() => {
    // Check URL first
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts[0] && CONFIG.availableLanguages.includes(pathParts[0])) {
      return pathParts[0];
    }
    // Check localStorage
    const savedLang = localStorage.getItem('secvia-language');
    if (savedLang && CONFIG.availableLanguages.includes(savedLang)) {
      return savedLang;
    }
    return CONFIG.defaultLanguage;
  }, [location.pathname]);
  
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage);
  
  useEffect(() => {
    const newLang = getCurrentLanguage();
    setCurrentLanguage(newLang);
    localStorage.setItem('secvia-language', newLang);
    
    // Update document language
    document.documentElement.lang = newLang;
  }, [getCurrentLanguage, location.pathname]);
  
  const changeLanguage = useCallback((newLang) => {
    if (!CONFIG.availableLanguages.includes(newLang)) return;
    
    localStorage.setItem('secvia-language', newLang);
    setCurrentLanguage(newLang);
    
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    
    if (CONFIG.availableLanguages.includes(pathParts[0])) {
      pathParts.shift();
    }
    
    const newPath = `/${newLang}${pathParts.length ? '/' + pathParts.join('/') : ''}`;
    navigate(newPath);
  }, [location.pathname, navigate]);
  
  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = translations[CONFIG.defaultLanguage];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key;
          }
        }
        break;
      }
    }
    
    return value || key;
  }, [currentLanguage]);
  
  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t,
      availableLanguages: CONFIG.availableLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
};
