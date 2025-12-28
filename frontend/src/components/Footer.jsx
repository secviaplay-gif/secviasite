import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useLanguageContext } from '../context/LanguageContext';
import { CONFIG } from '../data/config';

export const Footer = () => {
  const { currentLanguage, t } = useLanguageContext();
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { href: `/${currentLanguage}/privacy`, label: t('footer.links.privacy') },
    { href: `/${currentLanguage}/terms`, label: t('footer.links.terms') },
    { href: `/${currentLanguage}/support`, label: t('footer.links.support') }
  ];
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={CONFIG.logos.icon} 
                alt="Secvia" 
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold text-white">Secvia</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">
              {t('nav.home')}
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-slate-400 hover:text-violet-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">
              {t('support.title')}
            </h3>
            <a 
              href={`mailto:${CONFIG.supportEmail}`}
              className="flex items-center gap-2 text-slate-400 hover:text-violet-400 text-sm transition-colors"
            >
              <Mail className="h-4 w-4" />
              {CONFIG.supportEmail}
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Secvia. {t('footer.rights')}
          </p>
          <a 
            href={CONFIG.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 text-sm transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </footer>
  );
};
