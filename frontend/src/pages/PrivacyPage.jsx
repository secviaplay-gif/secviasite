import React from 'react';
import { useLanguageContext } from '../context/LanguageContext';
import { CONFIG } from '../data/config';

export const PrivacyPage = () => {
  const { t } = useLanguageContext();
  const sections = t('privacy.sections') || [];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-slate-600">
              {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none">
              {Array.isArray(sections) && sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact */}
            <div className="mt-12 p-6 bg-slate-50 rounded-xl">
              <p className="text-slate-600">
                Email: <a href={`mailto:${CONFIG.supportEmail}`} className="text-violet-600 hover:text-violet-700 font-medium">{CONFIG.supportEmail}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
