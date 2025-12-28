import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from './ui/sheet';
import { useLanguageContext } from '../context/LanguageContext';
import { CONFIG } from '../data/config';

const languageNames = {
  ru: 'RU',
  ua: 'UA',
  en: 'EN'
};

export const Header = () => {
  const { currentLanguage, changeLanguage, t } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { href: `/${currentLanguage}`, label: t('nav.home') },
    { href: `/${currentLanguage}/privacy`, label: t('nav.privacy') },
    { href: `/${currentLanguage}/terms`, label: t('nav.terms') },
    { href: `/${currentLanguage}/support`, label: t('nav.support') }
  ];
  
  const isActive = (href) => {
    if (href === `/${currentLanguage}`) {
      return location.pathname === href || location.pathname === `/${currentLanguage}/`;
    }
    return location.pathname.startsWith(href);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={`/${currentLanguage}`} className="flex items-center gap-3">
            <img 
              src={CONFIG.logos.light} 
              alt="Secvia" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-violet-600 ${
                  isActive(link.href) ? 'text-violet-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                <Globe className="h-4 w-4" />
                {languageNames[currentLanguage]}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  {CONFIG.availableLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        changeLanguage(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        lang === currentLanguage
                          ? 'text-violet-600 bg-violet-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <Button 
              asChild
              className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6"
            >
              <a href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer">
                {t('hero.cta')}
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <SheetTitle className="sr-only">Меню навигации</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <img 
                      src={CONFIG.logos.light} 
                      alt="Secvia" 
                      className="h-8 w-auto"
                    />
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2 py-6">
                    {navLinks.map((link) => (
                      <SheetClose key={link.href} asChild>
                        <Link
                          to={link.href}
                          className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                            isActive(link.href)
                              ? 'text-violet-600 bg-violet-50'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  
                  {/* Mobile Language Switcher */}
                  <div className="border-t border-gray-100 py-4">
                    <p className="px-4 text-sm text-gray-500 mb-2">Язык / Language</p>
                    <div className="flex gap-2 px-4">
                      {CONFIG.availableLanguages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            changeLanguage(lang);
                            setIsOpen(false);
                          }}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                            lang === currentLanguage
                              ? 'bg-violet-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {languageNames[lang]}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mobile CTA */}
                  <div className="mt-auto pb-6 px-4">
                    <Button 
                      asChild
                      className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium h-12"
                    >
                      <a href={CONFIG.googlePlayUrl} target="_blank" rel="noopener noreferrer">
                        {t('hero.cta')}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Click outside to close language menu */}
      {langMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setLangMenuOpen(false)}
        />
      )}
    </header>
  );
};
