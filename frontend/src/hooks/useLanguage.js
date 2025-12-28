import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { CONFIG } from '../data/config';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  
  // Determine current language from URL or localStorage
  const getCurrentLanguage = useCallback(() => {
    if (lang && CONFIG.availableLanguages.includes(lang)) {
      return lang;
    }
    const savedLang = localStorage.getItem('secvia-language');
    if (savedLang && CONFIG.availableLanguages.includes(savedLang)) {
      return savedLang;
    }
    return CONFIG.defaultLanguage;
  }, [lang]);
  
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage);
  
  useEffect(() => {
    const newLang = getCurrentLanguage();
    setCurrentLanguage(newLang);
    localStorage.setItem('secvia-language', newLang);
  }, [getCurrentLanguage]);
  
  const changeLanguage = useCallback((newLang) => {
    if (!CONFIG.availableLanguages.includes(newLang)) return;
    
    localStorage.setItem('secvia-language', newLang);
    setCurrentLanguage(newLang);
    
    // Update URL path
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    
    // Remove existing language prefix if present
    if (CONFIG.availableLanguages.includes(pathParts[0])) {
      pathParts.shift();
    }
    
    // Build new path with new language
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
        // Fallback to default language
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
  
  return {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: CONFIG.availableLanguages
  };
};
